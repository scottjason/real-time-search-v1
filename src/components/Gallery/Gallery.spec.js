import React from 'react';
import { shallow, mount } from 'enzyme';
import Gallery from './Gallery';
import Search from '../Search/Search';
import Image from '../Image/Image';

/**
 *
 * Unit Testing <Gallery/>
 *
*/

describe('Gallery', () => {

  let wrapper;
  let mockImages = [
    {id: 0, imageUrl: 'https://picsum.photos/500'},
    {id: 1, imageUrl: 'https://picsum.photos/500'},
    {id: 2, imageUrl: 'https://picsum.photos/500'},
  ];

  beforeAll(() => {
    let childA = shallow(<Search />)
    let childB = shallow(<Image item={mockImages[0]} />)
    wrapper = mount(
       <Gallery images={mockImages}>
         {childA}
         {childB}
       </Gallery>
      )
  });

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

  test('it should should have two children', () => {
    expect(wrapper.props().children.length).toEqual(2)
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