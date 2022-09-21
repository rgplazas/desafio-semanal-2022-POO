import ContextoFirestore from "./Contexto";
import { useState } from "react";
import { collection, addDoc, updateDoc, onSnapshot, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../services/firebase";

export default function FirestoreContex(props) {

    const { children } = props;

    const collectionName = "retosMensual";

    //Estados de los useState
    const [estadoMensual, setEstadoMensual] = useState([]);

    //query firebase
    const listameRetosMensual = async () => {
        const querySnapshot = await getDocs(collection(firestore, collectionName));
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoMensual(docs);
    }

    return (
        <>
            <ContextoFirestore.Provider value={{
                retosMensual: estadoMensual,
                listameRetosMensual
            }}>
                {children}
            </ContextoFirestore.Provider>
        </>
    )
}
