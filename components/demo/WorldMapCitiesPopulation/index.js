import { useEffect, useState } from 'react'
import { json } from 'd3'
import { feature, mesh } from 'topojson-client'
import Marks from './Marks'
import useWorldAtlas from 'hooks/useWorldAtlas'
import { csv } from 'd3'
import useCitiesPopulation from 'hooks/useCitiesPopulation'

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
}

const width = 960
const height = 500

const WorldMapCase = () => {
  const worldAtlas = useWorldAtlas()
  const cities = useCitiesPopulation()

  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold tracking-wider">
        World Map Cities Population Chart
      </h3>
      <svg width={width} height={height}>
        <Marks worldAtlas={worldAtlas} cities={cities}></Marks>
      </svg>
    </div>
  )
}

export default WorldMapCase
