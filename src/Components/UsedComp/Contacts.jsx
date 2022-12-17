import { Col, Row } from "antd";
import SocialsAndSubscribe from "./SocialsAndSubscribe";
import logoSvg from "../../Assets/Images/logo-math.svg";
import "./Contact.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const AppDir = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height="100px"
            options={{
                fullScreen: {
                    zIndex: 0,
                    enable: true,
                },
                style: {
                    position: "absolute",
                },
                particles: {
                    number: {
                        value: 90,
                        density: {
                            enable: true,
                            area: 600,
                        },
                    },
                    color: {
                        value: "#ff0000",
                        animation: {
                            enable: true,
                            speed: 20,
                            sync: true,
                        },
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: {
                            min: 0.5,
                            max: 3,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 0.5,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 5,
                        direction: "none",
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 150,
                        },
                        push: {
                            quantity: 10,
                        },
                    },
                },
            }}
        />
    );
};

const Contacts = () => {
    return (
        <section className="contact" id="contact">
            <AppDir />
            <div className="container">
                <h2>Biz bilan bog'lanish</h2>
                <img
                    src={logoSvg}
                    alt="logo Qorako'l Navoiy o'quv markazi"
                    width={250}
                />
                <Row gutter={[20, 15]} className="contact-Cont">
                    <Col span={24}>
                        <a
                            style={{ display: "inline-block" }}
                            href="tel:+998919230497"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <h3>Telefon: </h3>
                                <p
                                    style={{
                                        lineHeight: 1.2,
                                        fontSize: 16,
                                        color: "#ccc",
                                        marginLeft: 10,
                                    }}
                                >
                                    +998911236353
                                </p>
                            </div>
                        </a>
                    </Col>
                    <Col span={24}>
                        <a
                            style={{ display: "inline-block" }}
                            href="mailto:new-centername@mail.ru"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <h3>Email: </h3>
                                <p
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        color: "#ccc",
                                        marginLeft: 10,
                                    }}
                                >
                                    new-centername@mail.ru
                                </p>
                            </div>
                        </a>
                    </Col>
                    <Col span={24} className="address">
                        <a
                            style={{ display: "inline-block" }}
                            href="https://www.google.com/maps/place/Navoiy+Qorako%CA%BBl+o%CA%BBquv+markazi/@40.1115981,65.3780068,17z/data=!3m1!4b1!4m5!3m4!1s0x3f51c7fda5b0ffa9:0x27ceff65df53e90a!8m2!3d40.1114767!4d65.3802495"
                        >
                            <h3>Manzil: </h3>
                            <p
                                style={{
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    color: "#ccc",
                                    marginBottom: 20,
                                }}
                            >
                                O'zbekiston, Navoiy, Navoiy shahar Navoiy
                                Qorako'l o'quv markazi
                            </p>
                        </a>
                    </Col>
                </Row>
                <SocialsAndSubscribe />
            </div>
        </section>
    );
};

export default Contacts;
