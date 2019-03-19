import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the manageCart state domain
 */

const selectManageCartDomain = state => state.get('manageCart', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ManageCart
 */

const makeSelectManageCart = () =>
  createSelector(selectManageCartDomain, substate => substate.toJS());

export default makeSelectManageCart;
export { selectManageCartDomain };
