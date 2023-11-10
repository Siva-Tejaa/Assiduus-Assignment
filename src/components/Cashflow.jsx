import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Cashflow = () => {
  const data = [
    {
      year: 'August',
      cash_out: 20,
      cash_in: 40,
    },
    {
      year: 'September',
      cash_out: 40,
      cash_in: 80,
    },
    {
      year: 'October',
      cash_out: 80,
      cash_in: 100,
    },
    {
      year: 'November',
      cash_out: 70,
      cash_in: 80,
    },
    {
      year: 'December',
      cash_out: 50,
      cash_in: 80,
    },
    {
      year: 'January',
      cash_out: 50,
      cash_in: 100,
    },
  ];



  return (
    <section className="h-[17rem] basis-[485px] grow-0 shrink-0 bg-[#FFFFFF] rounded-md ">
      <div className="border-b-[1px] border-b-[rgb(193,190,190)] border-solid">
        <div className="p-2 py-3 flex items-center justify-between">
          <p className="text-base font-bold">Total cash flow</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 ">
              <div className="w-4 h-4 bg-[#02BB7D] rounded-md"></div>
              <p>In</p>
            </div>
            <div className="flex items-center gap-1 ">
              <div className="w-4 h-4 bg-[#47B747] rounded-md"></div>
              <p>Out</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-2">
        {/* <svg ref={svgRef}></svg> */} Hi
      </div>
    </section>
  );
};

export default Cashflow;
