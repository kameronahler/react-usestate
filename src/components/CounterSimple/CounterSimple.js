import React, { useState } from 'react'

export default function CounterSimple() {
  const [simpleCount, setSimpleCount] = useState(0) // resets state on every mount

  const changeCount = (e) => {
    setSimpleCount(
      e.currentTarget.dataset.increase === 'true'
        ? (prevCount) => prevCount + 1
        : (prevCount) => prevCount - 1
    )
  }

  return (
    <>
      <header>
        <h5>Simple counter</h5>
      </header>
      <button data-increase={'false'} onClick={changeCount}>
        -
      </button>
      <div>{simpleCount}</div>
      <button data-increase={'true'} onClick={changeCount}>
        +
      </button>
    </>
  )
}
