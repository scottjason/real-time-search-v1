import React from 'react';
import { shallow, mount } from 'enzyme';
import GalleryContainer from './GalleryContainer';

describe('GalleryContainer', () => {

  test('it should be correct element', () => {
    let wrapper = shallow(<GalleryContainer />);
    expect(wrapper).toMatchElement(<GalleryContainer />);
  });
});
