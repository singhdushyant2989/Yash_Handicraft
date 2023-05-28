import { Link } from "react-router-dom";
import Footer from "../../Fixed/Footer";
import '../CSS/Login_Register.css';

function Login_Register() {

    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>My Account</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>My Account</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer_login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="accout_form" >
                                <h2>Login</h2>
                                <form action="" id="Login-form">
                                    <p className="form-group has-feedback has-error">
                                        <label>
                                            {"Email "} 
                                            <span> *</span>
                                        </label>
                                        <input type="text" className="spaceValidation" placeholder="Email Address" />
                                    </p>
                                    <p className="form-group has-feedback has-error">
                                        <label>
                                            {"Password "}  
                                            <span> *</span>
                                        </label>
                                        <input type="text" className="spaceValidation" placeholder="Password" />
                                    </p>
                                    <div className="login_submit">
                                        <a href="">Lost your password?</a>
                                        <button type="submit" id="LoginButton">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="accout_form register" >
                                <h2>Register</h2>
                                <form action="" id="register-form">
                                    <p className="form-group has-feedback">
                                        <label>
                                            {"Email address "} 
                                            <span> *</span>
                                        </label>
                                        <input type="text" className="spaceValidation" placeholder="Email Address" />
                                    </p>
                                    <p className="form-group has-feedback">
                                        <label>
                                            {"Password "}  
                                            <span> *</span>
                                        </label>
                                        <input type="text" className="spaceValidation" placeholder="Password" />
                                    </p>
                                    <div className="login_submit">
                                        <button type="submit" id="register_button">Login</button>
                                    </div>
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

export default Login_Register;