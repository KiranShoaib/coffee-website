import Link from "next/link";
import Image from "next/image";
import about1 from "../../../public/about1.jpg";
import abouticon1 from "../../../public/abouticon1.png";
import abouticon2 from "../../../public/abouticon2.png";
import abouticon3 from "../../../public/abouticon3.png";


function About() {
    return(
        <section className="about" id="about">
            <h1 className="heading">about us<span>why choose us</span></h1>
            <div className="row">
                <div className="image">
                    <Image src={about1} alt="coffee makers" className="abt-img"/>
                </div>
                <div className="content">
                    <h3 className="title">what&#39;s  make our coffee special!</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti id quidem nisi quaerat. Id quas commodi totam quibusdam animi illo, autem hic sequi delectus at? Animi minima ratione quod!</p>
                    <Link className="btn" href="/">read more</Link>
                    <div className="icons-container">
                        <div className="icons">
                            <Image src={abouticon1} alt="coffee bean icon" className="icon-img" />
                            <h3>quality coffee</h3>
                        </div>
                        <div className="icons">
                            <Image src={abouticon2} alt="house icon" className="icon-img"/>
                            <h3>our branches</h3>
                        </div>
                        <div className="icons">
                            <Image src={abouticon3} alt="pet icon" className="icon-img"/> 
                            <h3>pet friendly</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About