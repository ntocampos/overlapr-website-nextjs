import React from 'react'

const Topbar = () => {
  return (
    <header className="mx-4 px-6 py-4 border-b flex justify-between">
      <div>
        <h1 className="block">Overlapr</h1>
        <small>An overlap detection tool for graphical representations</small>
      </div>
      <div className="flex space-x-8 items-center">
        <a
          href="#"
          className="border-b-4 border-transparent pt-2 hover:border-indigo-400"
        >
          Get started
        </a>
        <a
          href="#"
          className="border-b-4 border-transparent pt-2 hover:border-indigo-400"
        >
          Contribute
        </a>
        <a
          href="#"
          className="border-b-4 border-transparent pt-2 hover:border-indigo-400"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}

export default Topbar
