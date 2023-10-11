export const Card = ({ children, className}) => {
  return <div className={`bg-white rounded p-4 text-black ${className}`}>{children}</div>;
};
