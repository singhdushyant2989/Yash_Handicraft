import Slider from 'react-slick';
import '../CSS/Product_Section.css';
import Blog from '../../Data/Blog';
import heart from '../../images/DynSection/heart-regular.svg';
import * as SlIcon from "react-icons/sl";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';




export default function Product_Section() {
    // let [actdata, setActData] = useState(Blog);
    
      let filterBlogs = Blog.filter((item) => item.Bestselling === true)
      // setActData(filterBlogs);
      // console.log(filterBlogs);
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // initialSlide: 0,
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
        <Slider {...settings}>
        {
          filterBlogs.map((item,index) => {
            // console.log(item);
            return (
              <div className="single_product" key={item.id}>
                <div className="product_thumb">
                  <a href="">
                    <img src={item.imgpath} alt="" />
                  </a>
                </div>
                <div className="product_content">
                  <div className="tag_cate">
                    <a> {item.title}</a>
                  </div>
                  <h3>
                    <Link to={`/product-details/${item.id}`}>
                      {item.title_}
                    </Link>
                  </h3>
                  <div className="price_box">
                    <span className="old_price">{item.price}</span>
                    <span className="current_price">{item.actual_price}</span>
                  </div>
                  <div className="action_links mt-3">
                    <ul>
                      <li className='product_heart'>
                        <a className='wishlist_tooltip' data-placement='top' title="Add to Wishlist" data-bs-toggle="tooltip" tabIndex={0}>
                          <span className='icon'>
                            <img src={heart} alt="" className='wishlist_img' />
                          </span>
                        </a>
                      </li>
                      <li className='add_to_cart'>
                        <a title='Add to Cart'>
                          <div className="cartShow">add to cart</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )
            })
          }   
          </Slider>
                      
      )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <IconContext.Provider value={{className: "betterIcon"}}>
          <SlIcon.SlArrowRight />
        </IconContext.Provider>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <IconContext.Provider value={{className: "betterIcon"}}>
          <SlIcon.SlArrowLeft />
        </IconContext.Provider>
    </div>
  );
}