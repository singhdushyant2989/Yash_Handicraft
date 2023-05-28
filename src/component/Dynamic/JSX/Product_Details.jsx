import Slider from 'react-slick';
import '../CSS/Product_Details.css';
import image from '../../images/DynSection/1.jpg';
import * as SlIcon from "react-icons/sl";
import { IconContext } from 'react-icons';
import Footer from '../../Fixed/Footer';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Blog from '../../Data/Blog';
import Product_Section from '../../HomePage/JSX/Product_Section';




function Product_Details() {
    let urlID = useParams();
    // var [postID, setPostID] = useState(urlID.id);
    var [actdata, setActData] = useState([]);
    useEffect(() => {
      let filterBlogs = Blog.filter((item) => item.id == urlID.id);
      setActData(filterBlogs);
    },[urlID]);
    // console.log(actdata);
    


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
      <>
        {
          actdata.length>0 ?
          <>
          <div className="breadcrumbs_area">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="breadcrumbs_content">
                              <h3>{actdata[0].title_}</h3>
                              <ul>
                                  <li>
                                    <Link to={'/'}>
                                      Home
                                    </Link>
                                  </li>
                                  <li> {">"} </li>
                                  <li>
                                    <a href="">{actdata[0].title}</a>
                                  </li>
                                  <li>{">"}</li>
                                  <li>{actdata[0].title_}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="product_details variable_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product_details-tab">
                            <div id='img-1' className="zoomWrapper single-zoom">
                                <a href="">
                                    <img src={actdata[0].imgpath} alt="" />
                                </a>
                            </div>
                            <div className="single-zoom-thumb">
                                <Slider {...settings}>
                                    <div>
                                        <li className='slider_image'>
                                            <img src={actdata[0].imgpath} alt="" />
                                        </li>
                                    </div>
                                    <div>
                                        <li className='slider_image'>
                                            <img src={actdata[0].imgpath} alt="" />
                                        </li>
                                    </div>
                                    <div>
                                        <li className='slider_image'>
                                            <img src={actdata[0].imgpath} alt="" />
                                        </li>
                                    </div>
                                    <div>
                                        <li className='slider_image'>
                                            <img src={actdata[0].imgpath} alt="" />
                                        </li>
                                    </div>
                                    <div>
                                        <li className='slider_image'>
                                            <img src={actdata[0].imgpath} alt="" />
                                        </li>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="product_d_right">
                        <h1>{actdata[0].title_}</h1>
                        <div className="product_price">
                          <span className="old_price">{actdata[0].price}</span>
                        <span className="current_price">{actdata[0].actual_price}</span>
                        </div>
                        <div className="product_desc">
                          <p>{actdata[0].Short_Description}</p>
                        </div>
                        <div className="product_variant quantity">
                          <button className="button">Add To Cart</button>
                          
                        </div>
                        <div className="product_d_meta">
                          <span>Code: {actdata[0].Code}</span>
                          <span>Dimension: 72L * 32H * 30W</span>
                          <span>Estimate Delivery Days: {actdata[0].Estimate_Delivery_Time}</span>
                          <span>
                            Category:
                            <a>{actdata[0].title}</a> 
                          </span>
                          <span>
                            Color:
                            <a>{actdata[0].Color}</a> 
                          </span>
                          <span>
                            Material:
                            <a>{actdata[0].Material}</a> 
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="product_d_info">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="product_d_inner">
                    <div className="product_info_button">
                      <ul className="nav text-left">
                        <li>
                          <a>Description</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content pt-4">
                      <div className="product_info_content">
                        <p>
                          {actdata[0].Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          :
          "No data available"
        }
        <div className='product_section' style={{border : '0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product_area">
                                <Product_Section />    
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
        <div className='product_section' style={{border : '0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Upsell Products</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product_area">
                                <Product_Section />    
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
        <Footer />
      </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <IconContext.Provider value={{className: "slider_single_Icon"}}>
          <SlIcon.SlArrowRight />
        </IconContext.Provider>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <IconContext.Provider value={{className: "slider_single_Icon"}}>
          <SlIcon.SlArrowLeft />
        </IconContext.Provider>
    </div>
  );
}

export default Product_Details;