import { useEffect } from "react";

const useListAnimation = () => {
  useEffect(() => {
    const skillList: NodeListOf<HTMLElement> = document.querySelectorAll(".anim-list-item");
  
    skillList.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => item.classList.add("up-anim"), 100 * (index + 1));
    });    

    return () => {
      skillList.forEach((item: HTMLElement) => {
        item.classList.remove("up-anim");
      });
    };
  }, []);
};

export default useListAnimation;
