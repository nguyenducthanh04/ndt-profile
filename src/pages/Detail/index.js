import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import styles from "./Detail.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTheRedYeti, FaPaperPlane } from "react-icons/fa";
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
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
        const movieExists = savedMovies.some(
            (savedMovie) => savedMovie.slug === movie.slug
        );

        if (movieExists) {
            savedMovies = savedMovies.filter(
                (savedMovie) => savedMovie.slug !== movie.slug
            );
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            toast.info(`Phim đã bị xóa khỏi danh sách yêu thích!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSaved(false);
        } else {
            savedMovies.push(movie);
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            toast.success(`Phim đã được thêm vào danh sách yêu thích!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSaved(true);
        }
    };
    const trailerUrl = movie.trailer_url;
    const embedUrl = trailerUrl ? trailerUrl.replace("watch?v=", "embed/") : "";
    const listActor = movie.actor;
    const convertListActor = listActor ? listActor.join(", ") : "";
    const listCountry = movie.country;
    const convertListCountry = listCountry ? listCountry.join(", ") : "";
    const shareOnFacebook = () => {
        const movieUrl = `https://ndthah.vercel.app/detail/${slug}`;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(movieUrl)}`;
      
        window.open(shareUrl, "_blank", "width=600,height=400");
      };
    return (
        <div className={cx("container")}>
            <div className={cx("detail-banner")}>
                    <img
                        src={movie.thumb_url}
                        alt={movie.name}
                        className={cx("detail-banner-img")}
                    />
            </div>
            <div className={cx("row")}>
        <div className={cx("col-md-4")}>
                    <img
                        src={movie.poster_url}
                        alt={movie.name}
                        className={cx("poster-img")}
                    />
                    <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>{movie.name}</h2>
                    <h5 style={{ marginTop: "20px", marginBottom: "10px" }}>{movie.origin_name}</h5>
                    <div className={cx("btn-mobile-display")}>
                    <Link
                        className={cx("play")}
                        to={`/watch-movie/${movie.slug}`}
                    >
                        <button className={cx("btn-play")}>Xem Ngay</button>
                    </Link>
                   <div className={cx("display-btn-2")}>
                   <button
                        className={cx("btn-save")}
                        onClick={handleSaveMovie}
                    >
                        {isSaved ? "💔" : "❤️"}
                    </button>
                    <button className={cx("btn-share")} onClick={shareOnFacebook}>
                        <FaPaperPlane style={{color: "white"}}/>
                    </button>
                   </div>
                    </div>
                    <div className={cx("tags")}>
                        <span>{movie.year}</span>
                        <span>{movie.episode_current}</span>
                    </div>
                    <div className={cx("genres")}>
                        {movie.category?.map((ctg) => (
                        <span>{ctg.name}</span>
                    ))}
                    </div>
                    <br></br>
                    {embedUrl !== "" ? (
                        <div style={{marginTop: "10px"}}>
                        <h3 style={{color: "#ffbe0b", marginBottom: "20px"}}>Trailer</h3>
                        <iframe 
                         width="248" 
                         height="150" 
                         src={embedUrl}
                         title="YouTube video player" 
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                        ></iframe>
                    </div>
                    ) : ""}
                </div>
                <div className={cx("col-md-8")}>
                <div className={cx("btn-desktop-display")}>
                <Link
                        className={cx("play")}
                        to={`/watch-movie/${movie.slug}`}
                    >
                        <button className={cx("btn-play")}>Xem Ngay</button>
                    </Link>
                    <button
                        className={cx("btn-save")}
                        onClick={handleSaveMovie}
                    >
                        {isSaved ? "💔" : "❤️"}
                    </button>
                    <button className={cx("btn-share")} onClick={shareOnFacebook}>
                        <FaPaperPlane style={{color: "white"}}/>
                    </button>
                </div>
                <h4 style={{marginTop: "40px"}}>Giới thiệu:</h4>
                    <p style={{width: "", color: "#AAAAAA", fontSize: "14px"}}>{movie.content}</p>
                    <h4 style={{marginTop: "20px"}}>Thời lượng: <span style={{color: "#AAAAAA", fontSize: "14px"}}>{movie.time}</span></h4>
                    <h4 style={{marginTop: "20px"}}>Quốc gia: {movie.country?.map((c) => (
                         <span style={{color: "#AAAAAA", fontSize: "14px"}}>{c.name}_ </span>
                    ))}
                    </h4>
                    <h4 style={{width: "", marginTop: "20px"}}>Diễn viên: <span style={{color: "#AAAAAA", fontSize: "14px"}}>{convertListActor}</span></h4>
                    <h4 style={{width: "", marginTop: "20px"}}>Đạo diễn: <span style={{color: "#AAAAAA", fontSize: "14px"}}>{movie.director}</span></h4>
                    <h4 style={{width: "", marginTop: "20px"}}>Phụ đề: <span style={{color: "#AAAAAA", fontSize: "14px"}}>{movie.lang}</span></h4>
                </div>
            </div>
            <ToastContainer
                icon={<FaTheRedYeti style={{ color: "green" }} />}
            />
        </div>
    );
}

export default Detail;
