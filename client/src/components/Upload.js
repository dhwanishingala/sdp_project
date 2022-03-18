import React from 'react'

function Upload() {
  return (
    <>
      <div className='container text-center my-5'>
        <h4> Upload your Photo here</h4>
        <div>
          <label for="formFileLg" class="form-label"></label>
          <input class="form-control form-control-lg" id="formFileLg" type="file"/>
        </div>
      </div>
    </>
  )
}
export default Upload