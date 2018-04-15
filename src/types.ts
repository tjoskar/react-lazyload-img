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
  height: number | string
  width: number | string
}
