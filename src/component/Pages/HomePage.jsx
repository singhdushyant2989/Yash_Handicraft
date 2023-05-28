import Footer from "../Fixed/Footer";
import Banner_section from "../HomePage/JSX/Banner_section";
import DynSection from "../HomePage/JSX/DynSection";
import FullBanner from "../HomePage/JSX/FullBanner";
import Newsletter from "../HomePage/JSX/Newsletter";
import Product_Section from "../HomePage/JSX/Product_Section";
import Shipping_area from "../HomePage/JSX/Shipping_area";
import Slider_Area from "../HomePage/JSX/Slider_Area";
import Testimonial from "../HomePage/JSX/Testimonial/Testimonial";

export default function HomePage() {
    return (
        <div>
            <Slider_Area />
            <Banner_section />
            <DynSection />
            <FullBanner />
            <div className='product_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Bestselling Products</h2>
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
            <Shipping_area />
            <Testimonial />
            <Newsletter />
            <Footer />
        </div>
    )
}