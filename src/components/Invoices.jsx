import React from 'react'

const Invoices = () => {
  return (
    <section className='h-[17rem] basis-[485px] grow-0 shrink-0 bg-[#FFFFFF] rounded-md '>
    <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
        <div className='p-2 flex items-center justify-between'>
        <p className='text-base font-bold'>Invoices owned to you</p>
        <button className='text-[#77c7a1] text-base font-semibold py-1 px-3 rounded-md bg-[#E8EEFD]'>
            New Sales Invoice
        </button>

        </div>
        
    </div>
</section>
  )
}

export default Invoices