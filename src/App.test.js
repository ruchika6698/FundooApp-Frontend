import React from 'react';
import App from './App';
import { shallow} from 'enzyme';
import Login from './Components/login';
import Register from './Components/register';
import './setupTests'

describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Login />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Login /> ).find('#outlined-required').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( < Login /> ).find('#outlined-adornment-password').length).toEqual(1)
      })
})
describe('Email input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-required').simulate('change', {
        target: {
          name: 'email',
          value: 'Diksha.Rane@gmail.com'
        }
      });
      expect(wrapper.state('email')).toEqual('Diksha.Rane@gmail.com');
    })
  })
  describe('Password input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-adornment-password')
        .simulate('change', {
          target: {
            name: 'password',
            value: 'Diksha@123'
          }
        });
      expect(wrapper.state('password')).toEqual('Diksha@123');
    })
  })


// describe('Register Component', () => {
//     it('should render without throwing an error', () => {
//         expect(shallow(< Register />).exists()).toBe(true)
//     })
//     it('renders a email input', () => {
//         expect(shallow(< Register />).find('#firstName').length).toEqual(1)
//     })
//     it('renders a password input', () => {
//         expect(shallow(< Register />).find('#lastName').length).toEqual(1)
//     })
//     it('renders a password input', () => {
//         expect(shallow(< Register />).find('#email').length).toEqual(1)
//     })
//     it('renders a password input', () => {
//         expect(shallow(< Register />).find('#password').length).toEqual(1)
//     })
//     it('renders a password input', () => {
//         expect(shallow(< Register />).find('#service').length).toEqual(1)
//     })
//     describe('First Name input', () => {
//         it('should respond to change event and change the state of the Register Component', () => {
//             const wrapper = shallow(< Register />);
//             wrapper.find('#firstName').simulate('change', {
//                 target: {
//                     name: '#firstName',
//                     value: 'Sakshi'
//                 }
//             });
//             expect(wrapper.state('firstName')).toEqual('Sakshi');
//         })
//     })
// describe('Last Name input', () => {
//         it('should respond to change event and change the state of the Register Component', () => {
//             const wrapper = shallow(<Register />);
//             wrapper.find('#lastName')
//                 .simulate('change', {
//                     target: {
//                         name: 'lastName',
//                         value: 'Patil'
//                     }
//                 });
//             expect(wrapper.state('lastName')).toEqual('Patil');
//         })
//     })
// describe('Email input', () => {
//         it('should respond to change event and change the state of the Register Component', () => {
//             const wrapper = shallow(< Register />);
//             wrapper.find('#email').simulate('change', {
//                 target: {
//                     name: 'email',
//                     value: 'abcdef123@gmail.com'
//                 }
//             });
//             expect(wrapper.state('email')).toEqual('abcdef123@gmail.com');
//         })
//     })
// describe('Password input', () => {
//         it('should respond to change event and change the state of the Register Component', () => {
//             const wrapper = shallow(<Register />);
//             wrapper.find('#password')
//                 .simulate('change', {
//                     target: {
//                         name: 'password',
//                         value: 'abcd@12345'
//                     }
//                 });
//             expect(wrapper.state('password')).toEqual('abcd@12345');
//         })
//     })
// describe('Service input', () => {
//         it('should respond to change event and change the state of the Register Component', () => {
//             const wrapper = shallow(<Register />);
//             wrapper.find('#service')
//                 .simulate('change', {
//                     target: {
//                         name: 'service',
//                         value: 'basic'
//                     }
//                 });
//             expect(wrapper.state('service')).toEqual('basic');
//         })
//     })