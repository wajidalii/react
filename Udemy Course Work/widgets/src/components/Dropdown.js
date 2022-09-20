import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, options, selected, onSelectedChange})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const onBodyClick  =(event) => {
        if (ref.current.contains(event.target)) {
            return;
        }
        setOpen(false);
      };
    useEffect(() => {
        document.body.addEventListener(
          "click",
          onBodyClick,
          { capture: true }
        );
        return()=>{
            document.body.removeEventListener('click', onBodyClick, {capture:true})
        };
      }, []);


    const renderedOptions = options.map((option)=>{
        if (option.value===selected.value) {
            return null;
        }
        return(
            <div className="item" onClick={()=>onSelectedChange(option)} key={option.value}>
                {option.label}
            </div>
        );
    })
return (
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="ui label">{label}</label>
            <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open?'visible active':''}`}>
                <i className="ui dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open?'visible transition':''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
        
    </div>
);
}

export default Dropdown;

/**
 * useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);
 */

  /**
   * useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
   */