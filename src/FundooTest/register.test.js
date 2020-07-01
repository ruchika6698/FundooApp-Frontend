import React from 'react';
import { shallow} from 'enzyme';
import Register from '../components/register';
import '../setupTests'

describe('Registration Component', () => {
  //testing rendering of registration component
    it('should render without throwing an error', () => {
        expect(shallow( < Register /> )
                .exists())
            .toBe(true)
    })
//testing existence of firstname and lastname
    it('renders a firstName input', () => {
        expect(shallow( < Register /> ).find('#firstName').length).toEqual(1)
    })
    it('renders a lastName input', () => {
        expect(shallow( < Register /> ).find('#lastName').length).toEqual(1)
    })
    it('renders a Email input', () => {
        expect(shallow( < Register /> ).find('#outlined-required').length).toEqual(1)
    })
    it('renders a Password input', () => {
        expect(shallow( < Register /> ).find('#outlined-adornment-password').length).toEqual(1)
    })
    it('renders a Service input', () => {
        expect(shallow( < Register /> ).find('#service').length).toEqual(1)
    })
    describe('firstName input', () => {
        //testing given input
        it('should respond to change event and change the state of the Registration Component', () => {
             const wrapper = shallow( < Register /> );
            wrapper.find('#firstName').simulate('change', {
                target: {
                    name: 'firstname',
                    value: 'Rajesh'
                }
            });
            expect(wrapper.state('firstname')).toEqual('Rajesh');
        })
    })
    describe('lastName input', () => {
        //testing given input
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register /> );
            wrapper.find('#lastName').simulate('change', {
                target: {
                    name: 'lastName',
                    value: 'Jagtap'
                }
            });
            expect(wrapper.state('lastName')).toEqual('Jagtap');
        })
    })
    describe('Email input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register /> );
            wrapper.find('#outlined-required').simulate('change', {
                target: {
                    name: 'email',
                    value: 'Rajesh.Jagtap12@gmail.com'
                }
            });
            expect(wrapper.state('email')).toEqual('Rajesh.Jagtap12@gmail.com');
        })
    })
    describe('Password input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register /> );
            wrapper.find('#outlined-adornment-password')
                .simulate('change', {
                    target: {
                        name: 'password',
                        value: 'Rajesh@1234'
                    }
                });
            expect(wrapper.state('password')).toEqual('Rajesh@1234');
        })
    })
})