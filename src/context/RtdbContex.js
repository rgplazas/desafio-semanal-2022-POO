import ContextoRtdb from "./Contexto";
import { useState } from "react";
import { ref, onValue, query, orderByChild } from "firebase/database";
import { db } from "../services/firebase";

export default function RtdbContex(props) {
    
    //referencias firebase
    const refRetosSemanal = ref(db, "retosSemanal/");
    const refRetosMensual = ref(db, "retosMensual/");

    //query firebase
    const queryRetosSemanal = query(refRetosSemanal, orderByChild("app/")); // ordenar por la clave orden todos los elementos semanal
    const queryRetosMensual = query(refRetosMensual, orderByChild("app/")); // ordenar por la clave orden todos los elementos mensual
    //const queryRetosSemanal = query(refRetosSemanal, limitToFirst(3)); //trae los primeros tres retos de retosSemanal
    //const queryRetosMensual = query(refRetosMensual, limitToFirst(3)); //trae los primeros tres retos de retosMensual
    //const queryRetosSemanal = query(refRetosSemanal, limitToLast(3)); //trae los ultimos tres retos de retosSemanal
    //const queryRetosMensual = query(refRetosMensual, limitToLast(3)); //trae los ultimos tres retos de retosMensual
    //Estados de los useState
    const [estadoSemanal, setEstadoSemanal] = useState([]);
    const [estadoMensual, setEstadoMensual] = useState([]);

    const { children } = props;

    const listameRetosSemanal = async () => {
        onValue(queryRetosSemanal, (snap) => {
            let data = snap.val();
            setEstadoSemanal(data);
        })
    }

    const listameRetosMensual = async () => {
        onValue(queryRetosMensual, (snap) => {
            let data = snap.val();
            setEstadoMensual(data);
        })
    }

    return (
        <>
            <ContextoRtdb.Provider value={{
                retosSemanal: estadoSemanal,
                retosMensual: estadoMensual,
                listameRetosSemanal,
                listameRetosMensual
            }}>
                {children}
            </ContextoRtdb.Provider>
        </>
    )
}
