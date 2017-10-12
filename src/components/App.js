import React from 'react'
import { Link } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <h1>Unit Conversion</h1>
      <ul>
        <li>
          <Link to={"/rates"}>Currency Rate Conversion</Link>
      </li>
      </ul>
    </div>
  )
}

export default App
