import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<TextField />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextField />);
  });

  it('should have class "text-field-comp"', () => {
    expect(wrapper.is('.text-field-comp')).toBe(true);
  });

  it('should call onUpdate prop with onChange value', () => {
    const onUpdateMock = jest.fn();
    const event = {
      target: { value: 'hello' }
    };

    wrapper.setProps({
      onUpdate: onUpdateMock
    });

    wrapper.find('input').simulate('change', event);
    expect(onUpdateMock).toBeCalledWith(event);
  });

  describe('with labelText props', () => {
    const labelProps = {
      labelText: 'A label'
    };

    it('should have a label with labelText text', () => {
      wrapper.setProps(labelProps);
      expect(wrapper.find('label').text()).toBe(labelProps.labelText);
    });
  });

  describe('without labelText props', () => {
    it('should not have a label', () => {
      expect(wrapper.find('label')).toHaveLength(0);
    });
  });
});
