import React from 'react'

const Cashflow = () => {
  return (
    <section className='h-[17rem] basis-[485px] grow-0 shrink-0 bg-[#FFFFFF] rounded-md '>
    <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
        <div className='p-2 py-3 flex items-center justify-between'>
        <p className='text-base font-bold'>Total cash flow</p>
        <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1 '>
            <div className='w-4 h-4 bg-[#02BB7D] rounded-md'></div>
            <p>In</p>
        </div>
        <div className='flex items-center gap-1 '>
            <div className='w-4 h-4 bg-[#47B747] rounded-md'></div>
            <p>Out</p>
        </div>

        </div>

        </div>
        
    </div>
</section>

  )
}

export default Cashflow