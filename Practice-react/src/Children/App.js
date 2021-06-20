function FancyBorder({ children }) {
  return <div>{children}</div>;
}

function WelcomeDialog() {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">Welcomeeeeee</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export default WelcomeDialog;
