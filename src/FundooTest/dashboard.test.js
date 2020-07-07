import React from 'react';
import { shallow} from 'enzyme';
import Notestitle from '../Components/notesTitle';
import '../setupTests'

describe('Notes Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Notestitle />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Notestitle /> ).find('#title').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( < Notestitle /> ).find('#description').length).toEqual(1)
      })
})
describe('Title input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#title').simulate('change', {
        target: {
          name: 'title',
          value: 'Good Morning'
        }
      });
      expect(wrapper.state('title')).toEqual('Good Morning');
    })
  })
  describe('Description input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#description')
        .simulate('change', {
          target: {
            name: 'description',
            value: 'How are you'
          }
        });
      expect(wrapper.state('description')).toEqual('How are you');
    })
  })

//Negative Test case for title
  describe('Notes Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Notestitle />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Notestitle /> ).find('#title').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( < Notestitle /> ).find('#description').length).toEqual(1)
      })
})
describe('Title input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#title').simulate('change', {
        target: {
          name: 'title',
          value: 'Hiiiiiiiiiiiiiii'
        }
      });
      expect(wrapper.state('title')).not.toEqual('');
    })
  })
  describe('Description input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#description')
        .simulate('change', {
          target: {
            name: 'description',
            value: 'Hey'
          }
        });
      expect(wrapper.state('description')).toEqual('Hey');
    })
  })

//Negative Test case for description
   describe('Notes Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Notestitle />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Notestitle /> ).find('#title').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( < Notestitle /> ).find('#description').length).toEqual(1)
      })
})
describe('Title input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#title').simulate('change', {
        target: {
          name: 'title',
          value: 'Hiii how are you?'
        }
      });
      expect(wrapper.state('title')).toEqual('Hiii how are you?');
    })
  })
  describe('Description input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Notestitle Component', () => {
      const wrapper = shallow( < Notestitle /> );
      wrapper.find('#description')
        .simulate('change', {
          target: {
            name: 'description',
            value: 'Heydfcvdvfgbgbg'
          }
        });
      expect(wrapper.state('description')).not.toEqual('Hey');
    })
  })