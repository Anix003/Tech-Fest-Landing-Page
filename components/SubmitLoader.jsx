import React, { useRef } from 'react'

import { FaRegCheckCircle } from "react-icons/fa";
import { TbFaceIdError } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";

const SubmitLoader = ({ massage = 'Loading...', isLoading = false, isSuccess = false, error = false }) => {

  const loader = useRef();

  const hideLoader = () => {
    loader.current.style.display = 'none';
  }

  return (
    <>
      <div ref={loader} className="loader">
        <div className='ing'>
          {isSuccess && <FaRegCheckCircle />} {error && <TbFaceIdError />} {massage}
        </div>
        {isLoading && <div className="loading"></div>}
        {!isLoading && <div className="btn-danger" onClick={ hideLoader } >Close</div>}
        {/* <button type="button" className="closeButton" aria-label="Close">
          <span aria-hidden="true">Close&times;</span>
        </button> */}
      </div>
    </>
  )
}

export default SubmitLoader