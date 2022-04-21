import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    /*     document
      .querySelector(".popup_content_edit-avatar")
      .classList.add("popup_opened"); */
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    /*     document
      .querySelector(".popup_content_edit-profile")
      .classList.add("popup_opened"); */
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    /*     document
      .querySelector(".popup_content_add-card")
      .classList.add("popup_opened"); */
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick() {}

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        name={"edit-profile"}
        title={"Edit Profile"}
        isOpen={isEditProfilePopupOpen}
      />
      <PopupWithForm
        name={"edit-avatar"}
        title={"Change profile picture"}
        isOpen={isEditAvatarPopupOpen}
      />
      <PopupWithForm
        name={"add-card"}
        title={"New place"}
        isOpen={isAddPlacePopupOpen}
      />
      {/* <PopupWithForm name={"confirmation"} title={"Are you sure?"} /> */}
      <ImagePopup />
      <Footer />
      <template id="template-element">
        <article className="element">
          <img className="element__image" src="#" alt="" />
          <button
            className="element__button element__button_action_delete"
            type="button"
            aria-label="delete"
          ></button>
          <div className="element__wrap">
            <h2 className="element__title">Bald Mountains</h2>
            <div className="element_like-container">
              <button
                className="element__button element__button_action_like"
                type="button"
                aria-label="like"
              ></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
