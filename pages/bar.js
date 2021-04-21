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
                <h1 className="text-lg text-center font-semibold mb-5">
                  Top World Population
                </h1>
                <div className="mb-4">
                  <h1>D3 sebagai penghitung, D3 yang menangani DOM</h1>
                  <BarD3Only />
                </div>
                <div className="mb-4">
                  <h1>D3 sebagai penghitung, React yang menangani DOM</h1>
                  <Bar />
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
