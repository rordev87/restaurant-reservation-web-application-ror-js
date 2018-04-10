import {connect} from 'react-redux';
import {
  createReservation,
  updateReservation,
  deleteReservation,
  receiveReservationErrors
} from '../../actions/reservation_actions';

import ReservationForm from './reservation_form';


const mapStateToProps = ({session, errors}) => ({
  currentUser: session.currentUser,
  // restaurants: restaurants,
  errors: errors.reservation
});

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  clearErrors: () => dispatch(receiveReservationErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
