import { useEffect } from "react";
import useListAnimation from "../hooks/useListAnimation";

const ReachOut: React.FC = () => {

  useEffect(() => {
    const contactInfo: NodeListOf<HTMLElement> = document.querySelectorAll(".contact-info");

    contactInfo.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => item.classList.add("steam-anim"), 1000 * (index + 1));
    });    

    return () => {
      contactInfo.forEach((item: HTMLElement) => {
        item.classList.remove("up-anim");
      });
    };
  }, [])

  useListAnimation()

  return (
    <div className="contact-page">
      <h2>Reach Out To Me</h2>
      <a className="contact-info anim-list-item" href="mailto: jjum1337@outlook.com" >
        <img src="/assets/envelope-icon.svg" alt="Email" />
        <div>
          <h3>Email</h3>
          <br />
          <p>jjum1337@outlook.com</p>
        </div>
      </a>
      <a className="contact-info anim-list-item" href="https://github.com/kalamansi10">
        <img src="/assets/github-icon.svg" alt="GitHub" />
        <div>
          <h3>GitHub</h3>
          <br />
          <p>GitHub</p>
        </div>
      </a>
      <a className="contact-info anim-list-item" href="https://www.linkedin.com/in/jjumadiao">
        <img src="/assets/linkedin-square-icon.svg" alt="LinkedIn" />
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
