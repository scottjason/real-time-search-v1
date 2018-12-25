import React from 'react';
import { shallow, mount } from 'enzyme';
import {fetchByTerm} from '../../api'
import Gallery from './Gallery';
import Search from '../Search/Search';
import Image from '../Image/Image';

/**
 *
 * Unit Testing
 *
*/

describe('Gallery', () => {

  let wrapper, images, componentInstance;
  let mockImages = [
    {imageUrl: 'https://picsum.photos/500'},
    {imageUrl: 'https://picsum.photos/500'},
    {imageUrl: 'https://picsum.photos/500'},
  ];

  beforeEach(() => {
    wrapper = mount(<Gallery images={mockImages} />)
    componentInstance = wrapper.childAt(0);
  });

  const createShallowWrapper = () => {
    wrapper = shallow(<Gallery />)
    componentInstance = wrapper.childAt(0);
  };
  
  /**
  * High-Level Checks
  */
  test('it should have correct name', () => {
    expect(wrapper.name()).toEqual('Gallery');
  });

  test('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });  

  /**
  * Element Existence Checks
  */
  test('it should should contain a <Search /> component', () => {
    expect(wrapper.contains(<Search />)).toEqual(true)
  });  
  test('it should should contain an <Image /> component', () => {
    expect(wrapper.contains(<Search />)).toEqual(true)
  });
});