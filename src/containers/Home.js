//import "../assets/css/Home.css";
import { Container } from "react-bootstrap";
export default function Home() {
    return (
        <>
            <Container style={{ height: '90vh' }}>
                <br />
                <h1 className="notion-title">
                    Mejora tus habilidades <b>↑</b>
                </h1>
                <div>
                    <div>
                        <article>
                            <h4>
                                Ejercicios para mejorar tu lógica de programación y desarrollo
                                de aplicaciones para añadir a tu portfolio personal.
                            </h4>
                            <div>&nbsp;</div>
                            <div>
                                <span>
                                    <b>→</b>
                                </span>
                                <b> Totalmente a ritmo de la materia POO (Programación Orientada a Objetos)</b>
                            </div>
                            <div>
                                <span>
                                    <b>→</b>
                                </span>
                                <b> Basados en pruebas técnicas y entrevistas de trabajo</b>
                            </div>
                            <div>
                                <span>
                                    <b>→</b>
                                </span>
                                <b> Usa el lenguaje de programación y tecnología que quieras</b>
                            </div>
                            <div>
                                <span>
                                    <b>→</b>
                                </span>
                                <b> En constante actualización</b>
                            </div>
                            <div>
                                <span>
                                    <b>→</b>
                                </span>
                                <b> Corrección y revisión en clase</b>
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </>
    );
}
