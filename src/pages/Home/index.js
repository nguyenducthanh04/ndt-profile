import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTheRedYeti } from "react-icons/fa";
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
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/phim-le"
                );
                const result = await response.json();
                setMovieOdd(result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/hoat-hinh"
                );
                const result = await response.json();
                setAnime(result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/v1/api/danh-sach/phim-bo"
                );
                const result = await response.json();
                setMovies(result.data.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://phimapi.com/danh-sach/phim-moi-cap-nhat"
                );
                const result = await response.json();
                setBanner(result.items);
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        toast.success(
            `Chào mừng đến với ThanhNguyen ! Chúc bạn xem phim vui vẻ ^^`,
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
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className={cx("home-content")}>
            <Carousel data-bs-theme="dark">
                {banner?.map((bn) => (
                    <Carousel.Item>
                        <Link to={`/detail/${bn.slug}`}>
                            <img
                                className="d-block w-100"
                                src={bn.poster_url}
                                alt={bn.name}
                            />
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={cx("content-movie")}>
                <div style={{ display: "flex" }}>
                    <h2>Phim lẻ</h2>
                    <h2 style={{ float: "right", marginRight: "20px" }}>
                        <a href="/phim-le">Xem tất cả</a>
                    </h2>
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
                <div style={{ display: "flex" }}>
                    <h2>Hoạt hình</h2>
                    <h2 style={{ float: "right", marginRight: "20px" }}>
                        <a href="/anime">Xem tất cả</a>
                    </h2>
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
                <div style={{ display: "flex" }}>
                    <h2>Phim bộ</h2>
                    <h2 style={{ float: "right", marginRight: "20px" }}>
                        <a href="/phim-bo">Xem tất cả</a>
                    </h2>
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
