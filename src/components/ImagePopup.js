import React from "react";

function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
