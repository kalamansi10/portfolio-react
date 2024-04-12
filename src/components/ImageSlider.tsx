import { useRef } from "react";

interface ImageSliderProps {
  imageLinks: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageLinks }) => {
  const assetsPath: string = "/assets/";
  const images = useRef<HTMLDivElement | null>(null);
  const sliderPos = useRef<number>(0);

  function renderPreview() {
    return imageLinks.map((link: string) => (
        <img
          className="preview-img"
          src={assetsPath + link}
          alt={link.split("/").pop()}
        />
    ));
  }

  function slide(direction: number) {
    const newSliderPos = direction + sliderPos.current;
    if (newSliderPos > -1 && newSliderPos < imageLinks.length) {
      sliderPos.current = newSliderPos;
      images.current!.style.transform = `translateX(${
        sliderPos.current * -300
      }px)`;
    }
  }

  return (
    <div className="preview-slider">
      <div className="images-container" ref={images}>
        {renderPreview()}
      </div>
      <span className="left-slider" onClick={() => slide(-1)}>
        {"<"}
      </span>
      <span className="right-slider" onClick={() => slide(1)}>
        {">"}
      </span>
    </div>
  );
};

export default ImageSlider;
