import "./Button.css";

const Button = ({ handlerClick }) => {
  return (
    <button className="switch__btn" onClick={handlerClick}>
      Probar mi suerte
    </button>
  );
};

export default Button;
