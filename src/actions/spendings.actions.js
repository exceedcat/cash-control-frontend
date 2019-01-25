import { store } from '../reducers/store';
import { spendingsService } from '../services/spendings.service';

export const SPENDINGS_ADD_REQUEST = 'SPENDINGS_ADD_REQUEST';
export const SPENDINGS_ADD_SUCCESS = 'SPENDINGS_ADD_SUCCESS';
export const SPENDINGS_ADD_FAILURE = 'SPENDINGS_ADD_FAILURE';

export const SPENDINGS_EDIT_REQUEST = 'SPENDINGS_EDIT_REQUEST';
export const SPENDINGS_EDIT_SUCCESS = 'SPENDINGS_EDIT_SUCCESS';
export const SPENDINGS_EDIT_FAILURE = 'SPENDINGS_EDIT_FAILURE';

export const SPENDINGS_REMOVE_REQUEST = 'SPENDINGS_REMOVE_REQUEST';
export const SPENDINGS_REMOVE_SUCCESS = 'SPENDINGS_REMOVE_SUCCESS';
export const SPENDINGS_REMOVE_FAILURE = 'SPENDINGS_REMOVE_FAILURE';

const add = ({ title, amount, date, history }) => {
  const { id } = store.getState().user;

  return async (dispatch) => {
    dispatch(request());

    try {
      const result = await spendingsService.add({
        title, amount, date, userId: id
      });

      dispatch(success(result));
      history.push('/');
    }
    catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return { type: SPENDINGS_ADD_REQUEST };
  }

  function success(payload) {
    return { type: SPENDINGS_ADD_SUCCESS, payload };
  }

  function failure() {
    return { type: SPENDINGS_ADD_FAILURE };
  }
};

const edit = ({ id, title, amount, date }) => {

};

const remove = ({ id }) => {

};

export const spendingsActions = {
  add,
  edit,
  remove
};