import "./ModalWindow.scss";
import React from "react";

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="backdrop" data-modal>
      <div className="modal-window">
        <button data-modal-close className="close__btn" onClick={onClose}>
          <svg className="close__icon" width="11" height="11">
            <use href="./images/symbol-defs.svg#icon-close"></use>
          </svg>
        </button>

        <p className="modal-window__title">
          Leave us your details and we will call you back!
        </p>
        <form className="modal-window__form" action="#">
          <div className="form-group">
            <label for="name" className="form-group__label">
              Name
            </label>
            <input
              className="form-group__input"
              type="text"
              id="name"
              name="name"
            />
            <svg className="form-group__icon" width="18" height="18">
              <use href="./images/symbol-defs.svg#icon-person"></use>
            </svg>
          </div>

          <div className="form-group">
            <label for="tel" className="form-group__label">
              Phone
            </label>
            <input
              className="form-group__input"
              type="tel"
              id="tel"
              name="phone"
            />
            <svg className="form-group__icon" width="18" height="18">
              <use href="./images/symbol-defs.svg#icon-phone"></use>
            </svg>
          </div>

          <div className="form-group">
            <label for="email" className="form-group__label">
              E-mail
            </label>
            <input
              className="form-group__input"
              type="email"
              id="email"
              name="email"
            />
            <svg className="form-group__icon" width="18" height="18">
              <use href="./images/symbol-defs.svg#icon-email2"></use>
            </svg>
          </div>

          <div className="form-group form-group__feedback">
            <label for="feedback" className="form-group__label">
              Comment
            </label>
            <textarea
              className="form-group__textarea"
              name="feedback"
              id="feedback"
              placeholder="Ведите текст"
            ></textarea>
          </div>

          <div>
            <input
              className="form-group__input form-group__checkbox visually-hidden"
              type="checkbox"
              name="policy"
              id="policy"
            />
            <label className="form-group__policy" for="policy">
              I want to receive e-mails and accept{" "}
              <a className="policy-conditions" href="/">
                terms and conditions
              </a>
            </label>
          </div>

          <button className="form-group__btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
