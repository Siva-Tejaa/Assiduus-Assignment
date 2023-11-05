import React,{useRef, useState, useEffect} from 'react';
import { TbCloudUpload } from "react-icons/tb";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";



const Invoices = () => {

  const [data, setData] = useState([25, 60, 98, 60, 65, 75]);



  const dialogRef = useRef(null);

  const svgRef = useRef();

  const openDialog = (e) => {
    e.preventDefault();
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = (e) => {
    e.preventDefault();

    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };


  useEffect(() => {

    select(svgRef.current).selectAll("*").remove();

    const customXLabels = ['Older', 'Jan 01-08', 'Jan 09-16', 'Jan 17-24', 'Jan 25-31', 'Future'];

    const w = 470;
    const h = 185;

    const svg = select(svgRef.current)
                .attr("width", w)
                .attr("height", h)
                .style("overflow", "visible")

    const xScale = scaleBand()
      .domain(customXLabels)
      .range([0, w])
      .padding(0.8);

    const yScale = scaleLinear()
      .domain([0, h])
      .range([h, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length).tickSize(0);

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

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (_, index) => xScale(customXLabels[index]))
      .attr("y", -h)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", "#47B747")
      .attr("height", value => h - yScale(value))
      .attr('rx', 4)
  }, [data]);

  return (
    <section className='h-[17rem] basis-[485px] grow-0 shrink-0 bg-[#FFFFFF] rounded-md '>
    <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
        <div className='p-2 flex items-center justify-between'>
        <p className='text-base font-bold'>Invoices owned to you</p>
        <button onClick={openDialog} className='text-[#77c7a1] text-base font-semibold py-1 px-3 rounded-md bg-[#E8EEFD]'>
            New Sales Invoice
        </button>
        </div>


        <dialog ref={dialogRef} className='top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 rounded-lg w-[28rem]'>
          <p className='font-bold mb-4'>Upload files to attach</p>
          <form>
            <label htmlFor="popup-image">
              <div className='border border-dashed border-[grey] flex flex-col items-center bg-[#efefef] py-4' >
              <input id="popup-image" type="file" className='hidden'/>
                <TbCloudUpload fontSize="4em" color= "#6BB985"/>
                <p>Browse files to upload</p>
              </div>
            </label>
    
            <div className='mt-4 flex items-center justify-around'>
              <button onClick={closeDialog} className='text-[#7c7b7b] border border-solid border-[#40A440] py-[6px] px-3 rounded-md'>Cancel</button>
              <button onClick={closeDialog} className='text-[#FFFFFF] py-[6px] px-3 rounded-md bg-[#40A440]'>Attach Files</button>
          </div>
          </form>
        </dialog> 
    </div>
    <div className='px-2 py-2'>
        <svg ref={svgRef}>

      </svg>
    </div>
</section>
  )
}

export default Invoices