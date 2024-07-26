import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTheRedYeti } from "react-icons/fa";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

function Detail() {
    const { slug } = useParams();
    const [movie, setMovie] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    useEffect(() => {
        const apiUrl = `https://phimapi.com/phim/${slug}`;
        axios
            .get(apiUrl)
            .then((response) => {
                setMovie(response.data.movie);
                checkIfSaved(response.data.movie);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [slug]);
    const checkIfSaved = (movie) => {
        const savedMovies =
            JSON.parse(localStorage.getItem("savedMovies")) || [];
        const movieExists = savedMovies.some(
            (savedMovie) => savedMovie.slug === movie.slug
        );
        setIsSaved(movieExists);
    };
    const handleSaveMovie = () => {
        const savedMovies =
            JSON.parse(localStorage.getItem("savedMovies")) || [];
        const movieExists = savedMovies.some(
            (savedMovie) => savedMovie.slug === movie.slug
        );

        if (!movieExists) {
            savedMovies.push(movie);
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            toast.success(`Phim đã được lưu!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.warning(`Phim này đã có trong danh sách lưu!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <div className={cx("container")}>
            <div className={cx("row")}>
                <div className={cx("col-md-6")}>
                    <img
                        src={movie.thumb_url}
                        alt={movie.name}
                        className={cx("poster-img")}
                    />
                    <h4 style={{ marginTop: "10px" }}>{movie.name}</h4>
                    <Link
                        className={cx("play")}
                        to={`/watch-movie/${movie.slug}`}
                    >
                        Xem ngay
                    </Link>
                    <button
                        style={{
                            background: "#3a86ff",
                            color: "#fff",
                            borderRadius: "3px",
                            marginTop: "5px",
                            marginLeft: "6px",
                            height: "30px",
                            width: "50px",
                        }}
                    >
                        {movie.quality}
                    </button>
                    <button
                        style={{
                            background: "#3a86ff",
                            color: "#fff",
                            borderRadius: "3px",
                            marginTop: "5px",
                            marginLeft: "6px",
                            height: "30px",
                            width: "50px",
                        }}
                    >
                        {movie.year}
                    </button>
                    <button
                        style={{
                            background: "#3a86ff",
                            color: "#fff",
                            borderRadius: "3px",
                            marginTop: "5px",
                            marginLeft: "6px",
                            height: "30px",
                            width: "80px",
                        }}
                    >
                        {movie.episode_current}
                    </button>
                    {isSaved ? (
                        <button
                            style={{
                                background: "red",
                                color: "#fff",
                                borderRadius: "3px",
                                marginTop: "5px",
                                marginLeft: "6px",
                                height: "30px",
                                width: "80px",
                            }}
                        >
                            Đã Lưu
                        </button>
                    ) : (
                        <button
                            style={{
                                background: "#17C964",
                                color: "#fff",
                                borderRadius: "3px",
                                marginTop: "5px",
                                marginLeft: "6px",
                                height: "30px",
                                width: "80px",
                            }}
                            onClick={handleSaveMovie}
                        >
                            Lưu phim
                        </button>
                    )}
                </div>
                <div className={cx("col-md-6")}>
                    <h2>Nội dung</h2>
                    <p>{movie.content}</p>

                    <h2>Quốc gia</h2>
                    {movie.country?.map((c) => (
                        <p>{c.name}</p>
                    ))}
                    <h2>Thời lượng</h2>
                    <p>{movie.time}</p>

                    <h2>Diễn viên</h2>
                    <p>{movie.actor}</p>

                    <h2>Thể loại</h2>
                    <ul>
                        {movie.category?.map((cate) => (
                            <li>{cate.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <ToastContainer
                icon={<FaTheRedYeti style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Detail;
