import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <section className="content">
              <div className="container mx-auto">Render pie chart here</div>
            </section>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
