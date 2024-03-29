import { Button } from "antd";
import { Link } from "react-router-dom";
import rasm from "../../Assets/Images/404Image.svg";
import "./error404.css";

const Error404 = () => {
    return (
        <section className="page-not-found">
            <img
                loading="lazy"
                decoding="async"
                src={rasm}
                alt="404 page"
                width={350}
            />
            <h1>Bu Sahifa Topilmadi</h1>
            <p>
                Kechirasiz siz qidirgan sahifa topilmadi!
                <Link to="/">Bu yerni boshing</Link> va bosh sahifaga qayting
            </p>
            <Button to="/" className="btn-home">
                <Link to="/">
                    <a>Bosh Sahifaga Qaytish</a>
                </Link>
            </Button>
        </section>
    );
};

export default Error404;
