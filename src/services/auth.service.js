import { request } from './request';
import { url } from '../constants/url';

const signIn = async ({ login, password }) => {
  const options = {
    method: 'POST',
    ...request,
    body: JSON.stringify({ login, password })
  };

  let status;

  const result = await fetch(`${url}/authenticate`, options).then(res => {
    status = res.status;
    return res.json();
  }).then(body => ({ ...body, status }));

  request.headers['x-access-token'] = result.token;
  return result;
};


const signUp = async ({ login, password, email }) => {
  const options = {
    method: 'POST',
    ...request,
    body: JSON.stringify({ login, password, email })
  };

  let status;

  return await fetch(`${url}/register`, options).then(res => {
    status = res.status;
    return res.json();
  }).then(body => ({ ...body, status }));

};

export const authService = {
  signIn,
  signUp
};