import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<TextField />', () => {
  const props = {
    labelText: 'A label'
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextField {...props} />);
  });

  it('should have class "text-field-comp"', () => {
    expect(wrapper.is('.text-field-comp')).toBe(true);
  });

  it('should have a label with labelText text', () => {
    expect(wrapper.find('label').text()).toBe(props.labelText);
  });
});
