import React from 'react';

const Spinner = () => {
  return (
    <div className="mt-20 flex justify-center items-center h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'transparent', display: 'block' }}
        width="400px"
        height="400px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M12 50A38 38 0 0 0 88 50A38 41.5 0 0 1 12 50"
          fill="#ffffff"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.974576271186441s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51.75;360 50 51.75"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
};

export default Spinner;
