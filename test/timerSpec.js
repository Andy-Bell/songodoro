import React from "react";
import { expect,
         assert } from "chai";
import sinon from "sinon";
import { mount } from 'enzyme';
import Timer from '../components/Timer';

describe('Timer', () => {
  function playerCallback() { timer.setState({test: 'successful'}) }

  const timer = mount(<Timer activatePlayer={playerCallback} deactivatePlayer={playerCallback} displayTimer={true}/>);

  it('displays a time in minutes and seconds', () => {
    timer.node.startFunc();
    timer.node.tick(1);
    const actual = timer.find('.timer span').first().text();
    const length = 5;
    expect(actual).to.be.lengthOf(length);
  });

  it('should call activatePlayer when timer reaches 0', () => {
    timer.node.startFunc();
    for(var i = 0; i < 9; i++) {
      timer.node.tick();
    };
    expect(timer.state().test).to.equal('successful');
  });

});
