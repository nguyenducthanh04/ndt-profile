import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
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
                    "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3"
                );
                const result = await response.json();
                setBanner(result.items);
                console.log("banner:", banner)
            } catch (error) {
                console.error("Lỗi khi fetch dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        toast.success(
            `Hoàng Sa và Trường Sa là của Việt Nam`,
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
    const hello = () => {
        toast.success(
            `Bạn chào mình à, xin chào bạn nhaaaaa`,
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
    }
    const handlePlayClick = (slug) => {
        navigate(`/watch-movie/${slug}`);
    };

    const handleDetailClick = (slug) => {
        navigate(`/detail/${slug}`);
    };
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={cx("home-content")}>
            <Carousel data-bs-theme="dark" indicators={false} controls={true}>
  {banner?.map((bn) => (
    <Carousel.Item key={bn._id}>
      <div className={cx("banner-slide")}>
        <img
          className={cx("banner-img")}
          src={bn.poster_url}
          alt={bn.name}
        />

        <div className={cx("banner-content")}>
          <h2>{bn.name}</h2>
          <div className={cx("tags")}>
            <span>{bn.year}</span>
            <span>{bn.time}</span>
            <span>{bn.origin_name}</span>
          </div>
          <div className={cx("genres")}>
            {bn.category?.map((ctg) => (
            <span>{ctg.name}</span>
            ))}
          </div>
          <div className={cx("tags")}>
            <span>{bn.episode_current}</span>
            <span>{bn.quality}</span>
            <span>{bn.lang}</span>
          </div>
          <div className={cx("buttons")}>
            <button className={cx("play-btn")} onClick={() => handlePlayClick(bn.slug)}>
                ▶
            </button>
            <button onClick={hello}>Hi😁</button>
            <button onClick={() => handleDetailClick(bn.slug)}>
                ℹ
            </button>
          </div>
        </div>
      </div>
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
