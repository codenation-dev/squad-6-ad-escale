import React from 'react'
import FilterSpeed from './FilterSpeed'

const FormFilter = () => {
  return (
    <section className='form-filter'>

      <FilterSpeed />

      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required >
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
                            Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required >
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
                            Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required />
            <div className="invalid-feedback">
                            Zip code required.
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
          <div className="invalid-feedback">
                        Please enter your shipping address.
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
            <div className="invalid-feedback">
                            Please enter your shipping address.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormFilter

/*
<div class="col-md-6 px-0">
                    <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
                    <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
                </div>
*/
