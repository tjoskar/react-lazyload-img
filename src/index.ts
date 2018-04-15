import * as React from 'react'
import { Props } from './types'
import { isNull, registerImageToLazyLoad } from './lazyload'

export abstract class LazyLoad extends React.Component<Props> {
  ref!: Element | null

  componentDidMount() {
    if (isNull(this.ref)) {
      console.warn('The reference to the image is null, skipping the image')
      return
    }
    registerImageToLazyLoad(this.ref, this.props)
  }

  shouldComponentUpdate() {
    return false
  }

  abstract render()
}

export class LazyLoadImage extends LazyLoad {
  render() {
    return React.createElement('img', {
      ref: el => (this.ref = el),
      src: this.props.defaultImage
    })
  }
}

export class LazyLoadBackgroundImage extends LazyLoad {
  style = Object.assign({}, this.props.style, {
    backgroundImage: `url('${this.props.defaultImage}')`,
    height: this.props.height,
    width: this.props.width
  })

  render() {
    return React.createElement('div', { ref: el => (this.ref = el), style: this.style })
  }
}
