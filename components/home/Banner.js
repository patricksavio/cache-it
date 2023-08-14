import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});


class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
          <>
            <div className="main-banner">
              <div className="container-fluid p-0">
                <div className="row m-0">
                  <div className="col-lg-7 col-md-12 p-0">
                    <div className="main-banner-content">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <h1>
                            Solve Business Challenges With <span>IT</span>
                          </h1>
                          <p>
                            Who would consult, assist, guide, and develop
                            digital solutions through the right set of digital
                            tools, technologies, and expert consultation.
                          </p>

                          <div className="btn-box">
                            <Link href="/about">
                              <a className="btn btn-primary">Read More</a>
                            </Link>
                            <Link href="/contact">
                              <a className="btn btn-light">Get Started</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="main-banner-image">
                      <img src="/images/banner-img1.jpg" alt="image" />

                      <Link href="#">
                        <a
                          className="video-btn popup-youtube"
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                        >
                          <i className="flaticon-play-button"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="banner-inner-content">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="single-inner-box">
                        <div className="icon">
                          <i className="flaticon-branch"></i>
                        </div>

                        <h3>
                          <a href="#">
                            IT Management <i className="flaticon-add-1"></i>
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="single-inner-box">
                        <div className="icon">
                          <i className="flaticon-programming-code"></i>
                        </div>

                        <h3>
                          <a href="#">
                            Development <i className="flaticon-add-1"></i>
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 offset-lg-0 offset-md-0 offset-sm-3">
                      <div className="single-inner-box">
                        <div className="icon">
                          <i className="flaticon-tools-and-utensils"></i>
                        </div>

                        <h3>
                          <a href="#">
                            UX/UI Design <i className="flaticon-add-1"></i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="map">
                    <img src="/images/circle-map2.png" alt="image" />
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src="/images/shape/1.png" alt="image" />
              </div>
              <div className="shape2">
                <img src="/images/shape/2.png" alt="image" />
              </div>
              <div className="shape3">
                <img src="/images/shape/3.png" alt="image" />
              </div>
              <div className="shape4">
                <img src="/images/shape/4.png" alt="image" />
              </div>
              <div className="shape5">
                <img src="/images/shape/5.png" alt="image" />
              </div>
              <div className="shape6">
                <img src="/images/shape/6.png" alt="image" />
              </div>
              <div className="shape7">
                <img src="/images/shape/7.png" alt="image" />
              </div>
              <div className="shape8">
                <img src="/images/shape/8.png" alt="image" />
              </div>
              <div className="shape9">
                <img src="/images/shape/9.png" alt="image" />
              </div>
              <div className="shape10">
                <img src="/images/shape/10.png" alt="image" />
              </div>
              <div className="shape11">
                <img src="/images/shape/11.png" alt="image" />
              </div>
              <div className="shape12">
                <img src="/images/shape/12.png" alt="image" />
              </div>
            </div>

            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="bk7McNUjWgw"
              onClose={() => this.setState({ isOpen: false })}
            />
          </>
        );
    }
}

export default Banner;
