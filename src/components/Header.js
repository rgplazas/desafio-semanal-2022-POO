import { useContext } from "react";
import Contexto from "../context/Contexto";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconoCabecera from "../assets/statics/loading.gif";
import Present from "./Present";
export default function Header() {
    const { logout, user } = useContext(Contexto);

    const handleLogout = async () => {
        await logout()
    }
    let cabecera = "";
    if (user) {
        cabecera = <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top" />{' '}Retos de Programación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/semanales2022">Ejercicios Semanales '22</Nav.Link>
                            <Nav.Link href="/mensuales2022">Apps Mensuales '22</Nav.Link>
                            <Nav.Link href="https://github.com/rgplazas/desafio-semanal-2022-POO">Proyecto en GitHub</Nav.Link>
                            <Nav.Link style={{ 'color': 'red' }} onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Present></Present>
        </>;
    }

    return (cabecera);
}
