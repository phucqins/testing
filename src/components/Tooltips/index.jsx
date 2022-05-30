import { useState } from "react";
import style from "./style.module.scss";

const Tooltips = (props) => {
  const { children, content } = props;
  const [isVisible, setVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const styles = () => {
    return [
      style["tooltips-content"],
      isVisible ? style["tooltips-visible"] : style["tooltips-invisible"],
    ].join(" ");
  };

  const handleFadeout = () => {
    setVisible(false);
  };

  const handleFadein = () => {
    setHovered(true);
    setVisible(true);
  };

  const handleRemove = () => {
    if (!isVisible) return setHovered(false);
  };

  return (
    <div
      id={style["tooltips-container"]}
      onMouseEnter={handleFadein}
      onMouseLeave={handleFadeout}
    >
      {children}
      {isHovered && (
        <div className={styles()} onAnimationEnd={handleRemove}>
          {content}
        </div>
      )}
    </div>
  );
};
export default Tooltips;
