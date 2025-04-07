import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./GenerateMovieByCountry.module.scss";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ImageNoData from "../../assets/images/emiuuuu.jpg";
import Loading from "../../assets/images/vn-flag-full.gif";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function GenerateMovieByCountry() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("keyword");
    const pageFromUrl = parseInt(searchParams.get("page")) || 1; // Lấy page từ URL
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(pageFromUrl); // Khởi tạo từ URL
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchMovies = async (page) => {
            try {
                const response = await axios.get(
                    `https://phimapi.com/v1/api/quoc-gia/${keyword}?page=${page}`
                );
                setMovies(response.data.data.items);
                setTotalPages(response.data.data.params.pagination.totalPages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Đồng bộ currentPage với pageFromUrl khi keyword hoặc pageFromUrl thay đổi
        setCurrentPage(pageFromUrl);
        fetchMovies(pageFromUrl);
    }, [keyword, pageFromUrl]); // Chạy khi keyword hoặc pageFromUrl thay đổi

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Cập nhật URL khi chuyển trang
        navigate(`/quoc-gia?keyword=${encodeURIComponent(keyword)}&page=${page}`);
        toast.success(`Bạn đã chuyển sang trang ${page}`, {
            icon: <FaCheckCircle style={{ color: "green" }} />,
        });
    };

    const renderPagination = () => {
        const pages = [];

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
        <div className={cx("content-anime")}>
            <h1>
                Danh sách phim: <em style={{ color: "green" }}>{keyword}</em>
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
            <div className={cx("pagination")}>{renderPagination()}</div>
            <ToastContainer
                icon={<FaCheckCircle style={{ color: "green" }} />}
            />
        </div>
    );
}

export default GenerateMovieByCountry;