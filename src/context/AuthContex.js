import ContextoAuth from "./Contexto";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { setDoc, doc, updateDoc } from "firebase/firestore"
import { auth,  firestore } from "../services/firebase";

export default function AuthContex(props) {
    const { children } = props;
    //registro
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //logeo usuario y contraseña
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // logeo por gmail
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };
    // logeo por github
    const loginWithGitHub = () => {
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider);
    };
    // cerrar session
    const logout = () => signOut(auth);
    //Se comprueba si el usuario esta logeado o no
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);

    // coleccion de datos
    const collectionUsuarios = "usuarios";

    const documentUserDB = async (userLogin) => {
        let userLogeo = userLogin.user.reloadUserInfo;
        if (userLogeo)
        await setDoc(doc(firestore, collectionUsuarios , userLogeo.localId), {
            localId:userLogeo.localId,
            name:userLogeo.displayName,
            email:userLogeo.email,
            images:userLogeo.photoUrl,
            provider:userLogeo.providerUserInfo[0].providerId,
            ultimoInicioSesion:userLogeo.lastLoginAt,
            conectado: true
        })
    }

    const updateUserDBConeccion = async (userlogout) => {
        let userLogeo = userlogout.reloadUserInfo;
        if (userLogeo)
        await updateDoc(doc(firestore,collectionUsuarios,userLogeo.localId ),{
            conectado: false
        })
    }

    return (
        <>
            <ContextoAuth.Provider value={{
                signup,
                login,
                user,
                documentUserDB,
                updateUserDBConeccion,
                loading,
                loginWithGoogle,
                loginWithGitHub,
                logout,
                resetPassword
            }}>
                {children}
            </ContextoAuth.Provider>
        </>
    )
}
