import React from "react";
import logo from "../images/logo/header-logo.svg";
import avatarPic from "../images/jacq-cousteau-avatar-pic.png";

function App() {
  return (
    <div class="page">
      <header class="header">
        <img class="header__logo" src={logo} alt="Around the U.S. logo" />
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__avatar-overlay">
            <img class="avatar" src={avatarPic} alt="Avatar" />
          </div>

          <div class="profile-info">
            <h1 class="profile-info__name"> </h1>
            <button
              class="profile-info__button-edit"
              type="button"
              aria-label="edit"
            ></button>
            <p class="profile-info__job"></p>
          </div>
          <button
            class="profile__button-add"
            type="button"
            aria-label="add"
          ></button>
        </section>
        <section class="popup popup_content_edit-profile">
          <div class="popup__container popup__container_content_edit-profile popup__container_content_form">
            <button
              type="button"
              class="popup__button-close popup__button-close_content_form"
              aria-label="close"
            ></button>

            <form class="form popup__form" name="form-edit-profile" novalidate>
              <h2 class="form__heading">Edit profile</h2>
              <input
                type="text"
                class="form__input form__input_type_name popup__input"
                name="name"
                id="name-input"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup__error" id="name-input-error"></span>
              <input
                type="text"
                class="form__input form__input_type_job popup__input"
                name="job"
                id="job-input"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="popup__error" id="job-input-error"></span>
              <button
                type="submit"
                class="form__button-submit popup__button"
                aria-label="save"
              >
                Save
              </button>
            </form>
          </div>
        </section>
        <section class="popup popup_content_edit-avatar">
          <div class="popup__container popup__container_content_edit-avatar popup__container_content_form">
            <button
              type="button"
              class="popup__button-close popup__button-close_content_form"
              aria-label="close"
            ></button>

            <form class="form popup__form" name="form-edit-avatar" novalidate>
              <h2 class="form__heading">Change profile picture</h2>
              <input
                type="url"
                class="form__input form__input_type_link popup__input"
                placeholder="Image link"
                name="link"
                id="avatar-link-input"
                required
              />
              <span class="popup__error" id="avatar-link-input-error"></span>
              <button
                type="submit"
                class="form__button-submit popup__button"
                aria-label="save"
              >
                Save
              </button>
            </form>
          </div>
        </section>
        <section class="popup popup_content_add-card">
          <div class="popup__container popup__container_content_add-card popup__container_content_form">
            <button
              type="button"
              class="popup__button-close popup__button-close_content_form"
              aria-label="close"
            ></button>

            <form class="form popup__form" name="form-add-card" novalidate>
              <h2 class="form__heading">New place</h2>
              <input
                type="text"
                class="form__input form__input_type_title popup__input"
                placeholder="Title"
                name="title"
                id="title-input"
                minlength="1"
                maxlength="30"
                required
              />
              <span class="popup__error" id="title-input-error"></span>
              <input
                type="url"
                class="form__input form__input_type_link popup__input"
                placeholder="Image link"
                name="link"
                id="image-link-input"
                required
              />
              <span class="popup__error" id="image-link-input-error"></span>
              <button
                type="submit"
                class="form__button-submit popup__button"
                aria-label="create"
              >
                Create
              </button>
            </form>
          </div>
        </section>
        <section class="popup popup_content_image">
          <div class="popup__container popup__container_content_image">
            <button
              type="button"
              class="popup__button-close popup__button-close_content_image"
              aria-label="close-popup-image"
            ></button>
            <img class="popup__image" src="#" alt="#" />
            <p class="popup__image-title"></p>
          </div>
        </section>
        <section class="popup popup_content_confirmation">
          <div class="popup__container popup__container_content_confirmation popup__container_content_form">
            <button
              type="button"
              class="popup__button-close popup__button-close_content_form"
              aria-label="close"
            ></button>

            <form class="form popup__form" name="form-confirmation" novalidate>
              <h2 class="form__heading">Are you sure?</h2>
              <button
                type="submit"
                class="form__button-submit popup__button"
                aria-label="save"
              >
                Yes
              </button>
            </form>
          </div>
        </section>
        <section class="elements"></section>
      </main>
      <footer class="footer">
        <p class="copyright">&copy; 2022 Around The U.S.</p>
      </footer>

      <template id="template-element">
        <article class="element">
          <img class="element__image" src="#" alt="" />
          <button
            class="element__button element__button_action_delete"
            type="button"
            aria-label="delete"
          ></button>
          <div class="element__wrap">
            <h2 class="element__title">Bald Mountains</h2>
            <div class="element_like-container">
              <button
                class="element__button element__button_action_like"
                type="button"
                aria-label="like"
              ></button>
              <p class="element__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
