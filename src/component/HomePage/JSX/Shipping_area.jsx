import '../CSS/Shipping_area.css';
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

import { IconContext } from 'react-icons';

export default function Shipping_area() {
    
    return(
        <div className="shipping_area shipping_two product_bottom_two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="single_shipping">
                            <div className="shipping_icone icone_1">
                                <IconContext.Provider value={{className : "reactIcons"}}>
                                    <IoIcons.IoMdGlobe />
                                </IconContext.Provider>
                            </div>
                            <div className="shipping_content">
                                <h3>Free Shipping</h3>
                                <p>Free shipping on all order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single_shipping">
                            <div className="shipping_icone icone_1">
                                <IconContext.Provider value={{className : "reactIcons"}}>
                                    <BsIcons.BsCheck2Circle />
                                </IconContext.Provider>
                            </div>
                            <div className="shipping_content">
                                <h3>Money Return</h3>
                                <p>Back guarantee under 7 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single_shipping">
                            <div className="shipping_icone icone_1">
                                <IconContext.Provider value={{className : "reactIcons"}}>
                                    <AiIcons.AiOutlineClockCircle />
                                </IconContext.Provider>
                            </div>
                            <div className="shipping_content">
                                <h3>Online Support</h3>
                                <p>Support online 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}