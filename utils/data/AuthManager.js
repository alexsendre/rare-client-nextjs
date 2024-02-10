const apiUrl = 'https://localhost:7252';

export const loginUser = (user) => fetch(`${apiUrl}/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    username: user.username,
    password: user.password,
  }),
}).then((res) => res.json());

export const registerUser = (newUser) => fetch(`${apiUrl}/register`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(newUser),
}).then((res) => res.json());
