import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='bg-secondary text-white text-center'>Give Your Feedback</h1>
            <section className='mt-5 mb-5'>
                <div className="container" id="Subscribe">

                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://media.istockphoto.com/videos/cute-tooth-dental-cartoon-hd-animation-video-id975678066?s=640x640" alt="" />
                        </div>
                        <div className="col-md-6 shadow">
                            <div className="container">
                                <h3 className="text-center">Contact Us</h3>
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control p-2" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter Your Email Address" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control p-2" id="exampleInputPassword1"
                                            placeholder="enter your name" />
                                    </div>
                                    <textarea className="w-100 p-4" name="" id="" rows="5"></textarea>
                                    <br />
                                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Contact;