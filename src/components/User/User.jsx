import React from 'react'
import "./User.css";
function User({user}) {
  return (
      <div className='user__container'>
          <img className='profile__picture' src={user.profile_picture_url} alt="user profile image"/>
          <p><span className='label'>User Name: </span>{user.username}</p>
          <p><span className='label'>First Name: </span>{user.first_name}</p>
          <p><span className='label'>Last Name: </span>{user.last_name}</p>
          <p><span className='label'>Email: </span>{user.email}</p>
          <p><span className='label'>Phone: </span>{user.phone_num}</p>
          <p><span className='label'>Birthday: </span>{user.birthday}</p>
          <p><span className='label'>Refer: </span>{user.refer}</p>
          <p><span className='label'>OTIF Points Balance: </span>{user.otif_points_balance}</p>
    </div>
  )
}

export default User;