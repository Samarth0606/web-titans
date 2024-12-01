import React, { Fragment } from 'react'
import MainNavigation from './components/MainNavigation'
import AllQuotes from './components/AllQuotes'
import NewQuote from './components/NewQuote'
import { Route, Routes } from 'react-router-dom'
import ShowQuote from './components/ShowQuote'

export default function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
          <Route element={<AllQuotes />} path='/' />
          <Route element={<NewQuote />} path='/new' />
          <Route element={<ShowQuote />} path='/quotes/:id' />
      </Routes>
    </Fragment>
  )
}
