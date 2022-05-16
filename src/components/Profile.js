import React, { useState } from 'react'

const Profile = () => {
    
   var [name,setName]=useState("Sneha")
  const changeName=()=>{
  setName(
      name="Sanvi"
  )

    }
  return (
    <div>Logged in as {name}
    <button className='btn btn-success' onClick={changeName}>
   Change Name
    </button>
    </div>
  )
}

export default Profile