import Home from "~/pages/Home";
import Detail from "~/pages/Detail";
import WatchMovie from "~/pages/WatchMovie";
import MovieOdd from "~/pages/MovieOdd";
import Movies from "~/pages/Movies";
import Anime from "~/pages/Anime";
import Search from "~/pages/Search";
import Tvshow from "~/pages/Tvshow";
import SavedMovie from "~/pages/SavedMovie";
import About from "~/pages/About";
import GenerateMovieByCountry from "~/pages/GenerateMovieByCountry";
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/detail/:slug", component: Detail },
    { path: "/watch-movie/:slug", component: WatchMovie },
    { path: "/phim-le", component: MovieOdd },
    { path: "/phim-bo", component: Movies },
    { path: "/anime", component: Anime },
    { path: "/search", component: Search },
    { path: "/tv-shows", component: Tvshow },
    { path: "/saved-movie", component: SavedMovie },
    { path: "/about", component: About },
    { path: "/quoc-gia", component: GenerateMovieByCountry },

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
