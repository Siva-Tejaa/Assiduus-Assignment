import React,{useRef} from 'react';
import { TbCloudUpload } from "react-icons/tb";

const Invoices = () => {

  const dialogRef = useRef(null);

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
</section>
  )
}

export default Invoices