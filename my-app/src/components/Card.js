import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{"width": "18rem", "maxHeight" : "450px"}}>
      <img src="https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg" className="card-img-top" alt="" />
      <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text</p>
         <div className="container w-100">
             <select className="m-2 h-100 bg-primary text-white rounded">
                {Array.from(Array(6), (e,i) => {
                    return (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                })}
             </select>

             <select className="m-2 h-100 bg-primary text-white rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
             </select>

             <div className='d-inline'>
                Total Price
             </div>
         </div>
       </div>
     </div>
    </div>
  )
}
