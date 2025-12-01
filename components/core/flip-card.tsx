"use client"

import { useEffect, useState } from "react"
import type { FlipCardProps } from "../../lib/types"

export default function FlipCard({
  value,
  prevValue,
  animationDuration = 500,
  cardWidth = "w-24",
  cardHeight = "h-32",
  fontSize = 90,
  textColor = "#e8e8e8",
  backgroundColor = "#1a1a1a",
}: FlipCardProps) {
  const [isFlipping, setIsFlipping] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    if (value !== prevValue && value !== currentValue) {
      setIsFlipping(true)
      setDisplayValue(currentValue)

      const timer = setTimeout(() => {
        setCurrentValue(value)
        setIsFlipping(false)
      }, animationDuration)

      return () => clearTimeout(timer)
    }
  }, [value, prevValue, currentValue, animationDuration])

  return (
    <div className={`relative ${cardWidth} ${cardHeight}`} style={{ perspective: "1200px" }}>
      <style>{`
        @keyframes flipDown {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: rotateX(-90deg);
            opacity: 0.3;
          }
        }

        @keyframes flipUp {
          0% {
            transform: rotateX(90deg);
            opacity: 0.3;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }

        .flip-card-front {
          backface-visibility: hidden;
        }

        .flip-card-back {
          backface-visibility: hidden;
        }

        .flip-split-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(135deg, ${backgroundColor} 0%, #2d2d2d 50%, ${backgroundColor} 100%);
          border: 2px solid #0a0a0a;
          border-radius: 0.5rem 0.5rem 0 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
          transform-origin: bottom center;
          animation: ${isFlipping ? `flipDown ${animationDuration}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards` : "none"};
        }

        .flip-split-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(135deg, ${backgroundColor} 0%, #2d2d2d 50%, ${backgroundColor} 100%);
          border: 2px solid #0a0a0a;
          border-radius: 0 0 0.5rem 0.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
          transform-origin: top center;
          animation: ${isFlipping ? `flipUp ${animationDuration}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards` : "none"};
        }

        .middle-divider {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #000 0%, #444 50%, #000 100%);
          z-index: 20;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05);
          transform: translateY(-50%);
        }

        .flip-card-svg {
          width: 100%;
          height: 100%;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] border-2 border-[#0a0a0a] rounded-lg shadow-xl"
        style={{ backfaceVisibility: "hidden" }}
      >
        <svg className="flip-card-svg" viewBox="0 0 120 160">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={textColor} stopOpacity="0.95" />
              <stop offset="50%" stopColor={textColor} stopOpacity="1" />
              <stop offset="100%" stopColor={textColor} stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <text
            x="60"
            y="110"
            fontSize={fontSize}
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fill="rgba(0, 0, 0, 0.4)"
          >
            {currentValue}
          </text>
          <text
            x="60"
            y="108"
            fontSize={fontSize}
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fill="url(#textGradient)"
          >
            {currentValue}
          </text>
        </svg>
      </div>

      {isFlipping && (
        <div className="flip-split-top">
          <svg className="flip-card-svg" viewBox="0 0 120 80" preserveAspectRatio="xMidYMin meet">
            <defs>
              <linearGradient id="textGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={textColor} stopOpacity="0.95" />
                <stop offset="50%" stopColor={textColor} stopOpacity="1" />
                <stop offset="100%" stopColor={textColor} stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <text
              x="60"
              y="110"
              fontSize={fontSize}
              fontWeight="900"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fill="rgba(0, 0, 0, 0.4)"
            >
              {displayValue}
            </text>
            <text
              x="60"
              y="108"
              fontSize={fontSize}
              fontWeight="900"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fill="url(#textGradientTop)"
            >
              {displayValue}
            </text>
          </svg>
        </div>
      )}

      {isFlipping && (
        <div className="flip-split-bottom">
          <svg className="flip-card-svg" viewBox="0 0 120 80" preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="textGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={textColor} stopOpacity="0.95" />
                <stop offset="50%" stopColor={textColor} stopOpacity="1" />
                <stop offset="100%" stopColor={textColor} stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <text
              x="60"
              y="30"
              fontSize={fontSize}
              fontWeight="900"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fill="rgba(0, 0, 0, 0.4)"
            >
              {value}
            </text>
            <text
              x="60"
              y="28"
              fontSize={fontSize}
              fontWeight="900"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fill="url(#textGradientBottom)"
            >
              {value}
            </text>
          </svg>
        </div>
      )}

      <div className="middle-divider" />
    </div>
  )
}
