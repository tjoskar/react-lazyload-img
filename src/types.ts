export type IntersectionObserverEntryType = IntersectionObserverEntry & {
  isIntersecting: boolean
}

export type ObserverOptions = {
  root?: Element
  rootMargin?: string
  threshold?: number
}

export type Props = {
  defaultImage: string
  image: string
  errorImage?: string
  onLoaded?: () => void
  options?: ObserverOptions
  style?: Object
}

export type ImgProps = JSX.IntrinsicElements['img'] & Props & {
  height: number | string
  width: number | string
}

export type DivProps = JSX.IntrinsicElements['div'] & Props & {
  height?: number | string
  width?: number | string
}
