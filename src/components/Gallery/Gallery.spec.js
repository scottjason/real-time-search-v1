import React from 'react';
import { shallow, mount } from 'enzyme';
import {fetchByTerm} from '../../api'
import Gallery from './Gallery';
import Search from '../Search/Search';

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
  });

  const createShallowWrapper = () => {
    wrapper = shallow(<Gallery images={mockImages} />)
  };
  
  /**
  * High-Level Checks
  */
  test('it should exist', () => {
    expect(wrapper).toExist(true);
  });

  test('it should have correct name', () => {
    expect(wrapper.name()).toEqual('Gallery');
  });

  test('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  /**
  * Props
  */
  test('it should have images defined', () => {
    expect(wrapper.props().images).toBeDefined();
  });
  
  test('it should have an images array', () => {
    expect(wrapper.props().images).toBeInstanceOf(Array)
  });
  
  test('it should have three images', () => {
    expect(wrapper.props().images.length).toEqual(3)
  });

  /**
  * Search Component
  */
  test('it should should contain a <Search /> component', () => {
    expect(wrapper.contains(<Search />)).toEqual(true)
  });  
  
  test('it should should contain a form element', () => {
    expect(wrapper.find('form')).toExist(true)
  });
  
  test('it should should contain an input element', () => {
    expect(wrapper.find('input')).toExist(true)
  });

  test('search input should have right placeholder', () => {
    expect(wrapper.find('input').props().placeholder).toEqual('Search images...')
  });

});