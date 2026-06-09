export const HamburgerMenuIcon = ({ isOpen, className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={
        isOpen
          ? "M6 18 18 6M6 6l12 12"
          : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    />
  </svg>
);
