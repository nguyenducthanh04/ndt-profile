import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import axios from "axios";
import Tippy from '@tippyjs/react/headless'; 
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

const cx = classNames.bind(styles);

function Header() {
    const [countries, setCountries] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isVisibleAccount, setIsVisibleAccount] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://phimapi.com/quoc-gia'); 
            const sortedCountries = response.data
              .map((country) => ({
                id: country._id,
                name: country.name,
                slug: country.slug,
              }))
              .sort((a, b) => a.name.localeCompare(b.name)); 
            setCountries(sortedCountries);
            console.log("nuoc:",countries)
          } catch (err) {
            setError(err.message || 'Không thể lấy dữ liệu quốc gia');
          } 
        };
    
        fetchCountries();
      }, []); 
    const handleSearch = () => {
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };
    const handleGenerateMovieByCountry = (countryName) => {
        navigate(`/quoc-gia?keyword=${encodeURIComponent(countryName)}&page=1`)
        console.log("okkk")
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
            setIsMenuOpen(false);
        }
    };
    const showAccount = () => setIsVisibleAccount(true);
    const hideAccount = () => setIsVisibleAccount(false);
    const showCountry = () => setIsMobileDropdownOpen(true);
    const hideCountry = () => setIsMobileDropdownOpen(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen); 
      };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("navbar")}>
                <div className={cx("nav-left")}>
                    <Link to={"/"} className={cx("logo-name")}>
                    <h2>加班</h2>
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
                <Tippy render={(attrs) => (
                   <div className={cx("country-list")}>
                    {
            countries.map((country) => (
                <h5 key={country.id} style={{marginLeft: "10px", padding: "8px"}} onClick={() => handleGenerateMovieByCountry(country.slug)}>{country.name}</h5>
            ))
          }
                   </div>
                )} placement="bottom" interactive visible={isVisibleAccount} onClickOutside={hideAccount }>  
                 <div className={cx("country-btn")}>
                            <Link className={cx("link")} onClick={isVisibleAccount ? hideAccount : showAccount}>Quốc Gia <FaCaretDown></FaCaretDown></Link>
                        </div>
                </Tippy>
                
                        {/* <Link to={"/about"} className={cx("link")}>
                            <li>Giới Thiệu</li>
                        </Link> */}
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
                        <Tippy
    render={(attrs) => (
        <div className={cx("country-list")}>
            {countries.map((country) => (
                <h5
                    key={country.id}
                    style={{ marginLeft: "10px", padding: "8px" }}
                    onClick={() => {
                        handleGenerateMovieByCountry(country.slug);
                        setIsMobileDropdownOpen(false); 
                        setIsMenuOpen(false); 
                    }}
                >
                    {country.name}
                </h5>
            ))}
        </div>
    )}
    placement="bottom"
    interactive
    visible={isMobileDropdownOpen}
    onClickOutside={hideCountry}
>
    <div
        className={cx("link-mobile")}
        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
        style={{ cursor: "pointer" }}
    >
        <li>Quốc Gia <FaCaretDown /></li>
    </div>
</Tippy>

                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
