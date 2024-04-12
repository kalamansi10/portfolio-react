import { useEffect } from "react";

const useListAnimation = () => {
  useEffect(() => {
    const listItem: NodeListOf<HTMLElement> = document.querySelectorAll(".anim-list-item");
  
    listItem.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => item.classList.add("up-anim"), 100 * (index + 1));
    });    

    return () => {
      listItem.forEach((item: HTMLElement) => {
        item.classList.remove("up-anim");
      });
    };
  }, []);
};

export default useListAnimation;
