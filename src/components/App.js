import React from 'react'
import { Link } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <main>
        <h1>Unit Conversion</h1>
        <ul>
          <li>
            <Link to={"/rates"}>Currency Rate Conversion</Link>
        </li>
        </ul>
      </main>
    </div>
  )
}

export default App
