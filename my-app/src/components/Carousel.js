import React from 'react'

export default function Carousel() {
  return (
    <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary text-white bg-primary" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%"}} alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%"}} alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?noodles" className="d-block w-100" style={{ filter: "brightness(30%"}} alt="" />
    </div>
  </div>
  </div>
    </div>
  )
}
