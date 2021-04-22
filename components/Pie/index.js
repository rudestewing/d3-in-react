import { useEffect, useState } from 'react'
import { scaleOrdinal, pie, arc, schemeCategory10, format } from 'd3'
import {
  width,
  height,
  innerWidth,
  margin,
  innerHeight,
} from '@/lib/config/dimensions'

const Pie = () => {
  const [data, setData] = useState([])

  function loadData() {
    setTimeout(() => {
      setData([
        { label: 'Apples', value: 10 },
        { label: 'Oranges', value: 20 },
        { label: 'Kiwi', value: 42 },
        { label: 'Pumpkin', value: 32 },
      ])
    }, 500)
  }

  useEffect(() => {
    loadData()
  }, [])

  const radius = Math.min(width, height) / 2 - 40

  const createPie = pie().value((d) => d.value)

  const createArc = arc().innerRadius(0).outerRadius(radius)

  const dataReady = createPie(data)

  const colorScale = scaleOrdinal(schemeCategory10)

  return (
    <svg width={width} height={height} style={{ margin: '0 auto' }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {dataReady.map((d, index) => {
          const [x, y] = createArc.centroid(d)

          return (
            <g key={index}>
              <path d={createArc(d)} fill={colorScale(index)}></path>
              <g>
                <text
                  textAnchor="middle"
                  fontSize="0.9em"
                  fill="white"
                  transform={`translate(${x}, ${y - 10})`}
                >
                  {d.value}
                </text>
                <text
                  textAnchor="middle"
                  fontSize="0.9em"
                  fill="white"
                  transform={`translate(${x}, ${y + 10})`}
                >
                  {d.data.label}
                </text>
              </g>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

export default Pie
