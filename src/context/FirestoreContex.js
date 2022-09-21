import { useState } from "react";
import ContextoFirestore from "./Contexto";
import { collection, getDocs, query, orderBy} from "firebase/firestore";
import { firestore } from "../services/firebase";

export default function FirestoreContex(props) {

    const { children } = props;

    //Estados de los useState
    const [estadoSemanal, setEstadoSemanal] = useState([]);
    const [estadoMensual, setEstadoMensual] = useState([]);
    
    // coleccion de datos
    const collectionNameSemanal = "retosSemanal";
    const collectionNameMensual = "retosMensual";

    //Referencias firebase
    //Definir una referencia de consulta con el SDK de Firebase
    const refRetosSemanal = collection(firestore, collectionNameSemanal);
    const refRetosMensual = collection(firestore, collectionNameMensual);

    //query firebase
    //const queryRetosSemanalCondicional = query(refRetosSemanal,where("habilitado", ">", 0), limit(3));
    //const queryRetosMensualCondicional = query(refRetosMensual,where("habilitado", ">", 0), limit(1));
    //const queryRetosSemanalOrdenado = query(refRetosSemanal, orderBy("app", "asc"), limit(3));
    //const queryRetosMensualOrdenado = query(refRetosMensual, orderBy("app", "desc"), limit(1));
    const queryRetosSemanalOrdenado = query(refRetosSemanal, orderBy("app", "asc"));
    const queryRetosMensualOrdenado = query(refRetosMensual, orderBy("app", "asc"));

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
                retosSemanal: estadoSemanal,
                retosMensual: estadoMensual,
                listameRetosSemanal,
                listameRetosMensual
            }}>
                {children}
            </ContextoFirestore.Provider>
        </>
    )
}
