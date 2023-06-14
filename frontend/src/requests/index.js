import axios from 'axios';

export default function authenticateUser(username) {
  return axios.post(
    'http://localhost:3001/authenticate',
    { username },
  );
};

export function getProjectId() {
  return axios.get(
    'http://localhost:3001/projectid'
  )
}
