import Image from "next/image";
import Link from "next/link";
import menu1 from "../../../public/menu1.png";

function Menu() {
    return(
        <section className="menu" id="menu">
            <h1 className="heading">our menu<span>popular menu</span></h1>
            <div className="box-container">

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

                <Link href={"/"} className="box">
                    <Image src={menu1} alt="coffee" className="menu-img"/>
                    <div className="content">
                        <h3>our special coffee</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore!</p>
                        <span>$8.99</span>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default Menu