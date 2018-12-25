import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from './Image';

/**
 *
 * Unit Testing <Image/>
 *
*/

describe('Image', () => {

  let wrapper;
  let mockImages = [
    {id: 0, imageUrl: 'https://picsum.photos/500'},
  ];

  beforeAll(() => {
    wrapper = mount(<Image item={mockImages[0]} />)
  });

  /**
  * High-Level Checks
  */
  test('it should exist', () => {
    expect(wrapper).toExist(true);
  });

  test('it should have correct name', () => {
    expect(wrapper.name()).toEqual('Image');
  });

  test('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  /**
  * Props
  */
  test('it should have item prop defined', () => {
    expect(wrapper.props().item).toBeDefined();
  });
  
  test('item should have imageUrl attr defined', () => {
    expect(wrapper.props().item.imageUrl).toBeDefined();
  });

});