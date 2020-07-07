import React from 'react';
import { shallow} from 'enzyme';
import ForgotPassword from '../components/forgotpassword';
import '../setupTests'

describe('forgetpassword Component', () => {

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow( < ForgotPassword />).exists()).toBe(true)
    })
})

describe('Email input', () => {
  
        it('should respond to change event and change the state of the Register Component', () => {
         
         const wrapper = shallow( < ForgotPassword />);
         wrapper.find('#outlined-required').simulate('change', {target: {name: 'email', value: 'Diksha.Rane@gmail.com'}});
         
        expect(wrapper.state('email')).toEqual('Diksha.Rane@gmail.com');
        })
       })