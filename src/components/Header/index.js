import React from "react";
import { connect } from "react-redux";
import "./style.css";

const Header = ({ history }) => {
  return (
    <header className="Header">
      <div className="content-container">
        <div className="Header__content">header</div>
      </div>
    </header>
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

export { Header, categories };

export default connect(mapStateToProps)(Header);
