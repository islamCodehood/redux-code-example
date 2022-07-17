export const login = (username) => {
	return {
		type: 'LOGIN',
		payload: {
      username: username,
      isLoggedIn: true
    }
	};
};

export const logout = () => {
	return { 
    type: 'LOGOUT', 
    payload: {
      username: "",
      isLoggedIn: false
    }
  };
};
