"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration
}) => {
  const svgRef = useRef(null);
  const uid = React.useId().replace(/:/g, "");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: 0.5, cy: 0.5 });

  const viewBoxHeight = 100;
  const viewBoxWidth = 320;
  const fontSize = Math.min(52, (viewBoxWidth - 20) / (text.length * 0.55));
  const textStyle = { fontSize, fontWeight: 700 };

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: cxPercentage / 100,
        cy: cyPercentage / 100,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height={128}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none overflow-visible">
      <defs>
        <linearGradient
          id={`textGradient-${uid}`}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="25%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="75%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#7c3aed" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id={`revealMask-${uid}`}
          gradientUnits="objectBoundingBox"
          r="35%"
          initial={{ cx: 0.5, cy: 0.5 }}
          animate={maskPosition}
          transition={{ duration: 0, ease: "linear" }}>
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`textMask-${uid}`}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#revealMask-${uid})`} />
        </mask>
      </defs>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white font-[helvetica] font-bold"
        style={textStyle}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}>
        {text}
      </motion.text>
      {hovered && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke={`url(#textGradient-${uid})`}
          strokeWidth="0.3"
          mask={`url(#textMask-${uid})`}
          className="fill-transparent font-[helvetica] font-bold pointer-events-none"
          style={textStyle}>
          {text}
        </text>
      )}
    </svg>
  );
};
