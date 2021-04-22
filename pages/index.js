import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">
                <h1 className="text-xl mb-5 text-center font-semibold">
                  D3js & React
                </h1>
              </div>
            </section>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
