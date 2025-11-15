import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>
      
      <div className='top'>
        <img
          src={props.brand}
          alt='logo'
          style={{ width: "60px", height: "auto", objectFit: "contain" }}
        />
        <button>Save</button>
      </div>

      <div className='center'>
        <h3>{props.title} <span>{props.posted}</span></h3>
        <h2>{props.role}</h2>
        <div>
          <h4>{props.role1}</h4>
          <h4>{props.role2}</h4>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <div>
            <h3>{props.payout}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
