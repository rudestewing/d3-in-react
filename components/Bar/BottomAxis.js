import { format } from 'd3'

const BottomAxis = ({ xScale, height }) => {
  return (
    <g>
      {xScale.ticks().map((tickValue, index) => (
        <g key={index} transform={`translate(${xScale(tickValue)}, 0)`}>
          <line y2={height} stroke="lightgray"></line>
          <text y={height} textAnchor="middle" dy="5">
            {format('.3s')(tickValue).replace('G', 'B')}
          </text>
        </g>
      ))}
    </g>
  )
}

export default BottomAxis
