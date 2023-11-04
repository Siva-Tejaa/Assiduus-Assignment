import React from 'react'

const Watchlist = () => {

  const watchlistContent = [
    {
      id:1,
      account:"Sales",
      month:"1,194.58",
      ytd:"11,418.29"
    },
    {
      id:2,
      account:"Advertising",
      month:"6,879.02",
      ytd:"9,271.36"
    },
    {
      id:3,
      account:"Inventory",
      month:"4,692.26",
      ytd:"9,768.09"
    },
    {
      id:4,
      account:"Entertainment",
      month:"0.00",
      ytd:"0.00"
    },
    {
      id:5,
      account:"Product",
      month:"4,652.10",
      ytd:"2,529.90"
    },
  ]

  return (
    <section className='h-[17rem] basis-[485px] grow-0 shrink-0 bg-[#FFFFFF] rounded-md '>
    <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
        <div className='p-2 py-3 flex items-center justify-between'>
        <p className='text-base font-bold'>Account watchlist</p>
        </div>    
    </div>

    <div className='p-2'>
      <table className='text-left min-w-[-webkit-fill-available] '>
        <thead >
          <tr className='text-[#a3a3a3] w-[100%] '>
            <th className='py-2'>Account</th>
            <th>This Month</th>
            <th>YTD</th>
          </tr>
        </thead>
        
        <tbody>
          {
            watchlistContent.map((content) => (
              <tr key={content?.id} >
                <td className='py-1'>{content?.account}</td>
                <td>{content?.month}</td>
                <td>{content?.ytd}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

</section>
  )
}

export default Watchlist