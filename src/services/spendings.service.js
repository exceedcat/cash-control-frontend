import { request } from './request';
import { url } from '../constants/url';

const add = async ({ title, amount, date, userId }) => {
  const options = {
    method: 'POST',
    ...request,
    body: JSON.stringify({ title, amount, date })
  };

  let result;

  try {
    result = await fetch(`${url}/users/${userId}/spendings`, options).then(res => res.json());
  } catch (e) {
    console.log(e);
  }

  return result;
};

const edit = async ({ id, title, amount, date, userId }) => {
  const options = {
    method: 'PATCH',
    ...request,
    body: JSON.stringify({ title, amount, date })
  };

  let result;

  try {
    result = await fetch(`${url}/users/${userId}/spendings/${id}`, options).then(res => res.json());
  } catch (e) {
    console.log(e);
  }

  return result;
};

const remove = async ({ userId, id }) => {
  const options = {
    method: 'DELETE',
    ...request,
  };

  let result;

  try {
    result = await fetch(`${url}/users/${userId}/spendings/${id}`, options).then(res => res.json());
  } catch (e) {
    console.log(e);
  }

  return result;
};

export const spendingsService = {
  add,
  edit,
  remove
};
