import { Link } from "react-router-dom";
import '../CSS/ContactUs.css';
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi2";
import Footer from "../../Fixed/Footer";


export default function ContactUs() {
    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_map">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="map-area">
                                <div id="googleMap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.87046493345!2d73.02934249170723!3d26.2740485691914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c37b277d1c3%3A0x1412272be9646840!2sWsCube%20Tech!5e0!3m2!1sen!2sin!4v1684905442749!5m2!1sen!2sin" width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        #document
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact_message content">
                                <h3>Contact Us</h3>
                                <p></p>
                                <ul>
                                    <li>
                                        <FaIcons.FaFax />
                                        Address : Claritas est etiam processus dynamicus
                                    </li>
                                    <li>
                                        <FaIcons.FaPhoneAlt />
                                        9784123456
                                    </li>
                                    <li>
                                        <HiIcons.HiOutlineEnvelope />
                                        furniture@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact_message form">
                                <h3>Tell Us Your Question</h3>
                                <form id="contact-form" className="bv-form" action="">
                                    <p className="form-group has-feedback">
                                       <label>Your Name (required)</label> 
                                       <input name="name" type="text" placeholder="Name *" data-bv-field="name"/>
                                    </p>
                                    <p className="form-group has-feedback">
                                       <label>Your Email (required)</label> 
                                       <input name="email" type="text" placeholder="Email *" data-bv-field="name"/>
                                    </p>
                                    <p className="form-group has-feedback">
                                       <label>Your Mobile Number (required)</label> 
                                       <input name="mobile" type="text" placeholder="Mobile Number *" data-bv-field="name"/>
                                    </p>
                                    <p className="form-group has-feedback">
                                       <label>Subject</label> 
                                       <input name="subject" type="text" placeholder="Subject *" data-bv-field="name"/>
                                    </p>
                                    <p className="form-group has-feedback">
                                       <label>Your Message</label> 
                                       <textarea name="message" placeholder="Message *" className="form-control2" data-bv-field="message" id="" cols="30" rows="10"></textarea>
                                    </p>
                                    <button type="submit" id="send_enquiry">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}