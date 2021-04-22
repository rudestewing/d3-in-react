import { Children } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedRect = ({ width, y, ...restProps }) => {
  const styleProps = useSpring({
    to: {
      width,
    },
    from: {
      width: 0,
    },
  })

  return (
    <animated.rect
      style={styleProps}
      width={width}
      y={y}
      {...restProps}
    ></animated.rect>
  )
}

const Bars = ({ data, xScale, yScale, xValue, yValue }) => {
  return (
    <g>
      {data.length &&
        data.map((d, index) => {
          return (
            <rect
              label={d.country}
              key={index}
              y={yScale(yValue(d))}
              width={xScale(xValue(d))}
              height={yScale.bandwidth()}
              fill="steelblue"
            ></rect>
          )
          return (
            <AnimatedRect
              label={d.country}
              key={index}
              y={yScale(yValue(d))}
              width={xScale(xValue(d))}
              height={yScale.bandwidth()}
              fill="steelblue"
            />
          )
        })}
    </g>
  )
}

export default Bars
