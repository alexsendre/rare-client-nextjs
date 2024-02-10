import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import getUsers from '../utils/data/userData';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((u) => (
          <tr key={`user-${u.id}`}>
            <th scope="row">{u.id}</th>
            <td>{u.firstName} {u.lastName}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
