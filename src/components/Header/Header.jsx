import "./Header.scss";
import { User } from "../User/User";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        Awesome Kanban Board
      </h1>
      <User />
    </div>
  );
};
