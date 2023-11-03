import React from 'react'

const Account = () => {


    const months = [
        {
            id:1,
            month:"January",
        },
        {
            id:2,
            month:"February",
        },
        {
            id:3,
            month:"March",
        },
        {
            id:4,
            month:"April",
        },
        {
            id:5,
            month:"May",
        },
        {
            id:6,
            month:"June",
        },
        {
            id:7,
            month:"July",
        },
        {
            id:8,
            month:"August",
        },
        {
            id:9,
            month:"September",
        },
        {
            id:10,
            month:"October",
        },
        {
            id:11,
            month:"November",
        },
        {
            id:12,
            month:"December",
        }
    ]

  return (
    <section className='h-[17rem] basis-[485px] grow-3 shrink-0 bg-[#FFFFFF] rounded-md '>
        <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
            <div className='p-2 flex items-center justify-between'>
            <p className='text-base font-bold'>Checking Account</p>
            <div className='flex items-center justify-between gap-2'>
                <select className='border border-solid border-[rgb(193,190,190)] p-1 rounded-md outline-none'>
                    <option>Manage</option>
                </select>
                <select className='border border-solid border-[rgb(193,190,190)] p-1 rounded-md outline-none'>
                    {
                        months.map((month) => (
                            <option key={month.id}>{month?.month}</option>
                        ))
                    }
                </select>
            </div>

            </div>
            
        </div>
    </section>
  )
}

export default Account