import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Bar = dynamic(() => import('@/components/Bar'))
const BarD3Only = dynamic(() => import('@/components/Bar/BarD3Only'))

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">
                <Bar />
              </div>
            </section>
            <section>
              <div className="container mx-auto">
                <BarD3Only />
              </div>
            </section>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
