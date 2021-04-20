import Link from 'next/link'

const AppLayout = ({ children }) => {
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
    <div id="app-layout" className="h-full">
      <header className="bg-white shadow-lg border-b border-gray-300">
        <nav>
          <ul className="flex justify-center">
            {pageMenus.map(({ path, label }) => (
              <li key={path}>
                <Link href={path}>
                  <a className="p-3 mx-3 inline-block hover:bg-blue-700 hover:text-white">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div id="main-content" className="bg-gray-100 h-full">
        {children.content && children.content}
      </div>
    </div>
  )
}

export default AppLayout
