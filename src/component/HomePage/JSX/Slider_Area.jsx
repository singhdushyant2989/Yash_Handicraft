import Slider from 'react-slick';
import '../CSS/Slider_Area.css';
import image1 from '../../images/Slider_Area/1.jpg';
import image2 from '../../images/Slider_Area/2.jpg';
import image3 from '../../images/Slider_Area/3.jpg';


export default function Slider_Area() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider_area">
            <Slider {...settings}>
                <div>
                    <div className='whole_img' style={{backgroundImage : `url(${image1})`}}>
                        <div className="container">
                            <div style={{height: '450px'}}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='whole_img' style={{backgroundImage : `url(${image2})`}}>
                        <div className="container">
                            <div style={{height: '450px'}}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='whole_img' style={{backgroundImage : `url(${image3})`}}>
                        <div className="container">
                            <div style={{height: '450px'}}></div>
                        </div>
                    </div>
                </div>
        </Slider>
        </div>
    )
}