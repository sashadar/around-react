import React from "react";
import avatarPic from "../images/jacq-cousteau-avatar-pic.png";

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img className="avatar" src={avatarPic} alt="Avatar" />
        </div>

        <div className="profile-info">
          <h1 className="profile-info__name"> </h1>
          <button
            className="profile-info__button-edit"
            type="button"
            aria-label="edit"
          ></button>
          <p className="profile-info__job"></p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="add"
        ></button>
      </section>
      <section className="popup popup_content_edit-profile">
        <div className="popup__container popup__container_content_edit-profile popup__container_content_form">
          <button
            type="button"
            className="popup__button-close popup__button-close_content_form"
            aria-label="close"
          ></button>

          <form
            className="form popup__form"
            name="form-edit-profile"
            novalidate
          >
            <h2 className="form__heading">Edit profile</h2>
            <input
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
            <span className="popup__error" id="job-input-error"></span>
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
      <section className="popup popup_content_edit-avatar">
        <div className="popup__container popup__container_content_edit-avatar popup__container_content_form">
          <button
            type="button"
            className="popup__button-close popup__button-close_content_form"
            aria-label="close"
          ></button>

          <form className="form popup__form" name="form-edit-avatar" novalidate>
            <h2 className="form__heading">Change profile picture</h2>
            <input
              type="url"
              className="form__input form__input_type_link popup__input"
              placeholder="Image link"
              name="link"
              id="avatar-link-input"
              required
            />
            <span className="popup__error" id="avatar-link-input-error"></span>
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
      <section className="popup popup_content_add-card">
        <div className="popup__container popup__container_content_add-card popup__container_content_form">
          <button
            type="button"
            className="popup__button-close popup__button-close_content_form"
            aria-label="close"
          ></button>

          <form className="form popup__form" name="form-add-card" novalidate>
            <h2 className="form__heading">New place</h2>
            <input
              type="text"
              className="form__input form__input_type_title popup__input"
              placeholder="Title"
              name="title"
              id="title-input"
              minlength="1"
              maxlength="30"
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
            <button
              type="submit"
              className="form__button-submit popup__button"
              aria-label="create"
            >
              Create
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_content_image">
        <div className="popup__container popup__container_content_image">
          <button
            type="button"
            className="popup__button-close popup__button-close_content_image"
            aria-label="close-popup-image"
          ></button>
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__image-title"></p>
        </div>
      </section>
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
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
