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
          <text x="-10" textAnchor="end">
            {domainValue}
          </text>
        </g>
      ))}
    </g>
  )
}

export default LeftAxis
