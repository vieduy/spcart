import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class XTNCarousel extends Component {
  render() {
    return (
      <div className="">
        <Carousel
          showIndicators={true}
          showThumbs={false}
          autoPlay={true}
          stopOnHover={false}
          transitionTime={500}
          infiniteLoop={true}
          interval = {5000}
          
        >
          <div>
            <img src="https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1558088458-b65180740294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80"
            />
            <p className="legend">
              <button type="button" class="btn btn-primary">tham gia</button>
            </p>

          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1557939403-1760a0e47505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>

    );
  }
}

export default XTNCarousel;
