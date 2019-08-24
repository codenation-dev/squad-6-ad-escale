import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../actions/todos'

import Post from './Post'


const Posts = ({ todos, requestTodoList, requestSingle }) => {

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
                <button onClick={() => requestTodoList()}>Carregar todos</button>
                <button onClick={() => requestSingle(3)}>teste single</button>


                <div className="row shuffle-wrapper portfolio-gallery">

                    {
                        todos.data.map((elem, index) => {
                            return <Post key={index} animal={elem} />
                        })
                    }


                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);