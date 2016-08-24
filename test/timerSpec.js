import React from "react";
import { expect,
         assert } from "chai";
import sinon from "sinon";
import { mount } from 'enzyme';
import Timer from '../components/Timer';

describe('Timer', () => {
  function playerCallback() { timer.setState({test: 'successful'}) }

  const timer = mount(<Timer activatePlayer={playerCallback} deactivatePlayer={playerCallback} displayTimer={true}/>);

  it('displays a time in minutes and seconds if passed {displayTimer: true}', () => {
    timer.node.startFunc();
    timer.node.tick(1);
    const actual = timer.find('.numbers').first().text();
    const actual_node = timer.find('.numbers').first().node
    const length = 5;
    expect(actual).to.be.lengthOf(length);
    expect(actual_node).not.to.be.undefined
  });

  it('does not display timer if handed {displayTimer: false} as props', () => {
    const timer = mount(<Timer activatePlayer={playerCallback} deactivatePlayer={playerCallback} displayTimer={false}/>);
    timer.node.startFunc();
    timer.node.tick(1);
    const actual_node = timer.find('.numbers').first().node
    expect(actual_node).to.be.undefined
  })
});
