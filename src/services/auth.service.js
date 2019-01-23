import { request } from './request';
import { url } from '../constants/url';

const signIn = async ({ login, password }) => {
  const options = {
    method: 'POST',
    ...request,
    body: JSON.stringify({ login, password })
  };

  let result;

  try {
    result = await fetch(`${url}/authenticate`, options).then(res => res.json());
  } catch (e) {
    console.log(e);
  }

  request.headers['x-access-token'] = 'hello';
  return result;
};

export const authService = {
  signIn
};