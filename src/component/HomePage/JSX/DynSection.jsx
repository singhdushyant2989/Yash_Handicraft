import '../CSS/DynSection.css';
import Categories from '../../Data/Categories';
import Blog from '../../Data/Blog';
import { useState } from 'react';
import  hearticon  from '../../images/DynSection/heart-regular.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function DynSection() {
    let [actcat,catid] = useState('0');
    let [actblogdata,blogdata] = useState(Blog);
    let passcat = (cid) => {
            let filterBlogs = Blog.filter((v) => v.category == cid)
            blogdata(filterBlogs);
        catid(cid);
    }
    useEffect(()=>{
        let filterBlogs = Blog.filter((v) => v.category == 1)
            blogdata(filterBlogs);
        catid(1);
    },[])
    return(
        <div className="dynsection dyn_1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product_area">
                            <div className="product_tab_button">
                                <ul className='nav' role='tablist'>
                                    {
                                        Categories.map((v) => {
                                            return(
                                                <li onClick={() => passcat(v.id)} className={`${actcat === v.id ? 'active-btn' : ''}`}>{v.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="">
                                    <Blogsfun props={actblogdata}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Blogsfun({props}){
    let finalBlog = props.map((v) => {
        return(
            <div className='col-md-3'>
                <div className='single_product'>
                    <img src={v.imgpath} alt="" className='w-100 mb-3' />
                    <div className='product_content'>
                        <div className='tag_cate'>
                            <a>{v.title}</a>
                        </div>
                        <h3>
                            <Link to={`/product-details/${v.id}`}>
                                {v.title_}
                            </Link>
                        </h3>
                        <div className="price_box">
                            <span className="old_price">{v.price}</span>
                            <span className="current_price">{v.actual_price}</span>
                        </div>
                        <div className='action_links w-100 mt-3'>
                            <ul>
                                <li className='me-2'>
                                    <a className='wishlist_tooltip' data-placement='top' title='Add to Wishlist' data-bs-toggle="tooltip">
                                        <span className='icon'>
                                            <img src={hearticon} alt="hearticon" className='wishlist_img' />
                                        </span>
                                    </a>
                                </li>
                                <li className='add_to_cart'>
                                    <a title='Add to Cart'>add to cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        )
    })
    if(finalBlog.length >= 0){
        return(
            <div className="row">
                {finalBlog}
            </div>
        )
    } else {
        return(
            <div>
                No Record Found !!
            </div>
        )
    }
}