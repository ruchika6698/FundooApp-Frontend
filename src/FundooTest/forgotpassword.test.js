// import React from 'react';
// import { shallow} from 'enzyme';
// import ForgotPassword from '../components/forgotpassword';
// import '../setupTests'

// describe('Forgot Password Component', () => {
//   //testing rendering of login component
//     it('should render without throwing an error', () => {
//         expect(shallow(< ForgotPassword />).exists()).toBe(true)
//     })
//     //testing the email and password input existence
//     it('renders a email input', () => {
//         expect(shallow( < ForgotPassword /> ).find('#outlined-required').length).toEqual(1)
//       })
// })
// //     describe('Email input', () => {
// //   //testing email input for Fundoo notes
// //     it('should respond to change event and change the state of the Forgot Password Component', () => {
// //       const wrapper = shallow( < ForgotPassword /> );
// //       wrapper.find('#outlined-required').simulate('change', {
// //         target: {
// //           name: 'email',
// //           value: 'Diksha.Rane@gmail.com'
// //         }
// //       });
// //       expect(wrapper.state('email')).toEqual('Diksha.Rane@gmail.com');
// //     })
// //   })