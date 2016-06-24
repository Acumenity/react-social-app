var React = require('react');
var PostUI = require('../components/PostUI');
var describeWithDOM = require('enzyme').describeWithDOM;
var mount = require('enzyme').mount;
var shallow = require('enzyme').shallow;

describe('Post UI::Social App', () => {
  const props = { 
    username: 'Haider Mahmood',
    password: 'Password',
    onUpdateUserState: () => {},
    onUpdatePasswordState: () => {},
    onSubmitUser: () => {}
  };

  it('should render as a <div>', () => {
    const wrapper = shallow(<PostUI  {...props} />);
    expect(wrapper.type()).to.eql('div');
  });  


});
