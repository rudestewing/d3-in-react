const Path = ({ data, lineGenerator }) => {
  return (
    <path
      d={lineGenerator(data)}
      fill="none"
      strokeWidth={3}
      strokeLinejoin="round"
      stroke="orange"
    ></path>
  )
}

export default Path
