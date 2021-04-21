import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { geoGraticule, geoNaturalEarth1, geoPath } from 'd3-geo'

const WorldMap = dynamic(() => import('@/components/WorldMap'))

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <h1 className="text-lg font-semibold text-center mb-5">
                World Map - Location of Data Center
              </h1>
              <div className="mb-4">
                <WorldMap />
              </div>
            </section>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
