import { useState, useContext } from "react";
import ContextoFirestore from "./Contexto";
import { collection, getDocs, query, orderBy, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default function FirestoreContex(props) {
    const { children } = props;

    const { user } = useContext(ContextoFirestore);

    //Estados de los useState
    const [estadoUser, setEstadoUser] = useState([]);
    const [estadoSemanal, setEstadoSemanal] = useState([]);
    const [estadoMensual, setEstadoMensual] = useState([]);

    // coleccion de datos
    const collectionUsuarios = "usuarios";
    const collectionNameSemanal = "retosSemanal";
    const collectionNameMensual = "retosMensual";

    //Referencias firebase
    //Definir una referencia de consulta con el SDK de Firebase
    const refRetosUsuarios = collection(firestore, collectionUsuarios);
    const refRetosSemanal = collection(firestore, collectionNameSemanal);
    const refRetosMensual = collection(firestore, collectionNameMensual);

    //query firebase
    //const queryRetosSemanalCondicional = query(refRetosSemanal,where("habilitado", ">", 0), limit(3));
    //const queryRetosMensualCondicional = query(refRetosMensual,where("habilitado", ">", 0), limit(1));
    //const queryRetosSemanalOrdenado = query(refRetosSemanal, orderBy("app", "asc"), limit(3));
    //const queryRetosMensualOrdenado = query(refRetosMensual, orderBy("app", "desc"), limit(1));
    const queryRetosUsuariosOrdenado = query(refRetosUsuarios);
    const queryRetosSemanalOrdenado = query(refRetosSemanal, orderBy("app", "asc"));
    const queryRetosMensualOrdenado = query(refRetosMensual, orderBy("app", "asc"));

    const createUser = async () => {
        await addDoc(refRetosUsuarios, {  
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            images: user.photoURL,
            provider: user.providerData[0].providerId,
            emailVerificado: user.emailVerified,
            conectado : true }
        );
    };

    const listameUsuarios = async () => {
        const querySnapshot = await getDocs(queryRetosUsuariosOrdenado);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoUser(docs);
    }

    const listameRetosSemanal = async () => {
        const querySnapshot = await getDocs(queryRetosSemanalOrdenado);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoSemanal(docs);
    }

    const listameRetosMensual = async () => {
        const querySnapshot = await getDocs(queryRetosMensualOrdenado);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoMensual(docs);
    }

    return (
        <>
            <ContextoFirestore.Provider value={{
                usuarios: estadoUser,
                retosSemanal: estadoSemanal,
                retosMensual: estadoMensual,
                listameUsuarios,
                createUser,
                listameRetosSemanal,
                listameRetosMensual
            }}>
                {children}
            </ContextoFirestore.Provider>
        </>
    )
}
