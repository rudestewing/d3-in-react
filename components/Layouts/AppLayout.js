import Link from 'next/link'
import { useRouter } from 'next/router'

const AppLayout = ({ children }) => {
  const router = useRouter()

  const pageMenus = [
    {
      path: '/bar',
      label: 'Bar',
    },
    {
      path: '/line',
      label: 'Line',
    },
    {
      path: '/pie',
      label: 'Pie',
    },
    {
      path: '/world-map',
      label: 'World Map',
    },
  ]

  return (
    <div id="app-layout" className="bg-gray-50 h-full">
      <header className="block w-full bg-white shadow-sm border-b border-gray-300 ">
        <nav>
          <ul className="flex justify-center">
            {pageMenus.map(({ path, label }) => (
              <li key={path}>
                <Link href={path}>
                  <a
                    className={`
                      px-5 py-3 inline-block font-semibold tracking-wider hover:bg-blue-800 hover:text-white bg-white
                      ${
                        router.pathname == path &&
                        'bg-blue-600 text-white outline-none'
                      }`}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div id="main-content" className="min-h-full">
        {children.content && children.content}
      </div>
      <footer className="block bg-white border-t border-gray-300 py-16">
        <div className="container mx-auto">
          <a
            href="https://github.com/rudestewing/d3-in-react"
            className="text-sm text-blue-600 underline block mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
          <a href="/demo" className="text-sm text-blue-600 underline block">
            Other demo
          </a>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
