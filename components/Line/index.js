import { useEffect, useState } from 'react'
import { csv, scaleLinear, scaleTime, extent, line, curveBasis } from 'd3'
import {
  width,
  height,
  innerWidth,
  margin,
  innerHeight,
} from '@/lib/config/dimensions'
import BottomAxis from './BottomAxis'
import LeftAxis from './LeftAxis'
import Path from './Path'

const Line = () => {
  const [data, setData] = useState([])

  function loadData() {
    csv('/data/temperature-in-san-francisco.csv').then((responseData) => {
      const _data = responseData.map((d) => {
        return {
          temperature: parseFloat(d.temperature),
          timestamp: new Date(d.timestamp),
        }
      })

      setData([..._data])
    })
  }

  const xValue = (d) => d.timestamp
  const yValue = (d) => d.temperature

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth])

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  const lineGenerator = line()
    .x((d) => xScale(d.timestamp))
    .y((d) => yScale(d.temperature))
  // .curve(curveBasis)

  useEffect(() => {
    loadData()
  }, [])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <BottomAxis data={data} scale={xScale} height={innerHeight} />
        <LeftAxis data={data} scale={yScale} width={innerWidth} />
        <Path
          data={data}
          lineGenerator={lineGenerator}
          width={innerWidth}
          height={innerHeight}
          xScale={xScale}
          yScale={yScale}
        />
      </g>
    </svg>
  )
}

export default Line
