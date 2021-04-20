import AppLayout from '@/components/Layouts/AppLayout'
import { Fragment } from 'react'

const PageComponent = () => {
  return (
    <AppLayout>
      {{
        content: (
          <Fragment>
            <div>Hello there</div>
          </Fragment>
        ),
      }}
    </AppLayout>
  )
}

export default PageComponent
