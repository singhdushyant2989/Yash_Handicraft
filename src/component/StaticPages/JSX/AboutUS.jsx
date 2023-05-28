import { Link } from "react-router-dom";
import image from '../../images/About/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg'; 
import iconSmiley from '../../images/About/icon-smiley.jpg';
import iconPeople from '../../images/About/iconPeople.jpg';
import iconHome from '../../images/About/iconHome.jpg';
import women from '../../images/About/women.jpg';
import makeup from '../../images/About/makeup.jpg';
import couple from '../../images/About/couple.jpg';
import '../CSS/AboutUs.css';
import Testimonial from "../../HomePage/JSX/Testimonial/Testimonial";
import Footer from "../../Fixed/Footer";

export default function AboutUs() {
    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>About Us</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about_thumb">
                                <img src={image} alt="" />
                            </div>
                            <div className="about_content text-center">
                                <h1>Welcome to Monsta!</h1>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
                                <span>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chooseus_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about_content choose_title">
                                <h1 className="mb-0">Why Choose Us?</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_choose text-center">
                                <div className="choose_icone">
                                    <img src={iconSmiley} alt="" />
                                </div>
                                <div className="choose_content">
                                    <h3>Creative Design</h3>
                                    <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_choose text-center">
                                <div className="choose_icone">
                                    <img src={iconHome} alt="" />
                                </div>
                                <div className="choose_content">
                                    <h3>100% Money Back Guarantee</h3>
                                    <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_choose text-center">
                                <div className="choose_icone">
                                    <img src={iconPeople} alt="" />
                                </div>
                                <div className="choose_content">
                                    <h3>Online Support 24/7</h3>
                                    <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src={women} alt="" />
                                </div>
                                <div className="about_gallery_content text-center">
                                    <h3>What Do We Do?</h3>
                                    <p style={{lineHeight : "26px"}}>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src={makeup} alt="" />
                                </div>
                                <div className="about_gallery_content text-center">
                                    <h3>Our Mission</h3>
                                    <p style={{lineHeight : "26px"}}>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src={couple} alt="" />
                                </div>
                                <div className="about_gallery_content text-center">
                                    <h3>History Of Us</h3>
                                    <p style={{lineHeight : "26px"}}>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <Footer />
        </>
    )
}