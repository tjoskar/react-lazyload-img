# react-lazyload-img [![Build Status](https://travis-ci.org/tjoskar/react-lazyload-img.svg?branch=master)](https://travis-ci.org/tjoskar/react-lazyload-img) [![codecov](https://codecov.io/gh/tjoskar/react-lazyload-img/branch/master/graph/badge.svg)](https://codecov.io/gh/tjoskar/react-lazyload-img)

> Lazy image loader for react


## Install

```
$ npm install @tjoskar/react-lazyload-img
```


## Usage

```jsx
import React, { Component } from 'react';
import { LazyLoadImage, LazyLoadBackgroundImage } from './lazy-load-image'

class App extends Component {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';

  render() {
    return (
      <React.Fragment>
        { /* To use img-tag */ }
        <LazyLoadImage width="50" height="200px" defaultImage={this.defaultImage} image={this.image} />

        { /* To use div-tag with background image styling */ }
        <LazyLoadBackgroundImage width="100%" height="200px" defaultImage={this.defaultImage} image={this.image} />
      </React.Fragment>
    );
  }
}
```

You can also pass options (`root`, `rootMargin`, `threshold`) to the IntersectionObserver constructor. See the [documentation for IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) for more info.

## Props

Both `LazyLoadImage` and `LazyLoadBackgroundImage` have the same props:

```
  defaultImage: string // Path to the default image to show before the lazy loading
  image: string // Path to the image to be lazy loaded
  errorImage?: string // Path to an image to show if the loading of `image` fails, will use `defaultImage` if not set
  onLoaded?: () => void // Callback function after the image has been loaded
  options?: ObserverOptions
  style?: Object // Will be passed to the under lying div/img tag
  height: number | string // The height of the image
  width: number | string // The width of the image
```

## Requirement

The browser you are targeting needs to have support for `IntersectionObserver` and `WeakMap` or import polyfill for them. You also need to use a bundler that understand es-mudules (eg. webpack, rollup, parcel, fusebox, etc.)

## License

MIT
