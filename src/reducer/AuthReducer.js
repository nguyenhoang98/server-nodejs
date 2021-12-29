export const AuthReducer = (state, action) => {
  const {
    type,
    payload: { isAuthentication, isLoading, userData },
  } = action;

  if (type === 'beforeLogin') {
    return { ...state, isAuthentication, isLoading, userData };
  }
  return state;
};
