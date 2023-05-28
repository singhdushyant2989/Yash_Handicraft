import '../CSS/Newsletter.css';

export default function Newsletter() {
    return(
        <section className="newsletter newsletter_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletter_content">
                            <h2>Our Newsletter</h2>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div className='subscribe_form'>
                                <form action="">
                                    <input type="text" placeholder="Email address..." />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}