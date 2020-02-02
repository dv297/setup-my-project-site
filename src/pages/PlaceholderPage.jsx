import React from 'react';

const SetUpMyProjectIcon = () => (
  <svg
    className="fill-current h-10 w-8 mr-2"
    width="52"
    height="52"
    viewBox="-2 0 54 54"
    xmlns="http://www.w1.org/2000/svg"
  >
    <path d="M11.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
  </svg>
);

const PlaceholderPage = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-pink-800 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <SetUpMyProjectIcon />
        </div>
      </nav>
    </div>
  );
};

export default PlaceholderPage;
