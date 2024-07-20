import "./BlueButton.scss";

const BlueButton = ({ buttonText, buttonFunction }) => {
  return (
    <div className="blue-button" onClick={buttonFunction}>
      <p>{buttonText}</p>
    </div>
  );
};

export default BlueButton;
