import { Link } from "react-router-dom";
import TP from "./T&P";
import Footer from "../../Fixed/Footer";

export default function TermUse() {
    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Term Of Use</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>Term Of Use</li>
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