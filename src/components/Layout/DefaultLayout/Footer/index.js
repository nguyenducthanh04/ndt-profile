import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import LogoThanhNguyen from '../../../../assets/images/emyeuanh.jpg'
import FlagVN from "../../../../assets/images/flag-vn.jpg"
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer style={{marginTop: "50px"}}>
      <Container fluid>
        <Row className={cx("text-white", "p-4")}>
          <Col className={cx("")}>
            <Stack>
              <div style={{display: "flex", background: "red", borderRadius: "20px", justifyContent: "center", alignItems: "center", marginBottom: "20px", padding: "0px 10px"}}>
                <img src={FlagVN} style={{width: "30px", height: "30px", borderRadius: "50%"}}></img>
                <p style={{margin: "10px 10px"}}>Hoàng Sa và Trường Sa là của Việt Nam!</p>
              </div>
              <Image
                src={LogoThanhNguyen}
                alt="company logo"
                rounded
                width={150}
                height={150}
              />
              <h2 style={{marginTop: "30px"}}>NGUYEN DUC THANH</h2>
              <p>Xem phim miễn phí</p>
            </Stack>
          </Col>
          <Col>
            <h4 style={{color: "#ffbe0b"}}>加班</h4>
            <p>Phim Lẻ</p>
            <p>Phim Bộ</p>
            <p>Anime</p>
            <p>TV-Shows</p>
            <p>Phim Yêu Thích</p>
            <p>Giới Thiệu</p>
          </Col>
          <Col>
            <h4 style={{color: "#ffbe0b"}}>Thông tin cá nhân</h4>
            <p>dducthanh04@gmail.com</p>
            <p>Phone: 0585762**6</p>
            <a href="https://www.facebook.com/profile.php?id=100029011241481&locale=vi_VN" style={{color: "green"}}>FaceBook</a><br></br>
            <a href="https://www.instagram.com/duwcs.thanh/" style={{color: "green"}}>Instagram</a>
          </Col>
          <Col>
          <h4 style={{color: "#ffbe0b"}}>Hỗ Trợ</h4>
          <p>Mọi thắc mắc và góp ý vui lòng liên hệ với tôi qua thông tin cá nhân</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
