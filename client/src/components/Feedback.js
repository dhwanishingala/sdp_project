import React from 'react'

function Feedback() {
  return (
    <>
    <div className='container my-5'>
      <div className='container text-center'>
        <h3> Feedback form</h3>
      </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Enter your feedback here</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </div>
    <div className='text-center'>
    <button type="button" class="btn btn-outline-secondary">Submit</button>
    </div>
    </>
  )
}

export default Feedback