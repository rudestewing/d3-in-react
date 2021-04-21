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
    <div id="app-layout" className="min-h-full bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-300">
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
      <div id="main-content">{children.content && children.content}</div>
    </div>
  )
}

export default AppLayout
