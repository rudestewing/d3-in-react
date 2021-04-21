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
import { useEffect, useRef } from 'react'

const BarD3Only = () => {
  const svgRef = useRef(null)

  function renderChart(data) {
    const svg = select(svgRef.current)

    svg.html('')

    const contentGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left} ${margin.top})`)

    const xValue = (d) => d.population
    const yValue = (d) => d.country

    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(data.map((d) => yValue(d)))
      .range([0, innerHeight])
      .padding(0.2)

    const xAxis = axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickFormat((number) => format('.3s')(number).replace('G', 'B'))
    const yAxis = axisLeft(yScale)

    const xAxisGroup = contentGroup
      .append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(xAxis)

    xAxisGroup.selectAll('line').attr('stroke', 'lightgray')
    xAxisGroup.selectAll('.domain').remove()

    const yAxisGroup = contentGroup.append('g').call(yAxis)

    yAxisGroup.selectAll('line').attr('storke', 'transparent')
    yAxisGroup.selectAll('.domain, .tick line').remove()

    contentGroup
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', (d) => yScale(d.country))
      .attr('width', 0)
      .attr('height', yScale.bandwidth())
      .attr('fill', 'teal')

    contentGroup
      .selectAll('rect')
      .transition()
      .duration(800)
      .attr('width', (d) => xScale(d.population))
      .delay(0)
  }

  useEffect(() => {
    csv('/data/top-population-country.csv').then((responseData) => {
      const data = [...responseData].map(({ country, population }) => {
        return {
          country,
          population: parseFloat(population),
        }
      })

      renderChart(data)
    })
  }, [])

  return <svg width={width} height={height} ref={svgRef}></svg>
}

export default BarD3Only
