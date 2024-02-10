const apiUrl = 'https://localhost:7252';

const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${apiUrl}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getUsers;
