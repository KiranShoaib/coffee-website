import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { MdPhoneEnabled } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

function Footer(){
    return(
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our branches</h3>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>india</Link>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>USA</Link>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>france</Link>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>africa</Link>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>japan</Link>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <Link className="footer-link" href={"/"}><TiArrowRight className="footer-icon"/>home</Link>
                    <Link className="footer-link" href={"/about"}><TiArrowRight className="footer-icon"/>about</Link>
                    <Link className="footer-link" href={"/menu"}><TiArrowRight className="footer-icon"/>menu</Link>
                    <Link className="footer-link" href={"/reviews"}><TiArrowRight className="footer-icon"/>reviews</Link>
                    <Link className="footer-link" href={"/book"}><TiArrowRight className="footer-icon"/>book</Link>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <Link className="footer-link" href={"/"}><MdPhoneEnabled className="footer-icon"/>+123-456-7890</Link>
                    <Link className="footer-link" href={"/"}><MdPhoneEnabled className="footer-icon"/>+111-222-3333</Link>
                    <Link className="footer-link" href={"/"}><FaEnvelope className="footer-icon"/>coffee@gmail.com</Link>
                    <Link className="footer-link" href={"/"}><FaEnvelope className="footer-icon"/>mumbai, india = 400104</Link>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <Link className="footer-link" href={"/"}><RiFacebookFill className="footer-icon"/>facebook</Link>
                    <Link className="footer-link" href={"/"}><AiOutlineTwitter className="footer-icon"/>twitter</Link>
                    <Link className="footer-link" href={"/"}><AiOutlineTwitter className="footer-icon"/>twitter</Link>
                    <Link className="footer-link" href={"/"}><IoLogoInstagram className="footer-icon"/>instagram</Link>
                    <Link className="footer-link" href={"/"}><IoLogoLinkedin className="footer-icon"/>linkedin</Link>
                </div>
            </div>
            <div className="credit">created by <span>kiran shoaib</span> | all rights reserved </div>
        </section>
    )
}

export default Footer