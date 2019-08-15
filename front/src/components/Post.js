import React from 'react'

const Post = ({ number }) => {
    return (
        <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
            <div className="position-relative inner-box">
                <div className="image position-relative ">
                    <img src={`images/pets/${number}.jpg`} alt="portfolio-image" className="img-fluid w-100 d-block" />
                    <div className="overlay-box">
                        <div className="overlay-inner">
                            <a className="overlay-content" href="">
                                <h5 className="mb-0">Painting</h5>
                                <p>Design</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post