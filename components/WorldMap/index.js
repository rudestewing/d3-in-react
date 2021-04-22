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
import Sphere from './Sphere'
import Graticule from './Graticule'
import Countries from './Countries'
import DataCenterLocations from './DataCenterLocations'

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
        <Sphere path={path} />
        <Graticule path={path} graticule={graticule} />
        <Countries features={features} path={path} />
        <DataCenterLocations
          data={dataCenterLocations}
          handleLocationClick={handleLocationClick}
          projection={projection}
        />
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
