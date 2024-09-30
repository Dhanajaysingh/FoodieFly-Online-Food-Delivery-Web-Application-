import React from 'react'

export default function Carousal() {
  return (
   
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade"
      data-bas-ride="carousel" style={{objectFit:"contain !important"}}>
    <div className="carousel-inner" id='carousel'>
      <div className='carousel-caption' style={{zIndex:"10"}}>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white " type="submit">Search</button>
    </form>
      </div>
      <div className="carousel-item active">
        <img src="https://media.istockphoto.com/id/617759204/photo/steakhouse-double-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=QRaHtrxJsmNKOlOTkvxyE-o-3kM-Me1zU320yPT8ycI=" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA=" className="d-block w-100" style={{filter:"brightness(50%)"}}alt="..."/>
      </div>
      <div className="carousel-item">
        <img src=" https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY=" className="d-block w-100" style={{filter:"brightness(50%)"}}alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}
