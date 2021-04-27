import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Area = dynamic(() => import('@/components/Area'))

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">
                <h1 className="text-lg text-center font-semibold mb-5">
                  Apple Stock Market
                </h1>
                <div className="text-center mb-4">
                  <a
                    href="https://github.com/airbnb/visx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline inline-block"
                  >
                    with VX Library
                  </a>
                </div>
                <div className="mb-4">
                  <Area />
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
