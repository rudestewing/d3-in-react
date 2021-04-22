const Sphere = ({ path }) => {
  return (
    <g>
      <path
        d={path({ type: 'Sphere' })}
        style={{
          fill: '#fff',
        }}
      ></path>
    </g>
  )
}

export default Sphere
