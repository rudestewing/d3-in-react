import React, { useMemo } from 'react'
import { AreaClosed } from '@vx/shape'
import appleStock from '@vx/mock-data/lib/mocks/appleStock'
import { curveMonotoneX } from '@vx/curve'
import { GridRows, GridColumns } from '@vx/grid'
import { scaleTime, scaleLinear } from '@vx/scale'
import { defaultStyles } from '@vx/tooltip'
import { LinearGradient } from '@vx/gradient'
import { max, extent } from 'd3'
import { width, height } from '@/lib/config/dimensions'

const stock = appleStock.slice(800)
export const background = '#3b6978'
export const background2 = '#204051'
export const accentColor = '#edffea'
export const accentColorDark = '#75daad'

const getDate = (d) => new Date(d.date)
const getStockValue = (d) => d.close

const Area = () => {
  const dateScale = useMemo(() => {
    return scaleTime({
      range: [0, width],
      domain: extent(stock, getDate),
    })
  }, [width])

  const stockValueScale = useMemo(() => {
    return scaleLinear({
      range: [height, 0],
      domain: [0, (max(stock, getStockValue) || 0) + height / 3],
    })
  }, [height])

  return (
    <svg width={width} height={height} style={{ margin: '0 auto' }}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="url(#area-background-gradient)"
        rx={14}
      />
      <LinearGradient
        id="area-background-gradient"
        from={background}
        to={background2}
      />
      <LinearGradient
        id="area-gradient"
        from={accentColor}
        to={accentColor}
        toOpacity={0.1}
      />
      <GridRows
        scale={stockValueScale}
        width={width}
        strokeDasharray="3,3"
        stroke={accentColor}
        strokeOpacity={0.3}
        pointerEvents="none"
      />
      <GridColumns
        scale={dateScale}
        height={height}
        strokeDasharray="3,3"
        stroke={accentColor}
        strokeOpacity={0.3}
        pointerEvents="none"
      />
      <AreaClosed
        data={stock}
        x={(d) => dateScale(getDate(d))}
        y={(d) => stockValueScale(getStockValue(d))}
        yScale={stockValueScale}
        strokeWidth={1}
        stroke="url(#area-gradient)"
        fill="url(#area-gradient)"
        curve={curveMonotoneX}
      />
    </svg>
  )
}

export default Area
