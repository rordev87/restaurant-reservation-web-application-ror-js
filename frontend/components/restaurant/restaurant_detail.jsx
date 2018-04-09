import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import
  ReservationFormContainer
from '../reservation/reservation_form_container';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleRestaurant(this.props.match.params.restaurantId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.restaurantId !== nextProps.match.params.restaurantId) {
  //     this.props.requestSingleRestaurant(nextProps.match.params.restaurantId);
  //   }
  // }

  scrollTo(el) {
   return () => {
     el.scrollIntoView();
   };
 }


  render() {
    if (!this.props.restaurant) return null;

    const restaurant = this.props.restaurant;

    return (
      <div className='restaurant-showpage'>
        <div className='restaurant-showpage-header'>
          <div className='showpage-header-left'>
            showpage-header-image
          </div>
          <section>
            <h1>{restaurant.name}</h1>
            <div>Rating</div>
            <span>{restaurant.cuisine} </span>
            <span>| {restaurant.city} </span>
            <span>| Star: {restaurant.star}</span>
          </section>
        </div>
        <hr />

        <div className='restaurant-showpage-main-container'>
          <div className='restaurant-showpage-nav-link'>
            <nav className='nav-link-wrapper'>
              <a className='page-nav-link' onClick={this.scrollTo(this.reservationSection)}>Reservation</a>
              <br />
              <a className='page-nav-link' onClick={this.scrollTo(this.aboutSection)}>About</a>
              <br />
              <a className='page-nav-link' onClick={this.scrollTo(this.reviewsSection)}>Reviews</a>
              <br />
            </nav>
          </div>
          <hr />

          <div className='restaurant-showpage-main'>
            <div
              name='reservation'
              ref={ el => this.reservationSection = el }
              className='restaurant-showpage-reservation'>
              <Route
                path={`/restaurants/:restaurantId`}
                component={ReservationFormContainer}
              />
            </div>
            <hr />

            <div ref={ el => this.aboutSection = el } className='restaurant-showpage-content-about' id='about'>
                <span className='restaurant-showpage-content-header'>
                  <h2>About {this.props.restaurant.name}</h2>
                </span>
                <section className='restaurant-showpage-content-about-text'>
                  <p>Restaurant Detail</p><span>   rating</span>
                  <p>{restaurant.cusine}</p>
                  <p>{restaurant.phoneNumber}</p>
                  <p>Hours of operation:{restaurant.openTime} - {restaurant.closeTime}</p>
                  <p>Address {restaurant.address},{restaurant.city} {restaurant.state} {restaurant.zipcode}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                  <p>{restaurant.description}</p>
                </section>
            </div>
            <br />

            <div ref={ el => this.reviewsSection = el } className='restaurant-showpage-reviews' name='reviews'>
              Reviews Coming Soon
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RestaurantDetail);
