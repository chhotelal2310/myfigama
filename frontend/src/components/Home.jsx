import React from 'react'
import "../styles/home.css"
import img from "../right-arrow.png"
import house from "../assets/h.png"
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import flat from "../assets/flat.png"
const Home = () => {
  return (
    <>
      <div className="search">
        <span>CONNECTING DREAMS TO REALITY</span>
        <span style={{ color: "rgba(44, 143, 181, 1)", fontStyle: "italic" }}>
          YOUR PREMIER
        </span>
        <span>REAL ESTATE MARKETPLACE</span>
        <p className="search-end">Where every search ends with a home </p>
        <div className="finder">
          <button className="finder_btn1"> Find Your Home</button>
          <button className="finder_btn2"> List Your Property</button>
        </div>
      </div>
      <div className="house">
        <img src={house} alt="" />
      </div>

      <div className="search" style={{ marginTop: "30px" }}>
        <span>HOW IT WORKS?</span>
        <p className="search-end">Step by Step Guide</p>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={card1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Discover Your Perfect Home</h5>
              <p class="card-text">
                {" "}
                Use our advanced filters to narrow down your search. Specify
                everything from location to amenities, ensuring you find the
                property that feels right.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Learn More</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3" style={{ marginLeft: "400px" }}>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Showcase Your Property</h5>
              <p class="card-text">
                List your property with ease. Fill in detailed forms to
                highlight every feature, attracting the perfect buyer directly.
                Learn More
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Learn More</small>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img src={card2} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={card3} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Connect and Communicate</h5>
              <p class="card-text">
                Our platform facilitates direct communication between buyer and
                seller, making negotiations transparent and straightforward.
                Learn More
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Learn More</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card mb-3"
        style={{ marginLeft: "400px", marginRight: "20px" }}
      >
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Seal the Deal Securely</h5>
              <p class="card-text">
                Advance payments made safe. Secure your agreement with
                confidence, and step closer to your dream property. Learn More
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Learn More</small>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img src={card4} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>

      <div className="why">
        <div className="search" style={{ marginTop: "30px" }}>
          <span>WHY CHOOSE XYZ?</span>
        </div>
        <div class="container">
          <div class="vertical-line"></div>
          <div class="box" >
            <h1 style={{ fontSize: "100px" , color:"#1b2c55"}}>01</h1>
            <h2>SEARCH AND FILTERS</h2>
            <div className='trash'> </div>
            <p>
              Tailored Searches to meet your needs. Find what you're looking for
              with precision.
            </p>
          </div>
          <div class="vertical-line" style={{marginTop:"100px"}}></div>
          <div class="box" style={{marginTop:"100px"}}>
            <h1 style={{ fontSize: "100px", color:"#1b2c55" }}>02</h1>
            <h2>Detailed
 Listings</h2>
 <div className='trash'> </div>
            <p>
              Every Detail Matters. Sellers can list, and buyers can explore
              properties that meet their exact specifications.
            </p>
          </div>
          <div class="vertical-line" style={{marginTop:"200px"}} ></div>
          <div class="box" style={{marginTop:"200px"}} >
            <h1 style={{ fontSize: "100px" ,color:"#1b2c55" }}>03</h1>
            <h2>Direct Messaging</h2>
            <div className='trash'> </div>
            <p>
              Communicate directly with sellers and buyers to discuss properties
              and answer questions.
            </p>
          </div>

          <div class="vertical-line" style={{marginTop:"100px"}} ></div>
          <div class="box" style={{marginTop:"100px"}} >
            <h1 style={{ fontSize: "100px" ,color:"#1b2c55"}}>04</h1>
            <h2>Secure Payments</h2>
            <div className='trash'> </div>
            <p>
              Trust in Every Transaction. Our secure payment system ensures your
              peace of mind.
            </p>
          </div>
        </div>
      </div>



      <div className='why1'>
            <div className='search'>
               <span style={{"marginTop":"100px"}}>YOUR <span style={{fontStyle:"italic" ,fontWeight:"300"}}>TRUSTED</span> PARTNER IN
</span>
      <span> 
THE FUTURE  <span style={{fontStyle:"italic" ,fontWeight:"300"}}>OF HOUSING </span>
</span>
<p style={{width:"800px" , textAlign:"center", color:"#061a44"}}>Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.
Join Our Community Today</p>

            </div>
            <div className="finder addbtn"  >
          <button className="finder_btn1"  >Join Our Community Today</button>
         
        </div>
        <div className="flat">
        <img src={flat} alt="" />
      </div>
      </div>
    </>
  );
}

export default Home
