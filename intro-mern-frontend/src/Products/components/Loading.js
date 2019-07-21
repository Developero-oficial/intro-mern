import React from 'react'
import { Loader } from 'react-bulma-components'

const Loading = () => {
  return (
    <div className="columns is-centered">
      <Loader style={{
        width: 100,
        height: 100
      }}/>
    </div>
  )
}

export default Loading
