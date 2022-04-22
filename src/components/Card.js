function Card(props) {
  return (
    <article className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <button
        className="element__button element__button_action_delete"
        type="button"
        aria-label="delete"
      ></button>
      <div className="element__wrap">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element_like-container">
          <button
            className="element__button element__button_action_like"
            type="button"
            aria-label="like"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
