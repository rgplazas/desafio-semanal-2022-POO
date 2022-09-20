import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import { Container, Row } from 'react-bootstrap';
import RetoMensual from "../components/RetoMensual";

export default function Mensual() {
    const { listameRetosMensual, retosMensual } = useContext(Contexto);
    useEffect(() => {
        listameRetosMensual();
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
                                    retosMensual.map((item) => (
                                        <RetoMensual {...item} key={item.app}></RetoMensual>
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
