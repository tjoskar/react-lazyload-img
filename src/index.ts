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
  render() {
    const {style: incomingStyle, height, width, image, errorImage, options, onLoaded, defaultImage: src, ...props} = this.props

    const style = {
      ...incomingStyle,
      height,
      width
    }

    return createElement(
      'img',
      {...props, ref: el => (this.ref = el), style, src},
      this.props.children
    )
  }
}

export class LazyLoadBackgroundImage extends LazyLoad {
  render() {
    const {style: incomingStyle, height, width, image, errorImage, options, onLoaded, defaultImage, ...props} = this.props

    const style = {
      ...incomingStyle,
      backgroundImage: `url('${defaultImage}')`,
      height,
      width
    }

    return createElement(
      'div',
      {...props, ref: el => (this.ref = el), style},
      this.props.children
    )
  }
}

export { DetailedReactHTMLElement }
