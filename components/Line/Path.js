import { useEffect, useRef, useState } from 'react'
import { pointer, bisector, mouse, timeFormat } from 'd3'

const Path = ({ data, lineGenerator, width, height, xScale, yScale }) => {
  const rectRef = useRef()

  const [focusPosition, setFocusPosition] = useState({
    isShow: false,
    x: 0,
    y: 0,
    label: {
      timestamp: '',
      temperature: '',
    },
  })

  function toggleShowFocus(condition = false) {
    setFocusPosition({ ...focusPosition, isShow: condition })
  }

  function trackingMouseMove(e) {
    const bisect = bisector((d) => d.timestamp).left
    const xPos = pointer(e, e.target)[0]
    const x0 = bisect(data, xScale.invert(xPos))
    const d0 = data[x0]

    setFocusPosition({
      ...focusPosition,
      x: xScale(d0.timestamp),
      y: yScale(d0.temperature),
      label: {
        timestamp: timeFormat('%d/%m/%Y - %I %p')(d0.timestamp),
        temperature: Math.floor(d0.temperature),
      },
    })
  }

  return (
    <g>
      <path
        d={lineGenerator(data)}
        fill="none"
        strokeWidth={3}
        strokeLinejoin="round"
        stroke="orange"
      ></path>
      {focusPosition.isShow && (
        <g transform={`translate(${focusPosition.x}, ${focusPosition.y + 8})`}>
          <circle r="5" cy="-5" fill="steelblue"></circle>
          <rect
            fill="white"
            stroke="gray"
            strokeWidth="1"
            x="7"
            y="-25"
            width="100"
            height="50"
            rx="5"
            rx="5"
          ></rect>
          <text fontSize="0.5em" x="18" y="-8">
            {focusPosition.label.timestamp}
          </text>
          <text fontSize="0.8em" x="18" y="8">
            {focusPosition.label.temperature} C
          </text>
        </g>
      )}
      <rect
        ref={rectRef}
        width={width}
        height={height}
        fill="none"
        pointerEvents="all"
        onMouseEnter={() => toggleShowFocus(true)}
        onMouseLeave={() => toggleShowFocus()}
        onMouseMove={(e) => trackingMouseMove(e)}
      ></rect>
    </g>
  )
}

export default Path
