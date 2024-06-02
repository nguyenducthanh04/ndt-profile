import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.scss";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

function Detail() {
    const { slug } = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const apiUrl = `https://phimapi.com/phim/${slug}`;
        axios
            .get(apiUrl)
            .then((response) => {
                setMovie(response.data.movie);
                console.log("movi", response.data.movie.content);
                console.log("movi url avt: ", response.data.movie.country.name);
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error("Error fetching data:", error);
            });
    }, [slug]);
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
                            marginLeft: "6px",
                            height: "30px",
                            width: "80px",
                        }}
                    >
                        {movie.episode_current}
                    </button>
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

                    {/* <h2>Đạo diễn</h2>
                    <p>Jinanavin Veerapatra</p> */}

                    <h2>Diễn viên</h2>
                    {/* <ul>
                        <li>Ranee Campen</li>
                        <li>Tachaya Pathumwan</li>
                        <li>Sorawit. Tongteng</li>
                        <li>Nalinee Cheewasakorn</li>
                        <li>Pattechin Sasipatthanathada</li>
                        <li>Rujira Khajicharoen</li>
                        <li>Apinan Teeranantakul</li>
                        <li>Manop Srijupao</li>
                        <li>Thanakrit Jenklongthan</li>
                    </ul> */}
                    <p>{movie.actor}</p>

                    <h2>Thể loại</h2>
                    <ul>
                        {movie.category?.map((cate) => (
                            <li>{cate.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Detail;
