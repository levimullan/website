import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./TextAccordian.css";
import { gsap } from "gsap";

const TextAccordian = ({ title, subs, elementsRef }) => {

  const [isExpanded, toggleDropDown] = useState(false);


  const handleClick = (e) => {
    console.log(e.currentTarget);
    const yPos = e.currentTarget.offsetTop;
    console.log(yPos);
    const adjustedYPos = yPos > 16 ? yPos - 12 : 0;
    const container = e.currentTarget.parentElement;
    const subs = container.querySelector(".subs");
    if (!subs) {
      console.log(adjustedYPos);
      gsap.to(".chevronPath", { y: adjustedYPos, ease: "back.inOut(1.7)" });
    } else {
      toggleDropDown(!isExpanded);
      const svg = container.querySelector(".icon-down");
      gsap.to(svg, {
        rotate: !isExpanded ? 180 : 0,
        duration: 0.5,
        ease: "back.inOut(1.7)",
      });
      gsap.to(subs, {
        height: !isExpanded ? "auto" : 0,
        duration: 0.5,
        ease: "back.inOut(1.7)",
      });
      gsap.to(".chevronPath", { y: adjustedYPos, ease: "back.inOut(1.7)" });
    }
  };

  return (
    <div>
      {subs ? (
        <p className="accordian-text-parent" onClick={(e) => handleClick(e)}>
          {title}
        </p>
      ) : (
          <p className="accordian-text" onClick={(e) => handleClick(e)}>
            {title}
          </p>
      )}
      {subs && (
        <div className="subs" style={{ height: 0 }}>
          {subs.map((item, index) => (
            <TextAccordian key={index} title={item.title} subs={item.submenu} />
          ))}
        </div>
      )}
    </div>
  );
};

TextAccordian.propTypes = {
  title: PropTypes.string.isRequired,
  subs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subs: PropTypes.array,
    }),
  ),
  initialExpanded: PropTypes.bool,
};

export default TextAccordian;
