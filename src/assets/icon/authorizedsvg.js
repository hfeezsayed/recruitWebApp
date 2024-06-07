import React from "react";

export const AuthorizedSvg = ({ COLOR }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 8.25C6 7.95453 6.0582 7.66194 6.17127 7.38896C6.28434 7.11598 6.45008 6.86794 6.65901 6.65901C6.86794 6.45008 7.11598 6.28434 7.38896 6.17127C7.66194 6.0582 7.95453 6 8.25 6C8.54547 6 8.83806 6.0582 9.11104 6.17127C9.38402 6.28434 9.63206 6.45008 9.84099 6.65901C10.0499 6.86794 10.2157 7.11598 10.3287 7.38896C10.4418 7.66194 10.5 7.95453 10.5 8.25C10.5 8.84674 10.2629 9.41903 9.84099 9.84099C9.41903 10.2629 8.84674 10.5 8.25 10.5C7.65326 10.5 7.08097 10.2629 6.65901 9.84099C6.23705 9.41903 6 8.84674 6 8.25ZM8.25 4.5C7.25544 4.5 6.30161 4.89509 5.59835 5.59835C4.89509 6.30161 4.5 7.25544 4.5 8.25C4.5 9.24456 4.89509 10.1984 5.59835 10.9017C6.30161 11.6049 7.25544 12 8.25 12C9.24456 12 10.1984 11.6049 10.9017 10.9017C11.6049 10.1984 12 9.24456 12 8.25C12 7.25544 11.6049 6.30161 10.9017 5.59835C10.1984 4.89509 9.24456 4.5 8.25 4.5ZM15.75 9C15.75 8.60218 15.908 8.22064 16.1893 7.93934C16.4706 7.65804 16.8522 7.5 17.25 7.5C17.6478 7.5 18.0294 7.65804 18.3107 7.93934C18.592 8.22064 18.75 8.60218 18.75 9C18.75 9.39782 18.592 9.77936 18.3107 10.0607C18.0294 10.342 17.6478 10.5 17.25 10.5C16.8522 10.5 16.4706 10.342 16.1893 10.0607C15.908 9.77936 15.75 9.39782 15.75 9ZM17.25 6C16.4544 6 15.6913 6.31607 15.1287 6.87868C14.5661 7.44129 14.25 8.20435 14.25 9C14.25 9.79565 14.5661 10.5587 15.1287 11.1213C15.6913 11.6839 16.4544 12 17.25 12C18.0456 12 18.8087 11.6839 19.3713 11.1213C19.9339 10.5587 20.25 9.79565 20.25 9C20.25 8.20435 19.9339 7.44129 19.3713 6.87868C18.8087 6.31607 18.0456 6 17.25 6ZM2.25 15.75C2.25 15.1533 2.48705 14.581 2.90901 14.159C3.33097 13.7371 3.90326 13.5 4.5 13.5H12C12.5967 13.5 13.169 13.7371 13.591 14.159C14.0129 14.581 14.25 15.1533 14.25 15.75V15.918C14.2497 15.9868 14.2447 16.0554 14.235 16.1235C14.1497 16.8507 13.8791 17.5439 13.449 18.1365C12.6285 19.269 11.0685 20.25 8.25 20.25C5.4315 20.25 3.873 19.269 3.0495 18.1365C2.61996 17.5437 2.34984 16.8506 2.265 16.1235C2.25765 16.0552 2.25265 15.9867 2.25 15.918V15.75ZM3.75 15.885V15.8955L3.756 15.969C3.8139 16.4334 3.98831 16.8756 4.263 17.2545C4.752 17.9265 5.817 18.75 8.25 18.75C10.683 18.75 11.748 17.9265 12.237 17.2545C12.5117 16.8756 12.6861 16.4334 12.744 15.969L12.75 15.894V15.75C12.75 15.5511 12.671 15.3603 12.5303 15.2197C12.3897 15.079 12.1989 15 12 15H4.5C4.30109 15 4.11032 15.079 3.96967 15.2197C3.82902 15.3603 3.75 15.5511 3.75 15.75V15.885ZM17.25 18.75C16.368 18.75 15.645 18.615 15.06 18.393C15.2982 17.9515 15.4802 17.4818 15.6015 16.995C16.0035 17.1465 16.5375 17.25 17.25 17.25C18.9285 17.25 19.617 16.677 19.92 16.251C20.0985 16.0033 20.211 15.7142 20.247 15.411L20.25 15.369C20.2484 15.2706 20.2082 15.1767 20.1381 15.1077C20.0679 15.0387 19.9734 15 19.875 15H15.675C15.5638 14.4562 15.3332 13.9439 15 13.5H19.875C20.91 13.5 21.75 14.34 21.75 15.375V15.4005C21.749 15.4552 21.745 15.5098 21.738 15.564C21.6761 16.1266 21.4705 16.6638 21.141 17.124C20.508 18.0105 19.3215 18.75 17.25 18.75Z"
        fill={COLOR}
      />
    </svg>
  );
};
