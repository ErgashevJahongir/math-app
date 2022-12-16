import Typewriter from "typewriter-effect";

const Taklif = () => {
    return (
        <section className="textAlignCenter sectionCont">
            <div className="container">
                <h2 className="taklif-heading">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Navoiy Qorako'l o'quv markazi")
                                .start();
                        }}
                        options={{
                            delay: 70,
                        }}
                    />
                </h2>
            </div>
        </section>
    );
};

export default Taklif;
