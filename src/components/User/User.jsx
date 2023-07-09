import "./User.scss";
import { useState } from "react";

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user" onClick={() => setIsOpen(!isOpen)}>
      <div className="user__icon">
        <img src="/img/user-avatar.svg" alt="avatar" />
      </div>
      <div className={`user__arrow ${isOpen ? "opend" : ""}`}>
        <img src="/img/arrow.svg" alt="menu" />
      </div>
      {isOpen && (
        <div className="user__menu">
          <ul>
            <li>Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};
