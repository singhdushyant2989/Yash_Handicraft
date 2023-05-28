import Slider from "react-slick";
import data from "../../../Data/Testimonial_Data";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons';

export default function Testimonial_Slider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     
    return (
        <div>
          <Slider {...settings}>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="col-12">
                            <div className="single_testimonial text-center">
                                <p>{item.text}</p>
                                <img src={item.image} alt={item.name} />
                                <span className="name">{item.name}</span>
                                <span className="job_title">{item.job_title}</span>
                                <div className="product_rating">
                                    <ul>
                                        {
                                            item.rating.map((v) => {
                                                return (
                                                    <li>
                                                        <a href="">
                                                        <IconContext.Provider value={{className : "diffIcon"}}>
                                                            <AiIcons.AiFillStar />
                                                        </IconContext.Provider>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div>
              <h3>1</h3>
            </div> */}
          </Slider>
        </div>
      );
}