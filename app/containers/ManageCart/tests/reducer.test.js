import { fromJS } from 'immutable';
import manageCartReducer from '../reducer';

describe('manageCartReducer', () => {
  it('returns the initial state', () => {
    expect(manageCartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
