import React from "react";

function PopupWithForm(props) {
  //props.name: "edit-profile"
  //props.title: "Edit profile"
  //
  //props.name: "edit-avatar"
  //props.title: "Change profile picture"
  //
  //props.name: "add-card"
  //props.title: "New place"
  //
  //props.name: "confirmation"
  //props.title: "Are you sure?"
  return (
    <section
      className={`popup popup_content_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div
        className={`popup__container popup__container_content_${props.name} popup__container_content_form`}
      >
        <button
          type="button"
          className="popup__button-close popup__button-close_content_form"
          aria-label="close"
          onClick={props.onClose}
        ></button>

        <form className="form popup__form" name={props.name} noValidate>
          <h2 className="form__heading">{props.title}</h2>
          {/* <input
            type="text"
            className="form__input form__input_type_name popup__input"
            name="name"
            id="name-input"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__error" id="name-input-error"></span>
          <input
            type="text"
            className="form__input form__input_type_job popup__input"
            name="job"
            id="job-input"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__error" id="job-input-error"></span> */}
          <button
            type="submit"
            className="form__button-submit popup__button"
            aria-label="save"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
