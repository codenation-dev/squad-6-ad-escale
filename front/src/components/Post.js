import React from 'react'

const Post = ({ id, name, state, city, category, number }) => {
  return (
    <div className="col-lg-4 col-6 mb-4 shuffle-item">
      <div className="position-relative inner-box">
        <div className="image position-relative ">
          <img src={`images/pets/${number}.jpg`} alt="portfolio-image" className="img-fluid w-100 d-block" />
            <div className="overlay-box">
              <div className="overlay-inner">
                <a className="overlay-content" href={`/postDetail/${id}`}>
                  <h5 className="mb-0">{name}</h5>
                  <p>{state} - {city}</p>
                  <p>{category}</p>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post