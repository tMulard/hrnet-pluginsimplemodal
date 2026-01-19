import React from "react";

interface ModaleProps {
  isHidden: boolean;
  isHiddenCross: boolean;
  children: Object;
  handleClick: Function (params:isHidden) {
    return (!isHidden);
  };
}
const Modale: React.FC<ModaleProps> = ({ isHidden, isHiddenCross, children, handleClick }) => {
  return (
    <div className={isHidden ? "modale hidden" : "modale"}>
        {!isHiddenCross && (
            <button onClick={handleClick} className="closeBtn"></button>
        )}
        {children}
    </div>
  )
};
export default Modale;