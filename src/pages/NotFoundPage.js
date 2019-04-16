import React from "react";

const style = {
  margin: "3rem auto"
};

const NotFoundPage = ({ history }) => {
  const onGoToHome = () => {
    history.push("/");
  };
  return (
    <div className="content-container">
      <div style={style}>
        Page Not Found -{" "}
        <button className="Button--link" onClick={onGoToHome}>
          Go home
        </button>
      </div>
    </div>
  );
};

export { NotFoundPage };
