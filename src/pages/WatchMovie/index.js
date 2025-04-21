

import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./WatchMovie.module.scss";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import FacebookComment from "../../facebookComment";

const cx = classNames.bind(styles);

function WatchMovie() {
    const { slug } = useParams();
    const [movieCurrent, setMovieCurrent] = useState({});
    const [currentUrl, setCurrentUrl] = useState("");
    const [selectedEpisode, setSelectedEpisode] = useState({ slug: null, server: null }); // Thay đổi thành object
    const [episodesServer1, setEpisodesServer1] = useState([]);
    const [episodesServer2, setEpisodesServer2] = useState([]);

    useEffect(() => {
        const apiUrl = `https://phimapi.com/phim/${slug}`;
        axios
            .get(apiUrl)
            .then((response) => {
                const movieData = response.data;
                setMovieCurrent(movieData);
                console.log("check mov detail:", movieData);
                if (movieData.episodes && movieData.episodes.length > 0) {
                    const server1Episodes = movieData.episodes[0]?.server_data || [];
                    setEpisodesServer1(server1Episodes);

                    const server2Episodes = movieData.episodes.length > 1 ? movieData.episodes[1]?.server_data || [] : [];
                    setEpisodesServer2(server2Episodes);

                    if (server1Episodes.length > 0) {
                        setCurrentUrl(server1Episodes[0].link_m3u8);
                        setSelectedEpisode({ slug: server1Episodes[0].slug, server: "server1" });
                    } else if (server2Episodes.length > 0) {
                        setCurrentUrl(server2Episodes[0].link_m3u8);
                        setSelectedEpisode({ slug: server2Episodes[0].slug, server: "server2" });
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [slug]);

    const handleEpisodeClick = (url, slug, server) => {
        setCurrentUrl(url);
        setSelectedEpisode({ slug, server }); // Lưu cả slug và server
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("name-movie")}>
                    <h3>Xem phim {movieCurrent.movie?.name}</h3>
                </div>
                <div className={cx("movie-video")}>
                    <div className={cx("player-wrapper")}>
                        <ReactPlayer
                            className={cx("react-player")}
                            url={currentUrl}
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
                <div className={cx("col-md-4")}>
                    <div className={cx("image_poster_watch")}>
                        <img
                            src={movieCurrent?.movie?.poster_url}
                            alt={movieCurrent.movie?.name}
                            className={cx("poster-img")}
                        />
                    </div>
                    <div>
                        <h2 style={{ marginBottom: "10px" }}>{movieCurrent.movie?.name}</h2>
                        <h5 style={{ marginTop: "20px", marginBottom: "10px" }}>
                            {movieCurrent.movie?.origin_name}
                        </h5>
                        <div className={cx("tags")}>
                            <span>{movieCurrent.movie?.year}</span>
                            <span>{movieCurrent.movie?.episode_current}</span>
                        </div>
                        <div className={cx("genres")}>
                            {movieCurrent.movie?.category?.map((ctg) => (
                                <span key={ctg.id}>{ctg.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Server 1 */}
                <div className={cx("list-episodes")}>
                    <h4 style={{marginLeft: "10px"}}>Vietsub</h4>
                    {episodesServer1.map((svdt) => (
                        <button
                            key={svdt.slug}
                            onClick={() => handleEpisodeClick(svdt.link_m3u8, svdt.slug, "server1")}
                            className={cx("episodeButton", {
                                selectedButton:
                                    selectedEpisode.slug === svdt.slug &&
                                    selectedEpisode.server === "server1",
                            })}
                        >
                            {svdt.name}
                        </button>
                    ))}
                </div>
                {/* Server 2 */}
               {episodesServer2.length > 0 ? (
                 <div className={cx("list-episodes")}>
                 <h4 style={{marginLeft: "10px", marginTop: "30px"}}>Thuyết minh</h4>
                     {episodesServer2.map((svdt) => (
                         <button
                             key={svdt.slug}
                             onClick={() => handleEpisodeClick(svdt.link_m3u8, svdt.slug, "server2")}
                             className={cx("episodeButton", {
                                 selectedButton:
                                     selectedEpisode.slug === svdt.slug &&
                                     selectedEpisode.server === "server2",
                             })}
                         >
                             {svdt.name}
                         </button>
                     ))}
                 </div>
               ) : ""}
               <FacebookComment url={window.location.href} />
            </div>
        </div>
    );
}

export default WatchMovie;