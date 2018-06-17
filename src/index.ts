import { Component, createElement, DetailedReactHTMLElement } from 'react'
import { Props } from './types'
import { isNull, registerImageToLazyLoad } from './lazyload'

abstract class LazyLoad extends Component<Props> {
  ref!: Element | null

  componentDidMount() {
    if (isNull(this.ref)) {
      console.warn('The reference to the image is null, skipping the image')
      return
    }
    registerImageToLazyLoad(this.ref, this.props)
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.image !== prevProps.image && this.ref) {
      registerImageToLazyLoad(this.ref, this.props)
    }
  }

  abstract render()
}

export class LazyLoadImage extends LazyLoad {
  style = Object.assign({}, this.props.style, {
    height: this.props.height,
    width: this.props.width
  })

  render() {
    return createElement('img', {
      ref: el => (this.ref = el),
      src: this.props.defaultImage,
      style: this.style
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
    return createElement(
      'div',
      { ref: el => (this.ref = el), style: this.style },
      this.props.children
    )
  }
}

export { DetailedReactHTMLElement }
