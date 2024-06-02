import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./WatchMovie.module.scss";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
const cx = classNames.bind(styles);
function WatchMovie() {
    const { slug } = useParams();
    const [movieCurrent, setMovieCurrent] = useState([]);
    const [currentUrl, setCurrentUrl] = useState("");
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    useEffect(() => {
        const apiUrl = `https://phimapi.com/phim/${slug}`;
        axios
            .get(apiUrl)
            .then((response) => {
                setMovieCurrent(response.data);
                console.log("movi url avt: ", response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [slug]);

    useEffect(() => {
        // Thiết lập URL mặc định từ tập phim đầu tiên khi component được tải lần đầu
        if (movieCurrent.episodes && movieCurrent.episodes[0]?.server_data) {
            setCurrentUrl(
                movieCurrent.episodes[0].server_data[0]?.link_m3u8 ||
                    movieCurrent.link_m3u8
            );
            setSelectedEpisode(movieCurrent.episodes[0].server_data[0]?.slug);
        }
    }, [movieCurrent]);

    const handleEpisodeClick = (url, slug) => {
        setCurrentUrl(url);
        setSelectedEpisode(slug);
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("name-movie")}>
                    <h3>{movieCurrent.movie?.name}</h3>
                </div>
                <div className={cx("movie-video")}>
                    <div className={cx("player-wrapper")}>
                        <ReactPlayer
                            className={cx("react-player")}
                            url={currentUrl || movieCurrent.link_m3u8}
                            controls
                            width="100vw"
                            height="50vh"
                            playing
                            loop
                            muted
                            config={{
                                file: {
                                    attributes: {
                                        crossOrigin: "anonymous",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className={cx("list-episodes")}>
                    {movieCurrent.episodes?.map((episode) =>
                        episode.server_data?.map((svdt) => (
                            <button
                                key={svdt.slug}
                                onClick={() =>
                                    handleEpisodeClick(
                                        svdt.link_m3u8,
                                        svdt.slug
                                    )
                                }
                                className={cx("episodeButton", {
                                    selectedButton:
                                        selectedEpisode === svdt.slug,
                                })}
                            >
                                {svdt.name}
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;
