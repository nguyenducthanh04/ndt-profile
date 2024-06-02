import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./Search.module.scss";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = classNames.bind(styles);
function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("keyword");
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async (page) => {
            try {
                const response = await axios.get(
                    `https://phimapi.com/v1/api/tim-kiem?keyword=${keyword}&page=${page}`
                );
                setMovies(response.data.data.items);
                setTotalPages(response.data.data.params.pagination.totalPages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies(currentPage);
    }, [keyword, currentPage]); // Thêm keyword vào mảng phụ thuộc

    const handlePageChange = (page) => {
        setCurrentPage(page);
        toast.info(`Bạn đã chuyển sang trang số ${page}`, {
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
            <h1 style={{ marginBottom: "22px" }}>
                KẾT QUẢ TÌM KIẾM CHO TỪ KHÓA: {keyword}
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
            <div className={cx("pagination")}>
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={cx("page-button", {
                            active: page === currentPage,
                        })}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <ToastContainer
                icon={<FaCheckCircle style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Search;
