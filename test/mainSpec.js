import React from "react"
import { expect } from "chai"
import { mount } from 'enzyme'
import Main from '../components/Main'
import { trackList } from '../tracks'

describe('test', () => {
  it('4 * 10', () => {
    const result = 4 * 10
    expect(result).to.equal(40)
  })

})

describe('Main', () => {

  const main = mount(<Main />)

  it('Initial state contains tracklist', () => {
    expect(main.node.state.tracks).to.equal(trackList)
  })

  it('#selectTrack should select and remove a track from tracks', () => {
    const chosenTrack = main.node.selectTrack()
    expect(main.node.state.tracks).not.to.include(chosenTrack)
  })

})
