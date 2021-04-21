import { useEffect, useState } from 'react'
import { csv, format, scaleBand, scaleLinear, max } from 'd3'
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
      const _data = [...responseData].map(({ country, population }) => {
        return {
          country,
          population: parseFloat(population),
        }
      })
      setData(_data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  const xValue = (d) => d.population
  const yValue = (d) => d.country

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map((d) => yValue(d)))
    .range([0, innerHeight])
    .padding(0.2)

  function shuffleData() {
    const _data = [...data].map((item) => {
      return {
        ...item,
        population: Math.floor(Math.random() * (1415046 - 130759 + 1)) + 130759,
      }
    })
    setData(_data)
  }

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
      {/* <button
        className="px-5 py-3 bg-blue-500 text-white hover:bg-blue-800"
        onClick={shuffleData}
      >
        Randomize Value
      </button> */}
    </>
  )
}

export default Bar
