const DataCenterLocations = ({ data, handleLocationClick, projection }) => {
  return (
    <g>
      {data.map((d, index) => {
        const [x, y] = projection([d.lng, d.lat])
        return (
          <g
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={(e) => handleLocationClick(d)}
          >
            <circle
              cx={x}
              cy={y}
              r="10"
              onClick={() => {}}
              style={{ fill: 'steelblue' }}
            ></circle>
            <image
              href="/images/database-storage.png"
              height="20"
              width="20"
              x={x - 18}
              y={y - 10}
            ></image>
          </g>
        )
      })}
    </g>
  )
}

export default DataCenterLocations
