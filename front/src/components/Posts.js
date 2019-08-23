import React from 'react'
import Post from './Post'

const Pots = () => {
  return (
    <main className="portfolio">
      <div className="container">
        <div className="row mb-5">
          <div className="col-10">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              <label className="btn active ">
                <input type="radio" name="shuffle-filter" value="all" checked="checked" />Todos os Pets
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

        <div className="row shuffle-wrapper portfolio-gallery">
          <Post id={1} name="linda" city="São Paulo" state="SP" category="Achado" number={1} />
          <Post id={2} name="linda" city="São Paulo" state="SP" category="Perdido" number={2} />
          <Post id={3} name="linda" city="São Paulo" state="SP" category="Adoção" number={3} />
          <Post id={4} name="linda" city="São Paulo" state="SP" category="Achado" number={4} />
          <Post id={5} name="linda" city="São Paulo" state="SP" category="Adoção" number={4} />
          <Post id={6} name="linda" city="São Paulo" state="SP" category="Achado" number={5} />
          <Post id={7} name="linda" city="São Paulo" state="SP" category="Adoção" number={6} />
        </div>
      </div>
    </main>
  )
}

export default Pots