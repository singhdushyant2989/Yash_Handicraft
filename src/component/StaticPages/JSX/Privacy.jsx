import { Link } from "react-router-dom";
import Footer from "../../Fixed/Footer";
import TP from "./T&P";

export default function Privacy() {
    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Privacy Policy</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TP />
            <Footer />
        </>
    )
}