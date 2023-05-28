import '../../CSS/Testimonial.css';
import Testimonial_Slider from './Testimonial_Slider';

export default function Testimonial() {
    return (
        <div className="testimonial mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial_title">
                            <h1>What Our Customers Say ?</h1>
                        </div>
                        <Testimonial_Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}