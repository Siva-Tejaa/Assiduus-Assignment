import React from 'react'
import Account from './Account'
import Invoices from './Invoices'
import Cashflow from './Cashflow'
import Watchlist from './Watchlist'

const Main = () => {
  return (
    <main className='p-5 flex flex-auto flex-wrap items-center justify-center gap-3'>
        <Account/>
        <Invoices/>
        <Cashflow/>
        <Watchlist/>
    </main>
  )
}

export default Main