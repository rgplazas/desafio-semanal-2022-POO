import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import {Container, Row } from 'react-bootstrap';
import RetoSemanal from "../components/RetoSemanal";

export default function Semanal() {
    const { listameRetosSemanal, retosSemanal } = useContext(Contexto);
    useEffect(() => {
        listameRetosSemanal();
    }, []);
    return (
        <>
            <div className="container">
                <div className="wraper">
                    <div className="home">
                        <br />
                        <Container>
                            <Row>
                                {
                                    retosSemanal.map((item) => (
                                        <RetoSemanal {...item} key={item.app}></RetoSemanal>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}
