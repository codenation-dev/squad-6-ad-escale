import React from 'react'

import Animal from './Animal'

const Animals = ({ animals }) => {
  return (
    <main className="portfolio">
      <div className="container">
        <div className="row mb-5">
          <div className="col-10">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              <label className="btn active ">
                <input type="radio" name="shuffle-filter" value="all" defaultChecked />Todos os Pets
              </label>
              <label className="btn">
                <input type="radio" name="shuffle-filter" value="design" />Cães
              </label>
              <label className="btn">
                <input type="radio" name="shuffle-filter" value="branding" />Gatos
              </label>
              <label className="btn">
                <input type="radio" name="shuffle-filter" value="illustration" />Aves
              </label>
            </div>
          </div>
        </div>

        {/* <button onClick={() => requestSingleAnimal(3)}>teste single</button>
        {console.log(single)} */}

        <div className="row shuffle-wrapper portfolio-gallery">
          {animals.map((elem, index) => {
            return <Animal key={index} animal={elem} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Animals
