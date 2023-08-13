import React, { useState } from "react";
const Tabs = ({ tabs }) => {
  let [tabClick, setTabClick] = useState("");
  function handleClick(value) {
    setTabClick(value);
  }
  return (
    <div>
      <ul>
        {tabs.map((value) => (
          <li
            onClick={() => {
              handleClick(value);
            }}
          >
            {value.title}
          </li>
        ))}
      </ul>
      {tabClick && <p>This is content for {tabClick.content}</p>}
    </div>
  );
};
export default Tabs;
