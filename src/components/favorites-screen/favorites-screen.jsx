import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import {propTypeOffer} from "../../check-prop-types";

const FavoritesScreen = (props) => {
  const {history, offers} = props;

  const options = {
    articleClassName: `favorites__card`,
    wrapperClassName: `favorites__image-wrapper`,
    infoClassName: `favorites__card-info`,
    image: {
      imgWidth: 150,
      imgHeight: 110,
    }
  };

  const favorites = offers.filter((offer) => offer.isFavorite);
  const cities = [...new Set(favorites.map((offer) => offer.city))];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {<OffersList
                      offers={favorites.filter((item) => item.city === city)}
                      history={history}
                      options={options}
                    />}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
};

export default FavoritesScreen;
