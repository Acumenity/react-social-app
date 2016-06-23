var reducer = require('../reducers/reducers');
var ActionConstants = require('../utils/ActionConstants');

describe('Reducers::Social App', () => {
  const getInitialState = () => {
    return []
  };

  const getAppState = () => {
    return [{"username":"Test","password":"password","post":[]}];
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should add user if not present', () => {
  	const user = {"username":"Test","password":"password","post":[]};
    const action = { type: ActionConstants.ADD_USER, user: user };    
    const expected = getAppState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should add 2nd user if not present', () => {
  	const user = {"username":"ABC","password":"password1","post":[]};

    const action = { type: ActionConstants.ADD_USER, user: user };    

    const expected = [{"username":"Test","password":"password","post":[]},
    				 {"username":"ABC","password":"password1","post":[]}];

    const initialState = [{"username":"Test","password":"password","post":[]}];

    expect(reducer(initialState, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object    
  });

  it('should not add user if already present', () => {
  	const user = {"username":"Test","password":"password","post":[]};

    const action = { type: ActionConstants.ADD_USER, user: user };    

    const expected = getAppState();

    const initialState = getAppState();

    expect(reducer(initialState, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });  
});
