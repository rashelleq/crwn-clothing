import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils.js';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils.js';

//the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
//Provider allows any of its children to access the values in its usestate
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null); for something this simple,
  //useState is good. This is just to learn Reducers
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  //const {currentUser} = state - this is above already
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*

const userReducer = (state, action) => {
  return {
    currentUser: 
  }
}





*/
