import { Link } from "react-router-dom";
import Footer from "../../Fixed/Footer";
import '../CSS/FAQ.css';
import { useRef, useState } from "react";
import faqs from '../../Data/faq';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

export default function FAQ() {
    
    const [active, setActive] = useState(0);

    const handleToggle = (index) => {
        if(active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Frequently Questions</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>Frequently Questions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordian_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordian" className="menu_accordian">
                                {
                                    faqs.map((faq, index) => {
                                        return (
                                            <div className="tab tab-accord">
                                                <AccordionItem key={index} index={index} active={active} handleToggle={handleToggle} faq={faq} />
                                            </div>
                                        )
                            
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const AccordionItem = (props) => {
    const contentEl = useRef(null);
    const { handleToggle, index, active, faq } = props;
    const { header, text } = faq;
    console.log(index);
    return (
        <>
            <div className= {`${active === index ? "active" : ""} card-btn`} onClick={() => handleToggle(index)}>
                <h2>{header}</h2>
                <div className="icone">
                    <span className={`${ active !== index ? "" : "display-icon"}`} >
                        <IconContext.Provider value={{className:"icon-icon"}} >
                            <FaIcons.FaPlus />
                        </IconContext.Provider>
                    </span>
                    <span className={`${ active === index ? "" : "display-icon"}`}>
                        <IconContext.Provider value={{className:"icon-icon"}} >
                            <FaIcons.FaMinus />
                        </IconContext.Provider>
                    </span>
                </div>
            </div>
            <div ref={contentEl} className={`collapse ${active === index ? "show" : ""}`} >
                <div className="card-body">
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}