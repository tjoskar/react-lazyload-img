# react-lazyload-img [![Build Status](https://travis-ci.org/tjoskar/react-lazyload-img.svg?branch=master)](https://travis-ci.org/tjoskar/react-lazyload-img) [![codecov](https://codecov.io/gh/tjoskar/react-lazyload-img/branch/master/graph/badge.svg)](https://codecov.io/gh/tjoskar/react-lazyload-img)

> Lazy image loader for react


## Install

```
$ npm install @tjoskar/react-lazyload-img
```


## Usage

```jsx
import React, { Component } from 'react'
import { LazyLoadImage, LazyLoadBackgroundImage } from '@tjoskar/react-lazyload-img'

const App = () => {
  const defaultImage = 'https://www.placecage.com/1000/1000'
  const image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg'
  return (
    <>
      { /* To use an img-tag */ }
      <LazyLoadImage width={50} height="200px" defaultImage={this.defaultImage} image={this.image} />

      { /* To use a div-tag with background image styling */ }
      <LazyLoadBackgroundImage width="100%" height="200px" defaultImage={this.defaultImage} image={this.image} />
    </>
  )
}
```

You can also pass options (`root`, `rootMargin`, `threshold`) to the IntersectionObserver constructor. See the [documentation for IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) for more info. Eg.
```tsx
<LazyLoadImage options={{ root: window }} height="200px" defaultImage={this.defaultImage} image={this.image} />
```

See: https://stackblitz.com/edit/react-lazy-load-image for examples

## Props

Both `LazyLoadImage` and `LazyLoadBackgroundImage` have the same props:

#### props

##### defaultImage

Type: `string`<br>

Path to the default image (placeholder) to show before the lazy loading

##### image

Type: `string`<br>
Default: `60`

Path to the image to be lazy loaded

##### errorImage?

Type: `string`<br>

Path to an image to show if the loading of `image` fails, will use `defaultImage` if not set

##### onLoaded?

Type: `() => void`<br>

Callback function after the image has been loaded

##### options?

Type: `ObserverOptions`<br>

IntersectionObserver options. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

##### style?

Type: `React.CSSProperties`<br>

Will be passed to the underlying div/img tag

##### height

Type: `() => void`<br>

The height of the image (can be set to `auto`)

##### width

Type: `() => void`<br>

The width of the image (can be set to `auto`)


## Requirement

The browser you are targeting needs to have support for `IntersectionObserver` and `WeakMap` or you need to import polyfill for them. You also need to use a bundler that understand es-modules (eg. webpack, rollup, parcel, fusebox, etc.)

## License

MIT
