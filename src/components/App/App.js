import React from 'react'
import StateSimple from '../StateSimple/StateSimple'
import StateFunction from '../StateFunction/StateFunction'
import StateObject from '../StateObject/StateObject'
import StateMultiple from '../StateMultiple/StateMultiple'

export default function App() {
  return (
    <>
      <StateSimple />
      <StateFunction />
      <StateObject />
      <StateMultiple />
    </>
  )
}
