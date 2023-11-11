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
      cash_out: 100,
      cash_in: 50,
    },
  ];

  const svgRef = useRef();

  useEffect(() => {
    // Use D3 to create the stacked bar chart
    if (data && svgRef.current) {

      d3.select(svgRef.current).selectAll("*").remove();
  
      const keys = ['cash_out', 'cash_in'];
  
      const stack = d3.stack().keys(keys)(data);

      const w = 470;
      const h = 185;
      const svg = d3.select(svgRef.current)
                  .attr("width", w)
                  .attr("height", h)
                  .style("overflow", "visible")
  
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .range([0, w])
        .padding(0.8)
  
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
        .nice()
        .range([h, 0]);
  
      const color = d3.scaleOrdinal().domain(keys).range(['#47B747', '#02BB7D']);
  
      svg.selectAll('g').remove();
  
      svg.append('g')
        .selectAll('g')
        .data(stack)
        .enter()
        .append('g')
        .attr('fill', (d, i) => color(keys[i]))
        .selectAll('rect')
        .data((d) => d)
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.data.year))
        .attr('y', (d) => y(d[1]))
        .attr('height', (d) => y(d[0]) - y(d[1]))
        .attr('width', x.bandwidth())
        .attr('rx', 2)
        

  
        

        //Changing x axis styles

    const xAxis = d3.axisBottom(x).ticks(data.length).tickSize(0);

    const xAxisGroup = svg.append("g")
           .call(xAxis)
           .attr("transform", `translate(0, ${h})`);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis)


      // Change the color of x-axis text to green
      xAxisGroup.selectAll('text').style('fill', '#C6C8CA');

      // Remove the x-axis line
      xAxisGroup.select(".domain").remove();
        

    }
  }, [data]);
  

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
        <svg ref={svgRef}></svg>
      </div>
    </section>
  );
};

export default Cashflow;
