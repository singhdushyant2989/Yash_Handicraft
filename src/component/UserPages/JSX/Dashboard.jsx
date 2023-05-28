import { Link } from "react-router-dom";
import Footer from "../../Fixed/Footer";
import '../CSS/Dashboard.css';
import { useState } from "react";

export default function Dashboard() {

    const [activeTab, setActiveTab] = useState("v-pills-dashboard");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>My Dashboard</h3>
                                <ul>
                                    <li>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>{">"}</li>
                                    <li>My Dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="main_content_area">
        <div className="container">
          <div className="account_dashboard">
            <div className="row">
              <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className={`nav-link ${activeTab === "v-pills-dashboard" ? "active" : ""}`} id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected={activeTab === "v-pills-dashboard"} onClick={() => handleTabClick("v-pills-dashboard")}>My Dashboard</a>
                  <a className={`nav-link ${activeTab === "v-pills-order" ? "active" : ""}`} id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected={activeTab === "v-pills-order"} onClick={() => handleTabClick("v-pills-order")}>Orders</a>
                  <a className={`nav-link ${activeTab === "v-pills-address" ? "active" : ""}`} id="v-pills-address-tab" data-toggle="pill" href="#v-pills-address" role="tab" aria-controls="v-pills-address" aria-selected={activeTab === "v-pills-address"} onClick={() => handleTabClick("v-pills-address")}>Addresses</a>
                  <a className={`nav-link ${activeTab === "v-pills-profile" ? "active" : ""}`} id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected={activeTab === "v-pills-profile"} onClick={() => handleTabClick("v-pills-profile")}>My Profile</a>
                  <a className={`nav-link ${activeTab === "v-pills-password" ? "active" : ""}`} id="v-pills-password-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-password" aria-selected={activeTab === "v-pills-password"} onClick={() => handleTabClick("v-pills-password")}>Change Password</a>
                  <a className={`nav-link ${activeTab === "v-pills-logout" ? "active" : ""}`} id="v-pills-logout-tab" data-toggle="pill" href="#v-pills-logout" role="tab" aria-controls="v-pills-logout" aria-selected={activeTab === "v-pills-logout"} onClick={() => handleTabClick("v-pills-logout")}>Logout</a>

                </div>
              </div>
              <div className="col-9">
                <div className="tab-content dashboard_content" id="v-pills-tabContent">
                  <div className={`tab-pane fade ${activeTab === "v-pills-dashboard" ? "show active" : ""}`} id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                    <h3>My Dashboard</h3>
                    <p>From your account dashboard. you can easily check & view your <a>recent orders</a>, manage your <a>shipping and billing addresses</a> and <a>Edit your password and account details.</a></p>
                  </div>
                  <div className={`tab-pane fade ${activeTab === "v-pills-order" ? "show active" : ""}`} id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                    <h3>Orders</h3>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>May 10, 2018</td>
                                    <td>Completed</td>
                                    <td>Rs. 2,500 For 1 Item</td>
                                    <td>
                                        <a href="" className="view">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>May 10, 2018</td>
                                    <td>Processing</td>
                                    <td>Rs. 30,000 For 1 Item</td>
                                    <td>
                                        <a href="" className="view">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${activeTab === "v-pills-address" ? "show active" : ""}`} id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                    <p>The following addresses will be used on the checkout page by default.</p>
                    <div className="col-md-12">
                      <div className="col-xl-6 col-md-12 billingAddress">
                        <h4 className="billing-address">Billing Address</h4>
                        <div className="billingAddressError"></div>
                        <div className="login">
                          <div className="account_form login_form_container">
                            <div className="account_login_form">
                              <form id="update_billing_address" action="" className="bv-form">
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Billing Name*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Billing Email*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Billing Mobile Number*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Billing Address*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Country*</label>
                                    <select name="billing_country_id" className="form-control" id="billing_country_id" data-bv-field="billing_country_id">
                                      <option value="">Select Country</option>
                                      <option value="1"> Afghanistan</option>
                                      <option value="2"> Albania</option>
                                      <option value="3"> Algeria</option>
                                      <option value="4"> American Samoa</option>
                                      <option value="5"> Andorra</option>
                                      <option value="6"> Angola</option>
                                      <option value="7"> Anguilla</option>
                                      <option value="8"> Antarctica</option>
                                      <option value="9"> Antigua And Barbuda</option>
                                      <option value="10"> Argentina</option>
                                      <option value="11"> Armenia</option>
                                      <option value="12"> Aruba</option>
                                      <option value="13"> Australia</option>
                                      <option value="14"> Austria</option>
                                      <option value="15"> Azerbaijan</option>
                                      <option value="16"> Bahamas The</option>
                                      <option value="17"> Bahrain</option>
                                      <option value="18"> Bangladesh</option>
                                      <option value="19"> Barbados</option>
                                      <option value="20"> Belarus</option>
                                      <option value="21"> Belgium</option>
                                      <option value="22"> Belize</option>
                                      <option value="23"> Benin</option>
                                      <option value="24"> Bermuda</option>
                                      <option value="25"> Bhutan</option>
                                      <option value="26"> Bolivia</option>
                                      <option value="27"> Bosnia and Herzegovina</option>
                                      <option value="28"> Botswana</option>
                                      <option value="29"> Bouvet Island</option>
                                      <option value="30"> Brazil</option>
                                      <option value="31"> British Indian Ocean Territory</option>
                                      <option value="32"> Brunei</option>
                                      <option value="33"> Bulgaria</option>
                                      <option value="34"> Burkina Faso</option>
                                      <option value="35"> Burundi</option>
                                      <option value="36"> Cambodia</option>
                                      <option value="37"> Cameroon</option>
                                      <option value="38"> Canada</option>
                                      <option value="39"> Cape Verde</option>
                                      <option value="40"> Cayman Islands</option>
                                      <option value="41"> Central African Republic</option>
                                      <option value="42"> Chad</option>
                                      <option value="43"> Chile</option>
                                      <option value="44"> China</option>
                                      <option value="45"> Christmas Island</option>
                                      <option value="46"> Cocos (Keeling) Islands</option>
                                      <option value="47"> Colombia</option>
                                      <option value="48"> Comoros</option>
                                      <option value="51"> Cook Islands</option>
                                      <option value="52"> Costa Rica</option>
                                      <option value="53"> Cote D&#039;Ivoire (Ivory Coast)</option>
                                      <option value="54"> Croatia (Hrvatska)</option>
                                      <option value="55"> Cuba</option>
                                      <option value="56"> Cyprus</option>
                                      <option value="57"> Czech Republic</option>
                                      <option value="50"> Democratic Republic Of The Congo</option>
                                      <option value="58"> Denmark</option>
                                      <option value="59"> Djibouti</option>
                                      <option value="60"> Dominica</option>
                                      <option value="61"> Dominican Republic</option>
                                      <option value="62"> East Timor</option>
                                      <option value="63"> Ecuador</option>
                                      <option value="64"> Egypt</option>
                                      <option value="65"> El Salvador</option>
                                      <option value="66"> Equatorial Guinea</option>
                                      <option value="67"> Eritrea</option>
                                      <option value="68"> Estonia</option>
                                      <option value="69"> Ethiopia</option>
                                      <option value="70"> External Territories of Australia</option>
                                      <option value="71"> Falkland Islands</option>
                                      <option value="72"> Faroe Islands</option>
                                      <option value="73"> Fiji Islands</option>
                                      <option value="74"> Finland</option>
                                      <option value="75"> France</option>
                                      <option value="76"> French Guiana</option>
                                      <option value="77"> French Polynesia</option>
                                      <option value="78"> French Southern Territories</option>
                                      <option value="79"> Gabon</option>
                                      <option value="80"> Gambia The</option>
                                      <option value="81"> Georgia</option>
                                      <option value="82"> Germany</option>
                                      <option value="83"> Ghana</option>
                                      <option value="84"> Gibraltar</option>
                                      <option value="85"> Greece</option>
                                      <option value="86"> Greenland</option>
                                      <option value="87"> Grenada</option>
                                      <option value="88"> Guadeloupe</option>
                                      <option value="89"> Guam</option>
                                      <option value="90"> Guatemala</option>
                                      <option value="91"> Guernsey and Alderney</option>
                                      <option value="92"> Guinea</option>
                                      <option value="93"> Guinea-Bissau</option>
                                      <option value="94"> Guyana</option>
                                      <option value="95"> Haiti</option>
                                      <option value="96"> Heard and McDonald Islands</option>
                                      <option value="97"> Honduras</option>
                                      <option value="98"> Hong Kong S.A.R.</option>
                                      <option value="99"> Hungary</option>
                                      <option value="100" > Iceland</option>
                                      <option value="101" > India</option>
                                      <option value="102" > Indonesia</option>
                                      <option value="103" > Iran</option>
                                      <option value="104" > Iraq</option>
                                      <option value="105" > Ireland</option>
                                      <option value="106" > Israel</option>
                                      <option value="107" > Italy</option>
                                      <option value="108" > Jamaica</option>
                                      <option value="109" > Japan</option>
                                      <option value="110" > Jersey</option>
                                      <option value="111" > Jordan</option>
                                      <option value="112" > Kazakhstan</option>
                                      <option value="113" > Kenya</option>
                                      <option value="114" > Kiribati</option>
                                      <option value="115" > Korea North</option>
                                      <option value="116" > Korea South</option>
                                      <option value="117" > Kuwait</option>
                                      <option value="118" > Kyrgyzstan</option>
                                      <option value="119" > Laos</option>
                                      <option value="120" > Latvia</option>
                                      <option value="121" > Lebanon</option>
                                      <option value="122" > Lesotho</option>
                                      <option value="123" > Liberia</option>
                                      <option value="124" > Libya</option>
                                      <option value="125" > Liechtenstein</option>
                                      <option value="126" > Lithuania</option>
                                      <option value="127" > Luxembourg</option>
                                      <option value="128" > Macau S.A.R.</option>
                                      <option value="129" > Macedonia</option>
                                      <option value="130" > Madagascar</option>
                                      <option value="131" > Malawi</option>
                                      <option value="132" > Malaysia</option>
                                      <option value="133" > Maldives</option>
                                      <option value="134" > Mali</option>
                                      <option value="135" > Malta</option>
                                      <option value="136" > Man (Isle of)</option>
                                      <option value="137" > Marshall Islands</option>
                                      <option value="138" > Martinique</option>
                                      <option value="139" > Mauritania</option>
                                      <option value="140" > Mauritius</option>
                                      <option value="141" > Mayotte</option>
                                      <option value="142" > Mexico</option>
                                      <option value="143" > Micronesia</option>
                                      <option value="144" > Moldova</option>
                                      <option value="145" > Monaco</option>
                                      <option value="146" > Mongolia</option>
                                      <option value="147" > Montserrat</option>
                                      <option value="148" > Morocco</option>
                                      <option value="149" > Mozambique</option>
                                      <option value="150" > Myanmar</option>
                                      <option value="151" > Namibia</option>
                                      <option value="152" > Nauru</option>
                                      <option value="153" > Nepal</option>
                                      <option value="154" > Netherlands Antilles</option>
                                      <option value="155" > Netherlands The</option>
                                      <option value="156" > New Caledonia</option>
                                      <option value="157" > New Zealand</option>
                                      <option value="158" > Nicaragua</option>
                                      <option value="159" > Niger</option>
                                      <option value="160" > Nigeria</option>
                                      <option value="161" > Niue</option>
                                      <option value="162" > Norfolk Island</option>
                                      <option value="163" > Northern Mariana Islands</option>
                                      <option value="164" > Norway</option>
                                      <option value="165" > Oman</option>
                                      <option value="166" > Pakistan</option>
                                      <option value="167" > Palau</option>
                                      <option value="168" > Palestinian Territory Occupied</option>
                                      <option value="169" > Panama</option>
                                      <option value="170" > Papua new Guinea</option>
                                      <option value="171" > Paraguay</option>
                                      <option value="172" > Peru</option>
                                      <option value="173" > Philippines</option>
                                      <option value="174" > Pitcairn Island</option>
                                      <option value="175" > Poland</option>
                                      <option value="176" > Portugal</option>
                                      <option value="177" > Puerto Rico</option>
                                      <option value="178" > Qatar</option>
                                      <option value="49"> Republic Of The Congo</option>
                                      <option value="179" > Reunion</option>
                                      <option value="180" > Romania</option>
                                      <option value="181" > Russia</option>
                                      <option value="182" > Rwanda</option>
                                      <option value="183" > Saint Helena</option>
                                      <option value="184" > Saint Kitts And Nevis</option>
                                      <option value="185" > Saint Lucia</option>
                                      <option value="186" > Saint Pierre and Miquelon</option>
                                      <option value="187" > Saint Vincent And The Grenadines</option>
                                      <option value="188" > Samoa</option>
                                      <option value="189" > San Marino</option>
                                      <option value="190" > Sao Tome and Principe</option>
                                      <option value="191" > Saudi Arabia</option>
                                      <option value="192" > Senegal</option>
                                      <option value="193" > Serbia</option>
                                      <option value="194" > Seychelles</option>
                                      <option value="195" > Sierra Leone</option>
                                      <option value="196" > Singapore</option>
                                      <option value="197" > Slovakia</option>
                                      <option value="198" > Slovenia</option>
                                      <option value="199" > Smaller Territories of the UK</option>
                                      <option value="200" > Solomon Islands</option>
                                      <option value="201" > Somalia</option>
                                      <option value="202" > South Africa</option>
                                      <option value="203" > South Georgia</option>
                                      <option value="204" > South Sudan</option>
                                      <option value="205" > Spain</option>
                                      <option value="206" > Sri Lanka</option>
                                      <option value="207" > Sudan</option>
                                      <option value="208" > Suriname</option>
                                      <option value="209" > Svalbard And Jan Mayen Islands</option>
                                      <option value="210" > Swaziland</option>
                                      <option value="211" > Sweden</option>
                                      <option value="212" > Switzerland</option>
                                      <option value="213" > Syria</option>
                                      <option value="214" > Taiwan</option>
                                      <option value="215" > Tajikistan</option>
                                      <option value="216" > Tanzania</option>
                                      <option value="217" > Thailand</option>
                                      <option value="218" > Togo</option>
                                      <option value="219" > Tokelau</option>
                                      <option value="220" > Tonga</option>
                                      <option value="221" > Trinidad And Tobago</option>
                                      <option value="222" > Tunisia</option>
                                      <option value="223" > Turkey</option>
                                      <option value="224" > Turkmenistan</option>
                                      <option value="225" > Turks And Caicos Islands</option>
                                      <option value="226" > Tuvalu</option>
                                      <option value="227" > Uganda</option>
                                      <option value="228" > Ukraine</option>
                                      <option value="229" > United Arab Emirates</option>
                                      <option value="230" > United Kingdom</option>
                                      <option value="231" > United States</option>
                                      <option value="232" > United States Minor Outlying Islands</option>
                                      <option value="233" > Uruguay</option>
                                      <option value="234" > Uzbekistan</option>
                                      <option value="235" > Vanuatu</option>
                                      <option value="236" > Vatican City State (Holy See)</option>
                                      <option value="237" > Venezuela</option>
                                      <option value="238" > Vietnam</option>
                                      <option value="239" > Virgin Islands (British)</option>
                                      <option value="240" > Virgin Islands (US)</option>
                                      <option value="241" > Wallis And Futuna Islands</option>
                                      <option value="242" > Western Sahara</option>
                                      <option value="243" > Yemen</option>
                                      <option value="244" > Yugoslavia</option>
                                      <option value="245" > Zambia</option>
                                      <option value="246" > Zimbabwe</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">State*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">City*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <br />
                                <div className="login_submit">
                                  <button className="common_btn text-uppercase" type="submit" title="Update" id="updateBillingAddress">Update</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-12 shippingAddress">
                        <h4 className="shipping-address">Shipping Address</h4>
                        <div className="shippingAddressError"></div>
                        <div className="login">
                          <div className="account_form login_form_container">
                            <div className="account_login_form">
                              <form id="update_shipping_address" action="" className="bv-form">
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Shipping Name*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Shipping Email*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Shipping Mobile Number*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Shipping Address*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">Country*</label>
                                    <select name="shipping_country_id" className="form-control" id="shipping_country_id" data-bv-field="shipping_country_id">
                                      <option value="">Select Country</option>
                                      <option value="1"> Afghanistan</option>
                                      <option value="2"> Albania</option>
                                      <option value="3"> Algeria</option>
                                      <option value="4"> American Samoa</option>
                                      <option value="5"> Andorra</option>
                                      <option value="6"> Angola</option>
                                      <option value="7"> Anguilla</option>
                                      <option value="8"> Antarctica</option>
                                      <option value="9"> Antigua And Barbuda</option>
                                      <option value="10"> Argentina</option>
                                      <option value="11"> Armenia</option>
                                      <option value="12"> Aruba</option>
                                      <option value="13"> Australia</option>
                                      <option value="14"> Austria</option>
                                      <option value="15"> Azerbaijan</option>
                                      <option value="16"> Bahamas The</option>
                                      <option value="17"> Bahrain</option>
                                      <option value="18"> Bangladesh</option>
                                      <option value="19"> Barbados</option>
                                      <option value="20"> Belarus</option>
                                      <option value="21"> Belgium</option>
                                      <option value="22"> Belize</option>
                                      <option value="23"> Benin</option>
                                      <option value="24"> Bermuda</option>
                                      <option value="25"> Bhutan</option>
                                      <option value="26"> Bolivia</option>
                                      <option value="27"> Bosnia and Herzegovina</option>
                                      <option value="28"> Botswana</option>
                                      <option value="29"> Bouvet Island</option>
                                      <option value="30"> Brazil</option>
                                      <option value="31"> British Indian Ocean Territory</option>
                                      <option value="32"> Brunei</option>
                                      <option value="33"> Bulgaria</option>
                                      <option value="34"> Burkina Faso</option>
                                      <option value="35"> Burundi</option>
                                      <option value="36"> Cambodia</option>
                                      <option value="37"> Cameroon</option>
                                      <option value="38"> Canada</option>
                                      <option value="39"> Cape Verde</option>
                                      <option value="40"> Cayman Islands</option>
                                      <option value="41"> Central African Republic</option>
                                      <option value="42"> Chad</option>
                                      <option value="43"> Chile</option>
                                      <option value="44"> China</option>
                                      <option value="45"> Christmas Island</option>
                                      <option value="46"> Cocos (Keeling) Islands</option>
                                      <option value="47"> Colombia</option>
                                      <option value="48"> Comoros</option>
                                      <option value="51"> Cook Islands</option>
                                      <option value="52"> Costa Rica</option>
                                      <option value="53"> Cote D&#039;Ivoire (Ivory Coast)</option>
                                      <option value="54"> Croatia (Hrvatska)</option>
                                      <option value="55"> Cuba</option>
                                      <option value="56"> Cyprus</option>
                                      <option value="57"> Czech Republic</option>
                                      <option value="50"> Democratic Republic Of The Congo</option>
                                      <option value="58"> Denmark</option>
                                      <option value="59"> Djibouti</option>
                                      <option value="60"> Dominica</option>
                                      <option value="61"> Dominican Republic</option>
                                      <option value="62"> East Timor</option>
                                      <option value="63"> Ecuador</option>
                                      <option value="64"> Egypt</option>
                                      <option value="65"> El Salvador</option>
                                      <option value="66"> Equatorial Guinea</option>
                                      <option value="67"> Eritrea</option>
                                      <option value="68"> Estonia</option>
                                      <option value="69"> Ethiopia</option>
                                      <option value="70"> External Territories of Australia</option>
                                      <option value="71"> Falkland Islands</option>
                                      <option value="72"> Faroe Islands</option>
                                      <option value="73"> Fiji Islands</option>
                                      <option value="74"> Finland</option>
                                      <option value="75"> France</option>
                                      <option value="76"> French Guiana</option>
                                      <option value="77"> French Polynesia</option>
                                      <option value="78"> French Southern Territories</option>
                                      <option value="79"> Gabon</option>
                                      <option value="80"> Gambia The</option>
                                      <option value="81"> Georgia</option>
                                      <option value="82"> Germany</option>
                                      <option value="83"> Ghana</option>
                                      <option value="84"> Gibraltar</option>
                                      <option value="85"> Greece</option>
                                      <option value="86"> Greenland</option>
                                      <option value="87"> Grenada</option>
                                      <option value="88"> Guadeloupe</option>
                                      <option value="89"> Guam</option>
                                      <option value="90"> Guatemala</option>
                                      <option value="91"> Guernsey and Alderney</option>
                                      <option value="92"> Guinea</option>
                                      <option value="93"> Guinea-Bissau</option>
                                      <option value="94"> Guyana</option>
                                      <option value="95"> Haiti</option>
                                      <option value="96"> Heard and McDonald Islands</option>
                                      <option value="97"> Honduras</option>
                                      <option value="98"> Hong Kong S.A.R.</option>
                                      <option value="99"> Hungary</option>
                                      <option value="100" > Iceland</option>
                                      <option value="101" > India</option>
                                      <option value="102" > Indonesia</option>
                                      <option value="103" > Iran</option>
                                      <option value="104" > Iraq</option>
                                      <option value="105" > Ireland</option>
                                      <option value="106" > Israel</option>
                                      <option value="107" > Italy</option>
                                      <option value="108" > Jamaica</option>
                                      <option value="109" > Japan</option>
                                      <option value="110" > Jersey</option>
                                      <option value="111" > Jordan</option>
                                      <option value="112" > Kazakhstan</option>
                                      <option value="113" > Kenya</option>
                                      <option value="114" > Kiribati</option>
                                      <option value="115" > Korea North</option>
                                      <option value="116" > Korea South</option>
                                      <option value="117" > Kuwait</option>
                                      <option value="118" > Kyrgyzstan</option>
                                      <option value="119" > Laos</option>
                                      <option value="120" > Latvia</option>
                                      <option value="121" > Lebanon</option>
                                      <option value="122" > Lesotho</option>
                                      <option value="123" > Liberia</option>
                                      <option value="124" > Libya</option>
                                      <option value="125" > Liechtenstein</option>
                                      <option value="126" > Lithuania</option>
                                      <option value="127" > Luxembourg</option>
                                      <option value="128" > Macau S.A.R.</option>
                                      <option value="129" > Macedonia</option>
                                      <option value="130" > Madagascar</option>
                                      <option value="131" > Malawi</option>
                                      <option value="132" > Malaysia</option>
                                      <option value="133" > Maldives</option>
                                      <option value="134" > Mali</option>
                                      <option value="135" > Malta</option>
                                      <option value="136" > Man (Isle of)</option>
                                      <option value="137" > Marshall Islands</option>
                                      <option value="138" > Martinique</option>
                                      <option value="139" > Mauritania</option>
                                      <option value="140" > Mauritius</option>
                                      <option value="141" > Mayotte</option>
                                      <option value="142" > Mexico</option>
                                      <option value="143" > Micronesia</option>
                                      <option value="144" > Moldova</option>
                                      <option value="145" > Monaco</option>
                                      <option value="146" > Mongolia</option>
                                      <option value="147" > Montserrat</option>
                                      <option value="148" > Morocco</option>
                                      <option value="149" > Mozambique</option>
                                      <option value="150" > Myanmar</option>
                                      <option value="151" > Namibia</option>
                                      <option value="152" > Nauru</option>
                                      <option value="153" > Nepal</option>
                                      <option value="154" > Netherlands Antilles</option>
                                      <option value="155" > Netherlands The</option>
                                      <option value="156" > New Caledonia</option>
                                      <option value="157" > New Zealand</option>
                                      <option value="158" > Nicaragua</option>
                                      <option value="159" > Niger</option>
                                      <option value="160" > Nigeria</option>
                                      <option value="161" > Niue</option>
                                      <option value="162" > Norfolk Island</option>
                                      <option value="163" > Northern Mariana Islands</option>
                                      <option value="164" > Norway</option>
                                      <option value="165" > Oman</option>
                                      <option value="166" > Pakistan</option>
                                      <option value="167" > Palau</option>
                                      <option value="168" > Palestinian Territory Occupied</option>
                                      <option value="169" > Panama</option>
                                      <option value="170" > Papua new Guinea</option>
                                      <option value="171" > Paraguay</option>
                                      <option value="172" > Peru</option>
                                      <option value="173" > Philippines</option>
                                      <option value="174" > Pitcairn Island</option>
                                      <option value="175" > Poland</option>
                                      <option value="176" > Portugal</option>
                                      <option value="177" > Puerto Rico</option>
                                      <option value="178" > Qatar</option>
                                      <option value="49"> Republic Of The Congo</option>
                                      <option value="179" > Reunion</option>
                                      <option value="180" > Romania</option>
                                      <option value="181" > Russia</option>
                                      <option value="182" > Rwanda</option>
                                      <option value="183" > Saint Helena</option>
                                      <option value="184" > Saint Kitts And Nevis</option>
                                      <option value="185" > Saint Lucia</option>
                                      <option value="186" > Saint Pierre and Miquelon</option>
                                      <option value="187" > Saint Vincent And The Grenadines</option>
                                      <option value="188" > Samoa</option>
                                      <option value="189" > San Marino</option>
                                      <option value="190" > Sao Tome and Principe</option>
                                      <option value="191" > Saudi Arabia</option>
                                      <option value="192" > Senegal</option>
                                      <option value="193" > Serbia</option>
                                      <option value="194" > Seychelles</option>
                                      <option value="195" > Sierra Leone</option>
                                      <option value="196" > Singapore</option>
                                      <option value="197" > Slovakia</option>
                                      <option value="198" > Slovenia</option>
                                      <option value="199" > Smaller Territories of the UK</option>
                                      <option value="200" > Solomon Islands</option>
                                      <option value="201" > Somalia</option>
                                      <option value="202" > South Africa</option>
                                      <option value="203" > South Georgia</option>
                                      <option value="204" > South Sudan</option>
                                      <option value="205" > Spain</option>
                                      <option value="206" > Sri Lanka</option>
                                      <option value="207" > Sudan</option>
                                      <option value="208" > Suriname</option>
                                      <option value="209" > Svalbard And Jan Mayen Islands</option>
                                      <option value="210" > Swaziland</option>
                                      <option value="211" > Sweden</option>
                                      <option value="212" > Switzerland</option>
                                      <option value="213" > Syria</option>
                                      <option value="214" > Taiwan</option>
                                      <option value="215" > Tajikistan</option>
                                      <option value="216" > Tanzania</option>
                                      <option value="217" > Thailand</option>
                                      <option value="218" > Togo</option>
                                      <option value="219" > Tokelau</option>
                                      <option value="220" > Tonga</option>
                                      <option value="221" > Trinidad And Tobago</option>
                                      <option value="222" > Tunisia</option>
                                      <option value="223" > Turkey</option>
                                      <option value="224" > Turkmenistan</option>
                                      <option value="225" > Turks And Caicos Islands</option>
                                      <option value="226" > Tuvalu</option>
                                      <option value="227" > Uganda</option>
                                      <option value="228" > Ukraine</option>
                                      <option value="229" > United Arab Emirates</option>
                                      <option value="230" > United Kingdom</option>
                                      <option value="231" > United States</option>
                                      <option value="232" > United States Minor Outlying Islands</option>
                                      <option value="233" > Uruguay</option>
                                      <option value="234" > Uzbekistan</option>
                                      <option value="235" > Vanuatu</option>
                                      <option value="236" > Vatican City State (Holy See)</option>
                                      <option value="237" > Venezuela</option>
                                      <option value="238" > Vietnam</option>
                                      <option value="239" > Virgin Islands (British)</option>
                                      <option value="240" > Virgin Islands (US)</option>
                                      <option value="241" > Wallis And Futuna Islands</option>
                                      <option value="242" > Western Sahara</option>
                                      <option value="243" > Yemen</option>
                                      <option value="244" > Yugoslavia</option>
                                      <option value="245" > Zambia</option>
                                      <option value="246" > Zimbabwe</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">State*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-xl-12">
                                  <div className="form-group has-feedback">
                                    <label className="name">City*</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <br />
                                <div className="login_submit">
                                  <button className="common_btn text-uppercase" type="submit" title="Update" id="updateShippingAddress">Update</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${activeTab === "v-pills-profile" ? "show active" : ""}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <h3>My Profile</h3>
                    <div className="login">
                      <div className="account_form login_form_container">
                        <div className="account_login_form">
                          <form id="personal_information" autoComplete="off" noValidate="noValidate" className="bv-form">
                            <div className="col-xl-12">
                              <div className="input-radio">
                                <span className="custom-radio">
                                  <input type="radio" name="title" value="Mr." checked/>
                                  Mr.
                                </span>
                                <span className="custom-radio">
                                  <input type="radio" name="title" value="Mrs."/>
                                  Mrs.
                                </span>
                              </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">Name*</label>
                                  <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">Email*</label>
                                  <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">Mobile Number*</label>
                                  <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">Address*</label>
                                  <input type="text" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="login_submit">
                              <button type="submit" className="common_btn text-uppercase" title="Update" id="updateInfo">Update</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${activeTab === "v-pills-password" ? "show active" : ""}`} id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-password-tab">
                    <h3>Change Password</h3>
                    <div className="login">
                      <div className="account_form login_form_container">
                        <div className="account_login_form">
                          <form method="POST" id="change_password" accept-charset="UTF-8" autoComplete="off" noValidate="noValidate" className="bv-form" action="">
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label>Current Password</label>
                                  <input type="password" name="currentpassword" id="currentpassword" data-bv-field="currentpassword" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">New Password</label>
                                  <input type="password" className="form-control" name="password" id="password" data-bv-field="password"/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group has-feedback">
                                  <label for="name">Confirm Password</label>
                                  <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" data-bv-field="confirmPassword"/>
                                </div>
                            </div>
                            <br />
                            <div className="login_submit">
                              <button type="submit" className="common_btn text-uppercase" title="Update" id="passwordUpdate">Change Password</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Footer />
        </>
    )
}