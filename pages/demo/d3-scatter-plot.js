import { Fragment } from 'react'
import dynamic from 'next/dynamic'

import DemoLayout from '@/components/Layouts/DemoLayout'
const ScatterPlot = dynamic(() => import('@/components/demo/ScatterPlot'))

const PageComponent = () => {
  return (
    <Fragment>
      <DemoLayout>
        {{
          content: (
            <div className="container mx-auto">
              <ScatterPlot />
            </div>
          ),
        }}
      </DemoLayout>
    </Fragment>
  )
}

export default PageComponent
