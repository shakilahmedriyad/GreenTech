import cn from "classnames";
const CircleProgressBar = ({
  progress = 50,
  size = 100,
  strokeWidth = 10,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative ">
      <svg
        className={cn("transform relative -rotate-90", className)}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Gray color for background
          strokeWidth={strokeWidth}
        />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F1A645"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      {/* <p className="text-white text-xl absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[19%]">
        {progress}%
      </p> */}
    </div>
  );
};

export default CircleProgressBar;
