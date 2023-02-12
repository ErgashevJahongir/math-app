import { Col, Row } from "antd";
import SocialsAndSubscribe from "./SocialsAndSubscribe";
import logoSvg from "../../Assets/Images/logo-math.svg";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { getContactMain } from "../../Api/api";
import { useQuery } from "@tanstack/react-query";
import "./Contact.css";

const AppDir = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
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
    const { data } = useQuery(["mainContact"], () => getContactMain());
    const contact = data?.data;

    return (
        <section className="contact" id="contact">
            <AppDir />
            <div className="container">
                <h2>Biz bilan bog'lanish</h2>
                <img
                    loading="lazy"
                    decoding="async"
                    src={logoSvg}
                    alt="logo Qorako'l Navoiy o'quv markazi"
                    width={250}
                    height={250}
                />
                <Row gutter={[20, 15]} className="contact-Cont">
                    <Col span={24}>
                        <a
                            style={{ display: "inline-block" }}
                            href={`tel:${contact?.phoneNumber}`}
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
                                    {contact?.phoneNumber}
                                </p>
                            </div>
                        </a>
                    </Col>
                    <Col span={24}>
                        <a
                            style={{ display: "inline-block" }}
                            href={`mailto:${contact?.email}`}
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
                                    {contact?.email}
                                </p>
                            </div>
                        </a>
                    </Col>
                    <Col span={24} className="address">
                        <a
                            style={{ display: "inline-block" }}
                            href={`https://www.google.com/maps/place/${contact?.address}`}
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
                                {contact?.address}
                            </p>
                        </a>
                    </Col>
                </Row>
                <SocialsAndSubscribe contact={contact} />
            </div>
        </section>
    );
};

export default Contacts;
