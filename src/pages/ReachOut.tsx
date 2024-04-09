const ReachOut: React.FC = () => {
  return (
    <div className="contact-page">
      <h2>Reach Out To Me</h2>
      <a className="contact-info" href="mailto: jjum1337@outlook.com" >
        <img src="./src/assets/envelope-icon.svg" alt="Email" />
        <div>
          <h3>Email</h3>
          <br />
          <p>jjum1337@outlook.com</p>
        </div>
      </a>
      <a className="contact-info" href="https://github.com/kalamansi10">
        <img src="./src/assets/github-icon.svg" alt="GitHub" />
        <div>
          <h3>GitHub</h3>
          <br />
          <p>GitHub</p>
        </div>
      </a>
      <a className="contact-info" href="https://www.linkedin.com/in/jjumadiao">
        <img src="./src/assets/linkedin-square-icon.svg" alt="LinkedIn" />
        <div>
          <h3>LinkedIn</h3>
          <br />
          <p>LinkedIn</p>
        </div>
      </a>
    </div>
  );
};

export default ReachOut;
