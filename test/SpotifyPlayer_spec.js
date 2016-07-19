import React from "react"
import { expect } from "chai"
import { mount } from 'enzyme'
import SpotifyPlayer from '../components/Main'

describe('SpotifyPlayer', () => {
  const main = mount(<SpotifyPlayer />);

  it('contains h1 tag', () => {
    const actual = main.find('iframe');
    const expected = 1;
    expect(actual).to.be.length(expected);
  })

});
