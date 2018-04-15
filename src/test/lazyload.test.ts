import { spy } from 'simple-spy'
import { call } from '../lazyload'

describe('call', () => {
  test('Should not throw if function is not defind', () => {
    // Arrange
    const fn = undefined

    // Act and assert
    expect(() => call(fn)).not.toThrow()
  })

  test('Should call function', () => {
    // Arrange
    const fn = spy()

    // Act
    call(fn)

    // Assert
    expect(fn.callCount).toBe(1)
  })
})
