/*
It is an action creater
*/

const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};

export default setCurrentUser;