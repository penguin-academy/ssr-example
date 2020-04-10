import React, { useState } from 'react'

export default function Example() {
  const [stateExample, setStateExample] = useState('Initial State')
  const handleClick = () => setStateExample('Pengu!')

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{stateExample}</p>
    </>
  )
}
