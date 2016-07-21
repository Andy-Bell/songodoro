import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import ClockControl from '../components/ClockControl';
import sinon from 'sinon';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

describe('ClockControl', () => {
  const main = mount(<ClockControl />);

  describe('Start Button', () => {

    it ('contains a div tag', () => {
      const actual = main.find('div');
      const expected = 1;
      expect(actual).to.be.length(expected);
    })

    it ('renders a button', () => {
      const actual = main.find('button');
      const expected = 3;
      expect(actual).to.be.length(expected);
    })

    it ('displays Start within the button', () => {
      const actual = main.find('div button#startButton').text();
      const expected = " - START - ";

      expect(actual).to.be.equal(expected);
    })
  });

  describe('Reset Button', () => {

    it ('contains a div tag', () => {
      const actual = main.find('div');
      const expected = 1;
      expect(actual).to.be.length(expected);
    })

    it ('renders a button', () => {
      const actual = main.find('button');
      const expected = 3;
      expect(actual).to.be.length(expected);
    })

    it ('displays Reset within the button', () => {
      const actual = main.find('div button#resetButton').first().text();
      const expected = " - RESET - ";

      expect(actual).to.be.equal(expected);
    })
  });

  describe('Pause Button', () => {

    it ('contains a div tag', () => {
      const actual = main.find('div');
      const expected = 1;
      expect(actual).to.be.length(expected);
    })

    it ('renders a button', () => {
      const actual = main.find('button');
      const expected = 3;
      expect(actual).to.be.length(expected);
    })

    it ('displays Reset within the button', () => {
      const actual = main.find('div button#pauseButton').first().text();
      const expected = " - PAUSE - ";

      expect(actual).to.be.equal(expected);
    })
  });


});
