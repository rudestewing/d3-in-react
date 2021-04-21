const LeftAxis = ({ yScale, width }) => {
  return (
    <g>
      {yScale.domain().map((domainValue, index) => (
        <g
          key={index}
          transform={`translate(0, ${
            yScale(domainValue) + yScale.bandwidth() / 2
          })`}
        >
          <text x="-10" textAnchor="end" fontSize="0.8em">
            {domainValue}
          </text>
        </g>
      ))}
    </g>
  )
}

export default LeftAxis
