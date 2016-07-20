import React from "react";
import { expect } from "chai";
import { assert } from "chai";
import sinon from "sinon";
// import mocha-sinon from "mocha-sinon";
import { mount } from 'enzyme';
import Timer from '../components/Timer';

describe('Timer', () => {
  function playerCallback() { timer.setState({test: 'successful'}) }
  const timer = mount(<Timer activatePlayer={playerCallback}/>);

  it('displays a time in minutes and seconds', () => {
    timer.node.componentDidMount();
    timer.node.tick(1);
    const actual = timer.find('.timer').text();
    const length = 5;
    expect(actual).to.be.lengthOf(length);
  });

  it('should call activatePlayer when timer reaches 0', () => {
    timer.node.componentDidMount();
    for(var i = 0; i < 5; i++) {
      timer.node.tick();
    };
    expect(timer.state().test).to.equal('successful');
  });

});
