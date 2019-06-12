import React from 'react';
import { shallow } from 'enzyme';

import ParentComment from '../components/ParentComment';

describe('ParentComment', () => {
  const comment = {
    "id": "7c4ad745-4171-4ca8-bca0-54f083aba32d",
    "author": "Louisa Leuschke",
    "body": "Odit eligendi quasi deleniti ipsa cumque iusto ullam.",
    "postedAt": 1532722744454,
    "replies_count": 4,
    "replies": [
      {
        "id": "249bec9c-fac7-43ec-95a6-3f81c8057d8d",
        "comment_id": "7c4ad745-4171-4ca8-bca0-54f083aba32d",
        "author": "Cydney Robel",
        "body": "Ratione quibusdam sed doloremque expedita fugit similique et aut.",
        "postedAt": 1532707761582
      },
      {
        "id": "249bec9c-asdfadsf-43ec-95a6-3f81c8057d8d",
        "comment_id": "7c4ad745-4171-4ca8-bca0-54f083aba32d",
        "author": "Cydney",
        "body": "Ratione asdf quibusdam sed doloremque expedita fugit similique et aut.",
        "postedAt": 1532707761582
      },
    ]
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParentComment comment={comment}/>);
  });

  it('has a class of parent-comment', () => {
    expect(wrapper.find('.parent-comment').length).toEqual(1);
  });

  it('renders replies for comment', () => {
    expect(wrapper.find('.replies Comment').length).toEqual(comment.replies.length);
  });

  it('calls the onShowMoreClick callback when show more button is clicked', () => {
    // mock.calls = [['a'], ['abc']]
    const func = jest.fn();

    let wrapper = shallow(
      <ParentComment
        comment={comment}
        onShowMoreClick={func}
      />
    );

    wrapper.find('.show-more').simulate('click');
    expect(func.mock.calls.length).toEqual(1);
    expect(func.mock.calls[0][0]).toEqual(comment.id);
  });





});
