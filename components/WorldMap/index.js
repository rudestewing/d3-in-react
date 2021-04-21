import { useEffect, useState } from 'react'
import { csv, json, geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import {
  width,
  height,
  innerWidth,
  margin,
  innerHeight,
} from '@/lib/config/dimensions'
import { feature } from 'topojson-client'
import InformationBox from './InformationBox'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const WorldMap = () => {
  const [features, setFeatures] = useState([])
  const [dataCenterLocations, setDataCenterLocations] = useState([])
  const [selectedDataCenter, setSelectedDataCenter] = useState(null)

  function loadData() {
    Promise.all([
      json('/data/world-atlas-topology-json-50m.json'),
      csv('/data/data-center-locations.csv'),
    ]).then(([worldAtlasData, dataCenterLocations]) => {
      const _features = feature(
        worldAtlasData,
        worldAtlasData.objects.countries
      )
      setFeatures(_features.features)

      const _dataCenterLocations = [...dataCenterLocations].map((item) => {
        return {
          ...item,
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lng),
        }
      })
      setDataCenterLocations(_dataCenterLocations)
    })
  }

  function handleLocationClick(d) {
    setSelectedDataCenter(d)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="relative">
      <svg width={width} height={height} style={{ margin: '0 auto' }}>
        <g>
          <path
            d={path({ type: 'Sphere' })}
            style={{
              fill: '#fff',
            }}
          ></path>
        </g>
        <g>
          <path
            d={path(graticule())}
            style={{
              fill: 'none',
              stroke: 'lightgray',
            }}
          ></path>
        </g>
        <g>
          {features.map((feature, index) => {
            return (
              <path
                key={index}
                d={path(feature)}
                style={{
                  fill: '#d8d8d8',
                  strokeWidth: 0.5,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                  stroke: '#fdfdfd',
                }}
              ></path>
            )
          })}
        </g>
        <g>
          {dataCenterLocations.map((d, index) => {
            const [x, y] = projection([d.lng, d.lat])
            return (
              <g
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={(e) => handleLocationClick(d)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  onClick={() => {}}
                  style={{ fill: 'steelblue' }}
                ></circle>
                <image
                  href="/images/database-storage.png"
                  height="20"
                  width="20"
                  x={x - 18}
                  y={y - 10}
                ></image>
              </g>
            )
          })}
        </g>
      </svg>
      {selectedDataCenter && (
        <InformationBox
          data={selectedDataCenter}
          onClose={() => setSelectedDataCenter(null)}
        />
      )}
    </div>
  )
}

export default WorldMap
