import React from 'react'

export default function CounterButton({ click, increase }) {
  return (
    <button data-increase={increase} onClick={click}>
      {increase === 'true' ? '+' : '-'}
    </button>
  )
}
