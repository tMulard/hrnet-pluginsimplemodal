import React from "react";
import "./Modale.css";

interface ModaleProps {
  isHidden: boolean;
  isHiddenCross: boolean;
  children: React.ReactNode;
  handleClick: () => void;
}
const Modale: React.FC<ModaleProps> = ({ isHidden, isHiddenCross, children, handleClick }) => {
  return (
    <div className={isHidden ? "modale hidden" : "modale"}>
        {!isHiddenCross && (
            <button onClick={handleClick} className="closeBtn"></button>
        )}
        {children}
    </div>
    );
};
export default Modale;