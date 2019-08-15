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
                    <Post number={1} />
                    <Post number={2} />
                    <Post number={3} />
                    <Post number={4} />
                    <Post number={5} />
                    <Post number={6} />
                    <Post number={7} />
                    <Post number={8} />
                    <Post number={1} />
                    <Post number={2} />
                    <Post number={3} />
                    <Post number={4} />
                    <Post number={5} />
                    <Post number={6} />
                    <Post number={7} />
                    <Post number={8} />

                </div>
            </div>
        </main>
    )
}

export default Pots