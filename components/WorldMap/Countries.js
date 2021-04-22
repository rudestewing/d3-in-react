const Countries = ({ features, path }) => {
  return (
    <g>
      {features.map((feature, index) => {
        return (
          <path
            key={index}
            d={path(feature)}
            style={{
              fill: '#d8d8d8',
              strokeWidth: 0.5,
              strokeLinejoin: 'round',
              strokeLinecap: 'round',
              stroke: '#fdfdfd',
            }}
          ></path>
        )
      })}
    </g>
  )
}

export default Countries
