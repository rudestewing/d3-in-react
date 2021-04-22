import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Line = dynamic(() => import('@/components/Line'))

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">
                <h1 className="text-lg font-semibold text-center mb-5">
                  Temperature in San Francisco
                </h1>
                <div className="mb-4">
                  <h1>
                    D3js yang menangani perhitungan, D3js & React menangani DOM
                    (mix)
                  </h1>
                  <Line />
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
