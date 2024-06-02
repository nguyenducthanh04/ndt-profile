import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaTheRedYeti } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import Carousel from "react-bootstrap/Carousel";

const cx = classNames.bind(styles);
function Home() {
    const [movieOdd, setMovieOdd] = useState([]);
    const [anime, setAnime] = useState([]);
    const [movies, setMovies] = useState([]);
    const [banner, setBanner] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Hàm fetch dữ liệu từ API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/phim-le"
                ); // Thay thế bằng URL API thực tế
                const result = await response.json();
                setMovieOdd(result.data.items); // Truy cập mảng movieOdd từ phản hồi API
                // console.log("kq:", result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []); // Mảng dep
    useEffect(() => {
        // Hàm fetch dữ liệu từ API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/hoat-hinh"
                ); // Thay thế bằng URL API thực tế
                const result = await response.json();
                setAnime(result.data.items);
                // console.log("kq:", result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []); // Mảng dep
    useEffect(() => {
        // Hàm fetch dữ liệu từ API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/phim-bo"
                ); // Thay thế bằng URL API thực tế
                const result = await response.json();
                setMovies(result.data.items);
                // console.log("kq:", result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Hàm fetch dữ liệu từ API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/danh-sach/phim-moi-cap-nhat"
                ); // Thay thế bằng URL API thực tế
                const result = await response.json();
                setBanner(result.items);
                console.log("kq:", result.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []); // Mảng dep
    useEffect(() => {
        toast.success(
            `Chào mừng đến với ThanhMovie ! Chúc bạn xem phim vui vẻ ^^`,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    }, []); // Chỉ chạy một lần khi component được mount

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className={cx("wrapper")}>
            <Carousel data-bs-theme="dark">
                {banner?.map((bn) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bn.poster_url}
                            alt={bn.name}
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.phimapi.com/upload/vod/20240530-1/fd1ab7132570217d6087388c1660b91c.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.phimapi.com/upload/vod/20240530-1/fd1ab7132570217d6087388c1660b91c.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            <div className={cx("content-movie")}>
                <div style={{ display: "flex", width: "1786px" }}>
                    <h2>Phim lẻ</h2>
                    <br></br>
                </div>
                <div className={cx("list-movie")}>
                    {movieOdd.map((movie) => {
                        return (
                            <Link to={`/detail/${movie.slug}`}>
                                <div
                                    className={cx("product-item")}
                                    key={movie._id}
                                >
                                    <img
                                        className={cx("img-product")}
                                        src={`https://img.phimapi.com/${movie.poster_url}`}
                                        alt={movie.name}
                                    />
                                    <h3 className={cx("name-product")}>
                                        {movie.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={cx("content-movie")}>
                <div style={{ display: "flex", width: "1786px" }}>
                    <h2>Hoạt hình</h2>
                    <br></br>
                </div>
                <div className={cx("list-movie")}>
                    {anime.map((movie) => {
                        return (
                            <Link to={`/detail/${movie.slug}`}>
                                <div
                                    className={cx("product-item")}
                                    key={movie._id}
                                >
                                    <img
                                        className={cx("img-product")}
                                        src={`https://img.phimapi.com/${movie.poster_url}`}
                                        alt={movie.name}
                                    />
                                    <h3 className={cx("name-product")}>
                                        {movie.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={cx("content-movie")}>
                <div style={{ display: "flex", width: "1786px" }}>
                    <h2>Phim bộ</h2>
                    <br></br>
                </div>
                <div className={cx("list-movie")}>
                    {movies.map((movie) => {
                        return (
                            <Link to={`/detail/${movie.slug}`}>
                                <div
                                    className={cx("product-item")}
                                    key={movie._id}
                                >
                                    <img
                                        className={cx("img-product")}
                                        src={`https://img.phimapi.com/${movie.poster_url}`}
                                        alt={movie.name}
                                    />
                                    <h3 className={cx("name-product")}>
                                        {movie.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <ToastContainer
                icon={<FaTheRedYeti style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Home;
