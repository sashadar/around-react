import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <footer className="footer">
        <p className="copyright">&copy; 2022 Around The U.S.</p>
      </footer>

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
