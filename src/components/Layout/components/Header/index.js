import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const cx = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
            setIsMenuOpen(false);
        }
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("navbar")}>
                <div className={cx("nav-left")}>
                    <Link to={"/"} className={cx("logo-name")}>
                        <h2>NguyenDucThanh</h2>
                    </Link>
                    <ul>
                        <Link to={"/"} className={cx("link")}>
                            <li>Trang Chủ</li>
                        </Link>
                        <Link to={"/phim-le"} className={cx("link")}>
                            <li>Phim Lẻ</li>
                        </Link>
                        <Link to={"/phim-bo"} className={cx("link")}>
                            <li>Phim Bộ</li>
                        </Link>
                        <Link to={"/anime"} className={cx("link")}>
                            <li>Anime</li>
                        </Link>
                        <Link to={"/tv-shows"} className={cx("link")}>
                            <li>TV-Shows</li>
                        </Link>
                        <Link to={"/saved-movie"} className={cx("link")}>
                            <li>Phim Yêu Thích</li>
                        </Link>
                        <Link to={"/about"} className={cx("link")}>
                            <li>Giới Thiệu</li>
                        </Link>
                    </ul>
                </div>
                <div className={cx("nav-right")}>
                    <div className={cx("search-container")}>
                        <input
                            placeholder="Tìm kiếm phim..."
                            className={cx("search-input")}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <FaSearch className={cx("icon-search")} />
                    </div>
                    <div className={cx("menu-icon")} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className={cx("mobile-menu")}>
                    <div className={cx("search-container-mobile")}>
                        <input
                            placeholder="Tìm kiếm phim..."
                            className={cx("search-input-mobile")}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <FaSearch className={cx("icon-search-mobile")} />
                    </div>
                    <ul>
                        <Link
                            to={"/"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Trang Chủ</li>
                        </Link>
                        <Link
                            to={"/phim-le"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Phim Lẻ</li>
                        </Link>
                        <Link
                            to={"/phim-bo"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Phim Bộ</li>
                        </Link>
                        <Link
                            to={"/anime"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Anime</li>
                        </Link>
                        <Link
                            to={"/tv-shows"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>TV-Shows</li>
                        </Link>
                        <Link
                            to={"/saved-movie"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Phim Yêu Thích</li>
                        </Link>
                        <Link
                            to={"/about"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Giới Thiệu</li>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
