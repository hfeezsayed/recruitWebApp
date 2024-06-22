import React from "react";

export const TemplateSvg = ({ COLOR }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.75 2.75V19.25H19.25V2.75H2.75ZM17.875 17.875H4.125V4.125H17.875V17.875Z"
        fill={COLOR}
      />
      <path d="M16.5 12.375H12.375V13.75H16.5V12.375Z" fill={COLOR} />
      <path
        d="M16.5 5.5H5.5V11H16.5V5.5ZM15.125 9.625H6.875V6.875H15.125V9.625Z"
        fill={COLOR}
      />
      <path
        d="M11 12.375H5.5V16.5H11V12.375ZM9.625 15.125H6.875V13.75H9.625V15.125Z"
        fill={COLOR}
      />
      <path d="M16.5 15.125H12.375V16.5H16.5V15.125Z" fill={COLOR} />
    </svg>
  );
};
