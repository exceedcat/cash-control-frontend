import { request } from './request';

const signIn = async ({ login, password }) => {
  const options = {
    ...request,
  };

  let result;

  try {
    result = await fetch('', options).then(res => res.json());
  } catch (e) {
    console.log(e);
  }
  
  request.headers['x-access-token'] = 'hello';
  return result;
};

export const authService = {
  signIn
};