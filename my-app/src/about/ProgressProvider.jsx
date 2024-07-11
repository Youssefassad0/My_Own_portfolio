import React from "react";

const ProgressProvider = ({ valueStart, valueEnd, interval = 5000, children }) => {
  const [value, setValue] = React.useState(valueStart);

  React.useEffect(() => {
    const animate = () => {
      setValue(valueStart);
      setTimeout(() => {
        setValue(valueEnd);
      }, 100); // Delay to ensure the animation restarts
    };

    animate();
    const intervalId = setInterval(animate, interval);

    return () => clearInterval(intervalId);
  }, [valueStart, valueEnd, interval]);

  return children(value);
};

export default ProgressProvider;
