import { useEffect, useState } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'
import {
  width,
  height,
  innerWidth,
  margin,
  innerHeight,
} from '@/lib/config/dimensions'
import BottomAxis from './BottomAxis'
import LeftAxis from './LeftAxis'
import Bars from './Bars'

const Bar = () => {
  const [data, setData] = useState([])

  function loadData() {
    csv('/data/top-population-country.csv').then((responseData) => {
      const _data = [...responseData]
        .map(({ country, population }) => {
          return {
            country,
            population: parseFloat(population),
          }
        })
        .sort((a, b) => b.population - a.population)

      setData(_data)
    })
  }

  const xValue = (d) => d.population
  const yValue = (d) => d.country

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map((d) => yValue(d)))
    .range([0, innerHeight])
    .padding(0.2)

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <BottomAxis xScale={xScale} height={innerHeight} />
          <LeftAxis yScale={yScale} width={innerWidth} />
          <Bars
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          />
        </g>
      </svg>
    </>
  )
}

export default Bar
