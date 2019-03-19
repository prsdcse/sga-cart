/**
 *
 * ManageCart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectManageCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getUserInfoAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ManageCart extends React.Component {
  constructor(props) {
    super(props);

    const { getUserInfo } = props;
    getUserInfo('U10000');
  }
  
  render() {
    const { manageCart } = this.props;
    const { users } = manageCart;
    const { name, address1, country, phone } = users;
    return (
      <div className="container-fluid">
        <Row>
          <Col lg={12} md={12}>
            <Card body className="mt-4">
              <CardTitle>Saga Cart</CardTitle>
              <CardText>
                <span>{name},</span>
                <span> {address1}, {country}</span>
                <span>{phone}</span>
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

ManageCart.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manageCart: makeSelectManageCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: userId => dispatch(getUserInfoAction(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'manageCart', reducer });
const withSaga = injectSaga({ key: 'manageCart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageCart);
