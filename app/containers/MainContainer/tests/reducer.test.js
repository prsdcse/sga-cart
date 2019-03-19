import { fromJS } from 'immutable';
import mainContainerReducer from '../reducer';

describe('mainContainerReducer', () => {
  it('returns the initial state', () => {
    expect(mainContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
