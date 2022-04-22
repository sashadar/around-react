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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

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
        onClose={closeAllPopups}
        uniqueContent={
          <>
            <input
              type="text"
              className="form__input form__input_type_name popup__input"
              name="name"
              id="name-input"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error" id="name-input-error"></span>
            <input
              type="text"
              className="form__input form__input_type_job popup__input"
              name="job"
              id="job-input"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error" id="job-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name={"edit-avatar"}
        title={"Change profile picture"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        uniqueContent={
          <>
            <input
              type="url"
              className="form__input form__input_type_link popup__input"
              placeholder="Image link"
              name="link"
              id="avatar-link-input"
              required
            />
            <span className="popup__error" id="avatar-link-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name={"add-card"}
        title={"New place"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        uniqueContent={
          <>
            <input
              type="text"
              className="form__input form__input_type_title popup__input"
              placeholder="Title"
              name="title"
              id="title-input"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="popup__error" id="title-input-error"></span>
            <input
              type="url"
              className="form__input form__input_type_link popup__input"
              placeholder="Image link"
              name="link"
              id="image-link-input"
              required
            />
            <span className="popup__error" id="image-link-input-error"></span>
          </>
        }
      />
      {/* <PopupWithForm name={"confirmation"} title={"Are you sure?"} /> */}
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;