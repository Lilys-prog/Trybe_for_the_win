const API_URL = 'https://api.github.com/users/';

const getUserData = (userName) => {
  return fetch(`${API_URL}${userName}`);
};
// 1h - T37 tarde

export getUserData;