const Alert = ({ message, onClose }) => {
  // Split the message into an array of lines based on the newline character (\n)
  const messageLines = message.split("\n");

  return (
    <div className="custom-alert-container">
      <div className="custom-alert">
        {/* Use map to render each line as a separate paragraph */}
        {messageLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;
