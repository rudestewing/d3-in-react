import {
  width,
  height,
  innerWidth,
  margin,
  innerHeight,
} from '@/lib/config/dimensions'
import {
  select,
  csv,
  axisLeft,
  axisBottom,
  scaleLinear,
  scaleBand,
  max,
  format,
} from 'd3'
import { useEffect, useRef, useState } from 'react'

const BarD3Only = () => {
  const [data, setData] = useState([])
  const svgRef = useRef(null)

  function renderChart() {
    const svg = select(svgRef.current)

    // make sure SVG dikosongkan childnya terlebih dahulu
    svg.html('')

    // buat group
    const contentGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left} ${margin.top})`)

    // deklarasikan xValue [dimana value dari sumbu X ini adalah populasi dan data dari sumbu Y adalah negara]
    const xValue = (d) => d.population
    const yValue = (d) => d.country

    // buat X dan Y Scale
    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(data.map((d) => yValue(d)))
      .range([0, innerHeight])
      .padding(0.2)

    // configurasi Axis yang dibutuhkan, dimana kita membutuhkan AxisBottom (sebagai X) & AxisLeft (sebagai Y)
    const xAxis = axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickFormat((number) => format('.3s')(number).replace('G', 'B'))

    const yAxis = axisLeft(yScale)

    // render Axis kedalam Content Group dengan .call()
    contentGroup
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${innerHeight})`)

    contentGroup.append('g').call(yAxis)

    // render bars sesuai dengan data yang diberikan
    contentGroup
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', (d) => yScale(d.country))
      .attr('width', (d) => xScale(d.population))
      .attr('height', yScale.bandwidth())
      .attr('fill', 'teal')
  }

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

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (data.length) renderChart()
  }, [data])

  return (
    <svg
      width={width}
      height={height}
      ref={svgRef}
      style={{ margin: '0 auto' }}
    ></svg>
  )
}

export default BarD3Only
