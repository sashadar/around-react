import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then(([userData, initialCardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCardsData);
      })
      .catch((err) => {
        console.log(`Error:     ${err}`);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={props.onEditAvatarClick}
        >
          <img className="avatar" src={userAvatar} alt="Avatar" />
        </div>

        <div className="profile-info">
          <h1 className="profile-info__name">{userName} </h1>
          <button
            className="profile-info__button-edit"
            type="button"
            aria-label="edit"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile-info__job">{userDescription}</p>
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
        {cards.map((cardData) => (
          <Card
            key={cardData._id}
            card={cardData}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
