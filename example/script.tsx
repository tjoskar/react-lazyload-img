import React, { Component } from "react";
import { render } from "react-dom";
import { LazyLoadImage, LazyLoadBackgroundImage } from "../src";

export class LazyloadImages extends Component {
  defaultImage = "https://www.placecage.com/1199/800";
  images = [
    "https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80",
    "https://images.unsplash.com/photo-1468103933896-2c34a78104c2?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80",
    "https://images.unsplash.com/photo-1471201187657-6406da15e43b?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80"
  ];
  render() {
    return this.images.map(image => (
      <LazyLoadImage
        key={image}
        width="1199px"
        height="800px"
        defaultImage={this.defaultImage}
        image={image}
      />
    ));
  }
}

export class PixelatedImage extends Component {
  defaultImage =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBCgoKCgoKCwwMCw8RDxEPFxUTExUXIhkaGRoZIjQhJiEhJiE0LjguKy44LlNBOjpBU2BRTFFgdGhodJOLk8DA///AABEIAAUABQMBEQACEQEDEQH/xABcAAEAAAAAAAAAAAAAAAAAAAAHEAEAAgEFAAAAAAAAAAAAAAACAQMRAAQFB0EBAQEAAAAAAAAAAAAAAAAAAAMEEQAABQUAAAAAAAAAAAAAAAAAAQIDQRITISKR/9oADAMBAAIRAxEAPwAZjt2+oGm3hNumMwmLmIUx7ic6mtPQ/iNSC1plsuj/2Q==";
  image =
    "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?ixlib=rb-0.3.5&q=80&fm=jpg";
  style = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "cover",
    transition: "background-image 1s ease-in-out"
  };
  render() {
    return (
      <LazyLoadBackgroundImage
        style={this.style}
        width="100%"
        height={600}
        defaultImage={this.defaultImage}
        image={this.image}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <p
          style={{ height: 1000, border: "1px solid red", fontFamily: "Lato" }}
        >
          Scroll down to see some magic happen 😃
        </p>
        <PixelatedImage />
        <LazyloadImages />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
