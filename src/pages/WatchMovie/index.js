// import React, { useState, useEffect } from "react";
// import classNames from "classnames/bind";
// import axios from "axios";
// import styles from "./WatchMovie.module.scss";
// import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";
// const cx = classNames.bind(styles);
// function WatchMovie() {
//     const { slug } = useParams();
//     const [movieCurrent, setMovieCurrent] = useState([]);
//     const [currentUrl, setCurrentUrl] = useState("");
//     const [selectedEpisode, setSelectedEpisode] = useState(null);
//     useEffect(() => {
//         const apiUrl = `https://phimapi.com/phim/${slug}`;
//         axios
//             .get(apiUrl)
//             .then((response) => {
//                 setMovieCurrent(response.data);
//                 console.log("movi url avt: ", response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, [slug]);

//     useEffect(() => {
//         if (movieCurrent.episodes && movieCurrent.episodes[0]?.server_data) {
//             setCurrentUrl(
//                 movieCurrent.episodes[0].server_data[0]?.link_m3u8 ||
//                     movieCurrent.link_m3u8
//             );
//             setSelectedEpisode(movieCurrent.episodes[0].server_data[0]?.slug);
//         }
//     }, [movieCurrent]);

//     const handleEpisodeClick = (url, slug) => {
//         setCurrentUrl(url);
//         setSelectedEpisode(slug);
//     };
//     return (
//         <div className={cx("wrapper")}>
//             <div className={cx("content")}>
//                 <div className={cx("name-movie")}>
//                     <h3>{movieCurrent.movie?.name}</h3>
//                 </div>
//                 <div className={cx("movie-video")}>
//                     <div className={cx("player-wrapper")}>
//                         <ReactPlayer
//                             className={cx("react-player")}
//                             url={currentUrl || movieCurrent.link_m3u8}
//                             controls
//                             width="100vw"
//                             height="50vh"
//                             playing
//                             loop
//                             muted
//                             config={{
//                                 file: {
//                                     attributes: {
//                                         crossOrigin: "anonymous",
//                                     },
//                                 },
//                             }}
//                         />
//                     </div>
//                 </div>
//                 <div className={cx("list-episodes")}>
//                     {movieCurrent.episodes?.map((episode) =>
//                         episode.server_data?.map((svdt) => (
//                             <button
//                                 key={svdt.slug}
//                                 onClick={() =>
//                                     handleEpisodeClick(
//                                         svdt.link_m3u8,
//                                         svdt.slug
//                                     )
//                                 }
//                                 className={cx("episodeButton", {
//                                     selectedButton:
//                                         selectedEpisode === svdt.slug,
//                                 })}
//                             >
//                                 {svdt.name}
//                             </button>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WatchMovie;



import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import styles from "./WatchMovie.module.scss";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const cx = classNames.bind(styles);

function WatchMovie() {
    const { slug } = useParams();
    const [movieCurrent, setMovieCurrent] = useState({});
    const [currentUrl, setCurrentUrl] = useState("");
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [episodes, setEpisodes] = useState([]); // Lưu tập của server đầu tiên

    useEffect(() => {
        const apiUrl = `https://phimapi.com/phim/${slug}`;
        axios
            .get(apiUrl)
            .then((response) => {
                const movieData = response.data;
                setMovieCurrent(movieData);

                // Kiểm tra nếu có episodes và server_data
                if (movieData.episodes && movieData.episodes.length > 0) {
                    const firstServerEpisodes = movieData.episodes[0]?.server_data || [];
                    setEpisodes(firstServerEpisodes); // Lưu các tập của server đầu tiên

                    // Cập nhật URL mặc định với tập đầu tiên của server đầu tiên
                    if (firstServerEpisodes.length > 0) {
                        setCurrentUrl(firstServerEpisodes[0].link_m3u8);
                        setSelectedEpisode(firstServerEpisodes[0].slug);
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [slug]);

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
                <div className={cx("list-episodes")}>
                    {episodes.map((svdt) => (
                        <button
                            key={svdt.slug}
                            onClick={() => handleEpisodeClick(svdt.link_m3u8, svdt.slug)}
                            className={cx("episodeButton", {
                                selectedButton: selectedEpisode === svdt.slug,
                            })}
                        >
                            {svdt.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;
