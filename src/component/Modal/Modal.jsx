import React from 'react';

const Modal = (props) => {
  // console.log(props)
  const{ image_link,description, integrations, features } = props?.singleData
  // console.log(integrations)
  // console.log(Object.keys(features || {}))
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box w-11/12 max-w-5xl">
{/* modal body start */}
<div className='flex'>
  <div className='w-1/2 border-red-400 bg-red-50 border-2 rounded-lg p-5 lg:w-1/2 '>
      <div className='title'>
        <h2 className='text-black text-lg font-semibold  lg:mt-8'>{description?description:"Not found"}</h2>
      </div>
      <div className='flex justify-between'>
        <div className='font-bold text-sm text-green-600 rounded-md px-1 lg:px-5 py-5 my-2 bg-white'>10$month</div>
        <div>50 pro</div>
        <div>contact</div>
      </div>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-black text-lg font-semibold mb-4'>Features</h1>
   
          { 
            Object.values(features || {})?.map((value, index) => <p className='mb-1 font-normal text-sm text-gray-700'>{index+1}. {value ? value?.feature_name : 'Not found'}</p>)
          }
        
        </div>
        <div>
          <h1 className='text-2xl'>Integrations</h1>
          {
            integrations && integrations?.map((value, index) => <p className='mb-1 font-normal text-sm text-gray-700'>{index+1}. {value ? value : 'Not found'}</p>)
          }
        </div>
      </div>

  </div>
  <div className='w-1/2'>
  <img className="p-3 lg:p-8 rounded-lg" src={image_link && image_link[0]} alt="" />
  </div>
</div>



    <div className="modal-action ">
      <label htmlFor="my-modal-5" className="btn btn-circle btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg></label>
    </div>
  </div>


</div>
        </>
    );
};

export default Modal;