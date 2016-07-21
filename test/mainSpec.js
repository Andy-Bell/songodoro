import React from "react"
import { expect } from "chai"
import { mount } from 'enzyme'
import Main from '../components/Main'
import { trackList } from '../tracks'

describe('Main', () => {

   it('Initial state contains tracklist', () => {
     const main = mount(<Main />)
     expect(main.node.state.tracks).to.equal(trackList)
   })

   it('#selectTrack should select and remove a track from tracks', () => {
     const main = mount(<Main />)
     const chosenTrack = main.node.selectTrack()
     expect(main.node.state.tracks).not.to.include(chosenTrack)
   })

   it('does not render spotifyPlayer when current track is null', () => {
     const main = mount(<Main />)
     const actual = main.find('.spotify-player').node
     expect(actual).to.be.undefined
   })

   it('renders spotifyPlayer when current track is not null', () => {
     const main = mount(<Main />)
     const chosenTrack = main.node.selectTrack()
     const actual = main.find('.spotify-player').node
     expect(actual).not.to.be.undefined
   })

 })
