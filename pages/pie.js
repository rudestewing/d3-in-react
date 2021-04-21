import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Pie = dynamic(() => import('@/components/Pie'))

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">
                <h1 className="text-lg font-semibold text-center mb-5">
                  Pie Chart Sample of data
                </h1>
                <div className="mb-4">
                  <Pie />
                </div>
              </div>
            </section>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
