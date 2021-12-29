import { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from '../reducer/AuthReducer';
import authApi from '../api/authApi';
import { message } from 'antd';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    isAuthentication: false,
    userData: null,
    isLoading: false,
  });
  useEffect(() => {
    addToken();
  }, []);

  const addToken = () => {
    if (localStorage.getItem('token-id')) {
      addToken(localStorage.getItem('token-id'));
      dispatch({
        ...state,
        isAuthentication: true,
        isLoading: false,
        userData: null,
      });
    } else {
      dispatch({
        ...state,
        isAuthentication: false,
        isLoading: false,
        userData: null,
      });
      addToken(null);
    }
  };
  const login = async (data) => {
    console.log('data', data);
    try {
      dispatch({
        type: 'beforeLogin',
        payload: {
          ...state,
          isLoading: true,
        },
      });
      const responseData = await authApi.login(data);
      message.success('Đăng nhập thành công');
      localStorage.setItem(
        'token-id',
        JSON.stringify(responseData.data.assessToken)
      );
      return responseData.data;
    } catch (error) {
      message.error('Không đăng nhập được');
    }
  };
  return (
    <AuthContext.Provider value={{ state, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
