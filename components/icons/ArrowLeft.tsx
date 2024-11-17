import React from "react";

interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  width: number | string;
  height: number | string;
  className?: string; // optional className for CSS styling
  style?: React.CSSProperties; // optional inline styles
}

export default function ArrowLeft({
  width,
  height,
  className,
  style,
  ...props
}: ArrowLeftProps) {
  return (
    <div className={className} style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width={width}
        height={height}
        viewBox="0 0 100 100"
        {...props}
      >
        <path
          d="M51.129,82.867 L52.187,81.809 C52.889,81.107 52.889,79.97 52.187,79.268 L25.464,52.545 L81.74,52.545 C82.732,52.545 83.536,51.741 83.536,50.749 L83.536,49.251 C83.536,48.259 82.732,47.455 81.74,47.455 L25.464,47.455 L52.187,20.732 C52.889,20.03 52.889,18.893 52.187,18.191 L51.129,17.133 C50.427,16.431 49.289,16.431 48.588,17.133 L16.991,48.73 C16.289,49.431 16.289,50.569 16.991,51.27 L48.588,82.867 C49.289,83.569 50.427,83.569 51.129,82.867 z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}
