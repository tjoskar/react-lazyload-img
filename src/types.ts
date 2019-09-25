export type IntersectionObserverEntryType = IntersectionObserverEntry & {
  isIntersecting: boolean
}

export type ObserverOptions = {
  root?: Element
  rootMargin?: string
  threshold?: number
}

type Props = {
  defaultImage: string
  image: string
  errorImage?: string
  onLoaded?: () => void
  options?: ObserverOptions
  style?: Object
  height?: number | string
  width?: number | string
}

type ImgProps = JSX.IntrinsicElements['img'] & Props
type DivProps = JSX.IntrinsicElements['div'] & Props

export type UnionProps = ImgProps | DivProps
