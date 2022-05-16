import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Student = props => {

var [name,setName]=useState("Rahul")
var [age,setAge]=useState("32")
var [college,setCollege]=useState("Mount Zion College of Engineering")

const changeValues=()=>
{
  setName(name="Sanvi")
  setAge(age="24")
  setCollege(college="College of Applied Science")
}

  return (
    <div>
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
        <label for="" className="form-label">Name</label><br></br>
        <label for="" className="form-label">{name}</label>
    </div>

    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Age</label><br></br>
        <label for="" className="form-label">{age}</label>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">College</label><br></br>
        <label for="" className="form-label">{college}</label>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary" onClick={changeValues}>CHANGE</button>
    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

Student.propTypes = {}

export default Student