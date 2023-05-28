import './Footer.css';
import * as GrIcon from "react-icons/gr";
import * as AiIcon from "react-icons/ai";
import * as TiIcon from "react-icons/ti";
import * as TbIcon from "react-icons/tb";

import image from "../images/Footer/1.png";

import Blog from '../Data/Blog';

import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [newData, setNewData] = useState([]);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        const data = Blog.filter((item) => item.Bestselling === true);
        const newNum1 = Math.floor(Math.random() * data.length);
        let newNum2 = Math.floor(Math.random() * data.length);
        while (newNum2 === newNum1) {
        newNum2 = Math.floor(Math.random() * data.length);
        }
        setNum1(newNum1);
        setNum2(newNum2);
        setNewData([data[newNum1], data[newNum2]]);
    }, []);

    return (
        <div className="footer_widgets footer_other">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="widgets_container contact_us">
                                <h3>Contact Us</h3>
                                <div className="footer_contact">
                                    <p>Address: Claritas est etiam processus dynamicus</p>
                                    <p>
                                        Phone: 
                                        <a href="tel:9781234560"> 9781234560</a>
                                    </p>
                                    <p>Email: furniture@gmail.com</p>
                                    <ul>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <GrIcon.GrFacebookOption />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <AiIcon.AiOutlineInstagram />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <GrIcon.GrTwitter />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <TiIcon.TiSocialLinkedin />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <GrIcon.GrYoutube />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                            <IconContext.Provider value={{className: "footer_icon"}}>
                                                <TbIcon.TbBrandTelegram />
                                            </IconContext.Provider>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li>
                                            <Link to={'/about-us'}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={'/contact-us'}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to={'/faq'}>Frequently Questions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                        <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li>
                                            <Link to={'/my-dashboard'}>My Dashboard</Link>
                                        </li>
                                        <li>
                                            <a href="">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="">Cart</a>
                                        </li>
                                        <li>
                                            <a href="">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="widgets_container product_widget">
                                <h3>Top Rated Products</h3>
                                <div className="simple_product">
                                    <Great props={newData} />          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_middle">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_middle_menu">
                                <ul>
                                    <li>
                                        <Link to={'/'}><a href="">Home</a></Link>
                                    </li>
                                    <li>
                                        <Link to={'/online-store'}>Online Store</Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacy-policy'}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to={'/term-of-use'}>Term Of Use</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright_area">
                                <p>All Rights Reserved By Furniture | © 2023 </p>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Great({ props }) {
    const finalData = props.map((v) => {
      return (
        <div className='simple_product_items'>
            <div className="simple_product_thumb">
                <a href="">
                    <img src={v.imgpath} alt="" />
                </a>
            </div>
            <div className="simple_product_content">
                <div className="tag_cate">
                    <a>{v.title}</a>
                </div>
                <div className="product_name">
                    <h3>
                        <a href="">
                            {v.title_}
                        </a>
                    </h3>
                </div>
                <div className="product_price">
                    <span className="old_price">{v.price}</span>
                    <span className="current_price">{v.actual_price}</span>
                </div>
            </div>
        </div>
      );
    });
  
    if (finalData.length > 0) {
      return <>{finalData}</>;
    } else {
      return <h1>No Data</h1>;
    }
}