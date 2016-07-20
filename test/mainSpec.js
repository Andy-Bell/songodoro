import React from "react"
import { expect } from "chai"
import { mount } from 'enzyme'
import Main from '../components/Main'

describe('Matt does not write tests', () => {
  it('4 * 10', () => {
    const result = 4 * 10
    expect(result).to.equal(40)
  })

})

describe('Main', () => {
  const main = mount(<Main hello="Hello World" />)

  it('contains html Hello World', () => {
    const actual = main.find('h1').text()
    const expected = 'Hello World'
    expect(actual).to.be.equal(expected)
  })
})
