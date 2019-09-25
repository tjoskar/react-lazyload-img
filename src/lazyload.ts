import { ObserverOptions, IntersectionObserverEntryType, UnionProps } from './types'

const defaultObserverOptions: ObserverOptions = {
  root: undefined,
  rootMargin: undefined,
  threshold: undefined
}

const observerKeys: ObserverOptions[] = []
const observers = new WeakMap<ObserverOptions, IntersectionObserver>()
const images = new WeakMap<Element, { observer: IntersectionObserver; options: UnionProps }>()

export const call = fn => fn && fn()
export const isNull = <T>(obj: T | null): obj is null => obj === null
const createIntersectionObserver = (options: ObserverOptions) =>
  new IntersectionObserver(loadingCallback, options)

function loadingCallback(entrys: IntersectionObserverEntryType[]) {
  entrys.filter(entry => entry.isIntersecting).forEach(entry => {
    const target = entry.target as HTMLImageElement | HTMLDivElement
    const metaData = images.get(target)
    if (!metaData) {
      console.warn('Could not find meta data for image')
      return
    }
    metaData.observer.unobserve(target)
    loadImage(metaData.options.image)
      .catch(() => {
        if (metaData.options.errorImage) {
          return loadImage(metaData.options.errorImage)
        }
        return Promise.resolve(metaData.options.defaultImage)
      })
      .catch(() => metaData.options.defaultImage)
      .then((imagePath: string) => {
        setImage(target as HTMLImageElement, imagePath)
        addCssClassName(target, 'lazy-loaded')
        call(metaData.options.onLoaded)
      })
  })
}

export function setImage(element: HTMLImageElement | HTMLDivElement, imagePath: string) {
  if (isImageElement(element)) {
    element.src = imagePath
  } else {
    element.style.backgroundImage = `url('${imagePath}')`
  }
}

export function loadImage(imagePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = imagePath
    img.onload = () => resolve(imagePath)
    img.onerror = err => reject(err)
  })
}

export function isImageElement(
  element: HTMLImageElement | HTMLDivElement
): element is HTMLImageElement {
  return element.nodeName.toLowerCase() === 'img'
}

export function addCssClassName(
  element: HTMLImageElement | HTMLDivElement,
  cssClassName: string
) {
  if (!element.className.includes(cssClassName)) {
    element.className += ` ${cssClassName}`
  }
}

export function registerImageToLazyLoad(element: Element, metadata: UnionProps) {
  const options = metadata.options || defaultObserverOptions
  let observerKey = observerKeys.find(
    oKey =>
      oKey.root === options.root &&
      oKey.rootMargin === options.rootMargin &&
      oKey.threshold === options.threshold
  )
  if (!observerKey) {
    observerKey = options
    observerKeys.push(observerKey)
  }
  let observer = observers.get(observerKey)
  if (!observer) {
    observer = createIntersectionObserver(observerKey)
    observers.set(observerKey, observer)
  }
  images.set(element, {
    observer,
    options: metadata
  })
  observer.observe(element)
}
