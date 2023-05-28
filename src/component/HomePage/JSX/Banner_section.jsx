import '../CSS/Banner_section.css';

export default function Banner_section(){
    return(
        <section className="banner_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a >
                                    <img src="http://yashhandicraftsjodhpur.com/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                                </a>
                                <div className='banner_content'>
                                    <p>Design Creative</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a >
                                    <img src="http://yashhandicraftsjodhpur.com/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="" />
                                </a>
                                <div className='banner_content'>
                                    <p>Bestselling Products</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a >
                                    <img src="http://yashhandicraftsjodhpur.com/storage/app/public/uploads/images/home-page/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp" alt="" />
                                </a>
                                <div className='banner_content'>
                                    <p>Onsale Products</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}