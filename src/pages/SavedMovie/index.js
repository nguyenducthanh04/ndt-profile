import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTheRedYeti } from "react-icons/fa";
import styles from "./SavedMovie.module.scss";

const cx = classNames.bind(styles);

function SavedMovie() {
    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem("savedMovies")) || [];
        setSavedMovies(movies);
    }, []);

    const handleRemoveMovie = (slug) => {
        const updatedMovies = savedMovies.filter(
            (movie) => movie.slug !== slug
        );
        localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
        setSavedMovies(updatedMovies);
        toast.success(`Phim đã được xóa khỏi danh sách yêu thích!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className={cx("wrapper")}>
            <h1>Danh sách phim yêu thích</h1>
            {savedMovies.length !== 0 ? (
                <div className={cx("movie-list")}>
                {savedMovies?.map((movie) => (
                    <div className={cx("product-item")} key={movie._id}>
                        <Link
                            to={`/detail/${movie.slug}`}
                            style={{ textDecoration: "none" }}
                        >
                            <img
                                className={cx("img-product")}
                                src={movie.thumb_url}
                                alt={movie.name}
                            />
                            <h3 className={cx("name-product")}>{movie.name}</h3>
                        </Link>
                        <button
                            className={cx("undo-film")}
                            onClick={() => handleRemoveMovie(movie.slug)}
                        >
                            💔 Bỏ thích
                        </button>
                    </div>
                ))}
            </div>
            ) : <p style={{textAlign: "center", color: "red"}}>Không có phim yêu thích!</p>}
            <ToastContainer
                icon={<FaTheRedYeti style={{ color: "green" }} />}
            />
        </div>
    );
}

export default SavedMovie;
