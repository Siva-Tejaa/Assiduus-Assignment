import React,{useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';

const Account = () => {

    const months = [
        {
            id: 1,
            month: "January",
            data: [85, 110, 150, 65, 90, 120, 98, 100],
        },
        {
            id: 2,
            month: "February",
            data: [55, 70, 110, 65, 85, 105, 95, 100],
        },
        {
            id: 3,
            month: "March",
            data: [60, 75, 145, 63, 92, 15, 96, 110],
        },
        {
            id: 4,
            month: "April",
            data: [70, 80, 110, 67, 87, 17, 92, 120],
        },
        {
            id: 5,
            month: "May",
            data: [58, 72, 127, 68, 88, 13, 91, 105],
        },
        {
            id: 6,
            month: "June",
            data: [62, 78, 96, 66, 86, 12, 94, 108],
        },
        {
            id: 7,
            month: "July",
            data: [65, 73, 149, 69, 89, 11, 93, 115],
        },
        {
            id: 8,
            month: "August",
            data: [57, 76, 142, 64, 84, 14, 97, 112],
        },
        {
            id: 9,
            month: "September",
            data: [68, 74, 138, 61, 83, 16, 99, 102],
        },
        {
            id: 10,
            month: "October",
            data: [53, 71, 141, 62, 82, 19, 96, 106],
        },
        {
            id: 11,
            month: "November",
            data: [63, 79, 137, 70, 81, 18, 100, 110],
        },
        {
            id: 12,
            month: "December",
            data: [85, 67, 150, 65, 90, 10, 98, 100],
        },
    ];

    const[month, setMonth] = useState("January");

    const[data, setData] = useState(months.find((m) => m.month === "January").data);

    const svgRef = useRef();

    useEffect(() => {
        const selectedMonth = months.find((m) => m.month === month);
        setData(selectedMonth.data);
    }, [month]);

    useEffect(() => {

        d3.select(svgRef.current).selectAll("*").remove();

        //Setting up the SVG
        const w = 470;
        const h = 185;
        const svg = d3.select(svgRef.current)
                    .attr("width", w)
                    .attr("height", h)
                    .style("overflow", "visible")

        //Setting the Scaling
        const xScale = d3.scaleLinear()
                       .domain([0, data.length - 1])
                       .range([0, w]);
        const yScale = d3.scaleLinear()
                       .domain([0, h])
                       .range([h, 0]);
        const generateScaledLine = d3.line()
                                   .x((d,i) => xScale(i))
                                   .y(yScale)
                                   .curve(d3.curveCardinal);

        //Setting the axes
        const xAxis = d3.axisBottom(xScale)
                        .ticks(data.length)
                        .tickFormat(i => i+1)
                        .tickSize(0);
        const xAxisGroup =svg.append("g")
           .call(xAxis)
           .attr("transform", `translate(0, ${h})`);

        // Change the color of x-axis text to green
        xAxisGroup.selectAll('text').style('fill', '#C6C8CA');

        // Remove the x-axis line
        xAxisGroup.select(".domain").remove();

        //Setting up the data for the SVG
        svg.selectAll(".line")
           .data([data])
           .join("path")
           .attr("d", d => generateScaledLine(d))
           .attr("fill", "none")
           .attr("stroke", "#47B747")
           

    },[data])
 
  return (
    <section className='h-[17rem] basis-[485px] grow-3 shrink-0 bg-[#FFFFFF] rounded-md '>
        <div className=' border-b-[1px] border-b-[rgb(193,190,190)] border-solid'>
            <div className='p-2 flex items-center justify-between'>
            <p className='text-base font-bold'>Checking Account</p>
            <div className='flex items-center justify-between gap-2'>
                <select className='border border-solid border-[rgb(193,190,190)] p-1 rounded-md outline-none'>
                    <option>Manage</option>
                </select>
                <select className='border border-solid border-[rgb(193,190,190)] p-1 rounded-md outline-none' value={month} onChange={(e) => setMonth(e.target.value)}>
                    {
                        months.map((month) => (
                            
                            <option key={month.id}>{month?.month}</option>
                    
                        ))
                    }
                </select>
            </div>
            </div> 
        </div>
        <div className='px-2 py-2'>
            <svg ref={svgRef}></svg>
        </div>
    </section>
  )
}

export default Account