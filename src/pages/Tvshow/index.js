import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./Tvshow.module.scss";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = classNames.bind(styles);
function Tvshow() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async (page) => {
            try {
                const response = await axios.get(
                    `https://phimapi.com/v1/api/danh-sach/tv-shows?page=${page}`
                );
                setMovies(response.data.data.items);
                setTotalPages(response.data.data.params.pagination.totalPages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        toast.success(`Bạn đã chuyển sang trang ${page}`, {
            icon: <FaCheckCircle style={{ color: "green" }} />,
        });
    };

    const renderPagination = () => {
        const pages = [];

        // Prev button
        if (currentPage > 1) {
            pages.push(
                <button
                    key="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={cx("page-button")}
                >
                    <FaChevronLeft />
                </button>
            );
        }

        // Page numbers
        if (currentPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={cx("page-button", {
                        active: currentPage === 1,
                    })}
                >
                    1
                </button>
            );
        }

        if (currentPage > 2) {
            pages.push(
                <button key="ellipsis1" className={cx("ellipsis")}>
                    ...
                </button>
            );
        }

        pages.push(
            <button
                key={currentPage}
                onClick={() => handlePageChange(currentPage)}
                className={cx("page-button", {
                    active: true,
                })}
            >
                {currentPage}
            </button>
        );

        if (currentPage < totalPages - 1) {
            pages.push(
                <button key="ellipsis2" className={cx("ellipsis")}>
                    ...
                </button>
            );
        }

        if (currentPage < totalPages) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={cx("page-button", {
                        active: currentPage === totalPages,
                    })}
                >
                    {totalPages}
                </button>
            );
        }

        // Next button
        if (currentPage < totalPages) {
            pages.push(
                <button
                    key="next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={cx("page-button")}
                >
                    <FaChevronRight />
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={cx("wrapper")}>
            <h1>Danh sách phim truyền hình</h1>
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
            <div className={cx("pagination")}>{renderPagination()}</div>
            <ToastContainer
                icon={<FaCheckCircle style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Tvshow;
