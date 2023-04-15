import { createContext, useReducer } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

export function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  function fetchDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({
        type: 'LOGIN',
        payload: user,
      });
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
