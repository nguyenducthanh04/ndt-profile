import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./Search.module.scss";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = classNames.bind(styles);
function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("keyword");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async (page) => {
            try {
                const response = await axios.get(
                    `https://phimapi.com/v1/api/tim-kiem?keyword=${keyword}`
                );
                setMovies(response.data.data.items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies();
    }, [keyword]); // Thêm keyword vào mảng phụ thuộc

    return (
        <div className={cx("wrapper")}>
            <h1>
                KẾT QUẢ TÌM KIẾM CHO TỪ KHÓA: <em>{keyword}</em>
            </h1>
            <div className={cx("movie-list")}>
                {movies?.map((movie) => (
                    <Link to={`/detail/${movie.slug}`}>
                        <div className={cx("product-item")} key={movie._id}>
                            <img
                                className={cx("img-product")}
                                src={`https://img.phimapi.com/${movie.poster_url}`}
                                alt={movie.name}
                            />
                            <h3 className={cx("name-product")}>{movie.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <ToastContainer
                icon={<FaCheckCircle style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Search;
