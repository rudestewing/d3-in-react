const Graticule = ({ path, graticule }) => {
  return (
    <g>
      <path
        d={path(graticule())}
        style={{
          fill: 'none',
          stroke: 'lightgray',
        }}
      ></path>
    </g>
  )
}

export default Graticule
