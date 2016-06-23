var React = require('react');
var LoginUI = require('../components/LoginUI');
var describeWithDOM = require('enzyme').describeWithDOM;
var mount = require('enzyme').mount;
var shallow = require('enzyme').shallow;

describe('Login UI::Social App', () => {
  const props = { 
    username: 'Haider Mahmood',
    password: 'Password',
    onUpdateUserState: () => {},
    onUpdatePasswordState: () => {},
    onSubmitUser: () => {}
  };

  it('should render as a <div>', () => {
    const wrapper = shallow(<LoginUI  {...props} />);
    expect(wrapper.type()).to.eql('div');
  });  

  it('should have a login form', () => {
    const wrapper = shallow(<LoginUI  {...props} />);
    expect(wrapper.find('form').length).to.eql(1);
  }); 

  it('should handle form submit', () => {
    const wrapper = shallow(<LoginUI  {...props} />);
    expect(wrapper.find('input[type="email"]').prop('value')).to.eql(props.username);
  });

});
