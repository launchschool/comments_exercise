import React from 'react';
import { shallow } from 'enzyme';

import NewCommentForm from '../components/NewCommentForm';

describe('NewCommentForm', () => {
  it('changes the state when author input is changed', () => {
    let wrapper = shallow(<NewCommentForm />);
    let input = wrapper.find("[name='author']");

    input.simulate('change', {target: {name: 'author', value: 'Naveed'}});
    expect(wrapper.state().author).toEqual('Naveed');
  });

  it('changes the state when author input is changed', () => {
    let func = jest.fn();

    let wrapper = shallow(<NewCommentForm onSubmit={func}/>);

    wrapper.simulate('submit', {preventDefault: () => {}});
    
    expect(func.mock.calls.length).toEqual(1);
  });
});
