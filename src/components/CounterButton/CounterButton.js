import React from 'react'

export default function CounterButton({ click, increase }) {
  return (
    <button
      className='counter__button'
      data-increase={increase}
      onClick={click}
    >
      {increase === 'true' ? '+' : '-'}
    </button>
  )
}
