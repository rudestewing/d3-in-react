import { useSpring, animated } from 'react-spring'

const AnimatedTick = ({ y, label }) => {
  const styleProps = useSpring({
    from: {
      y: 0,
    },
    to: {
      y,
    },
  })

  return (
    <animated.g style={styleProps} transform={`translate(0, ${y})`}>
      <text x="-10" textAnchor="end">
        {label}
      </text>
    </animated.g>
  )
}

const LeftAxis = ({ yScale, width }) => {
  return (
    <g>
      {yScale.domain().map((domainValue, index) => (
        <AnimatedTick
          key={index}
          y={yScale(domainValue) + yScale.bandwidth() / 2}
          label={domainValue}
        />
      ))}
    </g>
  )
}

export default LeftAxis
