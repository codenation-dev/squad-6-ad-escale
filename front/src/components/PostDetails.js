import React from 'react'

const PostDetails = () => {
    return (
        <div>
            <section className="section portfolio-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="images/pets/1.jpg" alt="" className="img-fluid w-100" />
                        </div>

                        <div className="col-lg-4">
                            <img src="images/pets/2.jpg" alt="" className="img-fluid w-100" />
                        </div>
                        <div className="col-lg-4">
                            <img src="images/pets/3.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>

                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3>Perdido</h3>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="project-info">
                                <h3 className="mb-4">Descrição</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi fugiat ad cupiditate hic, eum debitis ipsum, quos non mollitia. Commodi suscipit obcaecati et, aperiam quas vero quo, labore tempore.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis beatae doloremque cupiditate vel repellat nam est voluptates, magnam quod explicabo fugit, quidem.</p>
                            </div>
                        </div>



                        <div className="col-lg-6">
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div className="info">
                                        <h5 className="mb-0">Nome</h5>
                                        <p>Bob</p>
                                    </div>

                                    <div className="info">
                                        <h5 className="mb-0">Sexo</h5>
                                        <p>Macho</p>
                                    </div>
                                    <div className="info">
                                        <h5 className="mb-0">Idade</h5>
                                        <p>1 ano</p>
                                    </div>
                                    <div className="info">
                                        <h5 className="mb-0">Porte</h5>
                                        <p>Médio</p>
                                    </div>

                                    <div className="info">
                                        <h5 className="mb-0">Cidade - Estado</h5>
                                        <p>São Paulo / SP</p>
                                    </div>



                                </div>

                                <div className="col-lg-6">
                                    <div className="info">
                                        <h4 className="mb-0">Contato</h4>
                                        <p>Marco
                                        <br />
                                            ma@gmail.com
                                        <br />
                                            11 2707 1306</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div class="comments bg-secondary p-4 mt-5">
                <h4 class="mb-4">Comments</h4>

                <div class="latest-comments">
                    <ul class="list-unstyled">
                        <li>

                            <div class="media comments-box mb-45">
                                <img src="images/blog/author1.jpg" alt="" class="img-fluid mr-3" />
                                <div class="comments-text media-body">
                                    <h5>John Doe</h5>
                                    <p>Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget consequat </p>
                                    <a href="#" class="text-sm text-muted">Reply</a>

                                    <div class="media mt-4">
                                        <img src="images/blog/author2.jpg" alt="" class="img-fluid mr-3" />
                                        <div class="media-body comments-text">
                                            <div class="avatar-name">
                                                <h5>Jennifer S. Bowen</h5>
                                            </div>
                                            <p>Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget </p>
                                            <a href="#" class="text-sm text-muted">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img src="images/blog/author1.jpg" alt="" class="img-fluid mr-3" />
                                <div class="media-body comments-text">
                                    <h5>Omar Elnagar</h5>
                                    <p>Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget consequat </p>
                                    <a href="#" class="text-sm text-muted">Reply</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="comment-form bg-secondary p-4 mt-5">
                <h4 class="mb-4">Leave a comment</h4>
                <form action="#" class="comment-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <textarea name="msg" id="msg" cols="30" rows="4" class="form-control" placeholder="Your Comment"></textarea>
                    </div>

                    <a href="#" class="btn btn-main">Post Comment</a>

                </form>
            </div>
        </div>
    )
}

export default PostDetails