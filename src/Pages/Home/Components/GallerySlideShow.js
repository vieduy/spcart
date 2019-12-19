import React, { Component } from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";

class GallerySlideshow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  change_picture = (i) => {
    this.setState({
      index: i
    })
  }




  render() {

    const images = [
      {
        src:
          "https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        width: 4,
        height: 3,
      },
      {
        src:
          "https://images.unsplash.com/photo-1557939403-1760a0e47505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80",
        width: 4,
        height: 3,
      },
      {
        src:
          "https://images.unsplash.com/photo-1558029062-a37889b87526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        width: 4,
        height: 3,
      },
      {
        src:
          "https://images.unsplash.com/photo-1558088458-b65180740294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80",
        width: 4,
        height: 3,
      },
      {
        src:
          "https://images.unsplash.com/photo-1558039719-79cb7b60d279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        width: 4,
        height: 3,
      }
    ];

    return (
      <div className="GallerySlideshow">

        <div className="container">
          <Gallery
            index={this.state.index}
            onRequestChange={i => {
              this.change_picture(i);
            }}
          >
            {images.map(img => (
              <GalleryImage objectFit="contain" key={img.src} src={img.src} />
            ))}
          </Gallery>
        </div>
      </div>
    )
  }
}

export default GallerySlideshow;
