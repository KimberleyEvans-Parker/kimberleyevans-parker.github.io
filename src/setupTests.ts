// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import "@testing-library/jest-dom/extend-expect"
import '@testing-library/jest-dom/vitest'
import { cleanup } from "@testing-library/react"

beforeAll(() => {
  class IntersectionObserver {
    constructor() {}
    observe() { return null }
    unobserve() { return null }
    disconnect() { return null }
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  })

  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  })
})

afterEach(() => {
  cleanup()
})
