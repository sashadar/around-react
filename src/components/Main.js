import React from "react";

/* import api from "../utils/api"; */
import Card from "./Card";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={props.onEditAvatarClick}
        >
          <img className="avatar" src={currentUser.avatar} alt="Avatar" />
        </div>

        <div className="profile-info">
          <h1 className="profile-info__name">{currentUser.name} </h1>
          <button
            className="profile-info__button-edit"
            type="button"
            aria-label="edit"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile-info__job">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="add"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      {/* 
      <section className="popup popup_content_confirmation">
        <div className="popup__container popup__container_content_confirmation popup__container_content_form">
          <button
            type="button"
            className="popup__button-close popup__button-close_content_form"
            aria-label="close"
          ></button>

          <form
            className="form popup__form"
            name="form-confirmation"
            novalidate
          >
            <h2 className="form__heading">Are you sure?</h2>
            <button
              type="submit"
              className="form__button-submit popup__button"
              aria-label="save"
            >
              Yes
            </button>
          </form>
        </div>
      </section> */}
      <section className="elements">
        {props.cards.map((cardData) => (
          <Card
            key={cardData._id}
            card={cardData}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
