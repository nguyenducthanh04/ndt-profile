import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
} from "mdb-react-ui-kit";
import Avt from "~/assets/images/avataaaa.jpg";
import JujutsuKaisen from "~/assets/images/jujutsukaisen.webp";
import DragonBall from "~/assets/images/dragonball.webp";
import HunterXHunter from "~/assets/images/hunter.jpg";
import WindBreaker from "~/assets/images/windbreaker.jpg";

export default function EditButton() {
    return (
        <div
            className="gradient-custom-2"
            style={{ backgroundColor: "#9de2ff" }}
        >
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div
                                className="rounded-top text-white d-flex flex-row"
                                style={{
                                    backgroundColor: "#000",
                                    height: "200px",
                                }}
                            >
                                <div
                                    className="ms-4 mt-5 d-flex flex-column"
                                    style={{ width: "150px" }}
                                >
                                    <MDBCardImage
                                        src={Avt}
                                        alt="Generic placeholder image"
                                        className="mt-4 mb-2 img-thumbnail"
                                        fluid
                                        style={{ width: "150px", zIndex: "1" }}
                                    />
                                </div>
                                <div
                                    className="ms-3"
                                    style={{ marginTop: "130px" }}
                                >
                                    <MDBTypography tag="h5">
                                        Nguyễn Đức Thanh
                                    </MDBTypography>
                                    <MDBCardText>Hưng Yên</MDBCardText>
                                </div>
                            </div>
                            <div
                                className="p-4 text-black"
                                style={{ backgroundColor: "#f8f9fa" }}
                            ></div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">
                                        Giới thiệu
                                    </p>
                                    <div
                                        className="p-4"
                                        style={{ backgroundColor: "#f8f9fa" }}
                                    >
                                        <MDBCardText className="font-italic mb-1">
                                            Chào mọi người, mình có sở thích là
                                            xem phim, đặc biệt là các bộ anime
                                            cho nên mình đã rành thời gian rảnh
                                            tự code ra cho bản thân một trang
                                            web để xem phim giải trí.
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1">
                                            Trang web này có gần như đầy đủ các
                                            bộ phim và được cập nhật liên tục.
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-0">
                                            Mình chỉ muốn nói vậy thôi á ^^.
                                            Chúc mọi người xem phim vuii vẻ 😘😘
                                        </MDBCardText>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">
                                        Phim yêu thích
                                    </MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage
                                            src={JujutsuKaisen}
                                            alt="image 1"
                                            className="w-100 rounded-3"
                                        />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage
                                            src={DragonBall}
                                            alt="image 1"
                                            className="w-100 rounded-3"
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage
                                            src={WindBreaker}
                                            alt="image 1"
                                            className="w-100 rounded-3"
                                        />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage
                                            src={HunterXHunter}
                                            alt="image 1"
                                            className="w-100 rounded-3"
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
