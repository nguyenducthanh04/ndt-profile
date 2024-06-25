import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
function Header() {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    const headerStyle = {
        fontSize: "1.6rem",
        position: "fixed",
        zIndex: "1",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        width: "100%",
    };
    const navLink = {
        color: "#fff",
    };
    const searchStyle = {
        height: "50px",
        width: "300px",
        fontSize: "1.6rem",
        marginLeft: "auto",
    };

    const searchButtonStyle = {
        fontSize: "1.6rem",
    };
    return (
        <Navbar expand="lg" className="bg-body-dark" style={headerStyle}>
            <Container fluid>
                <Navbar.Brand
                    href="/"
                    style={{
                        fontWeight: "800",
                        color: "red",
                        fontSize: "1.8rem",
                    }}
                >
                    THANHMOVIE
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    style={{ color: "#fff", backgroundColor: "#fff" }}
                />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/" style={navLink}>
                            Trang Chủ
                        </Nav.Link>
                        <Nav.Link href="/phim-le" style={navLink}>
                            Phim Lẻ
                        </Nav.Link>
                        <Nav.Link href="/phim-bo" style={navLink}>
                            Phim Bộ
                        </Nav.Link>
                        <Nav.Link href="/anime" style={navLink}>
                            Anime
                        </Nav.Link>
                        <Nav.Link href="/tv-shows" style={navLink}>
                            TV Shows
                        </Nav.Link>
                        <Nav.Link href="/saved-movie" style={navLink}>
                            Phim Đã Lưu
                        </Nav.Link>
                        <Nav.Link href="/about" style={navLink}>
                            Giới Thiệu
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-4"
                            aria-label="Search"
                            style={searchStyle}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Button
                            variant="outline-success"
                            style={searchButtonStyle}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;
