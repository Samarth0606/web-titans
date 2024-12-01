import React from 'react'
import {  Link } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <div>
        <h2>All Quotes App</h2>
        <Link to='/'>Visit All Quotes</Link>
        <Link to='/new'>Visit New Quote</Link>
    </div>
  )
}
