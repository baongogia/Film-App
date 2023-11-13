import React from 'react'
import GGLogout from './GGLogout'

function User({name, show, avatar}) {
  return (
    <div className="user-profile hidden ml-[12em]">
    <div className="absolute w-[14em] h-[5em] bottom-0 mb-3 right-2 flex items-center justify-around z-1">
      <div className="font-bold text-[1.4em] text-main">
        Hi {name} !
      </div>
      <img
        onClick={show}
        src={avatar}
        alt=""
        id="avatar"
        className="w-[2.8em] rounded-full  cursor-pointer"
      />
    </div>
    {/* Infor */}
    <div className=" infor-box absolute top-[5em] right-6 w-[8em] h-[6.9em] bg-dark z-10 rounded-sm border-[0.2em] border-solid border-main opacity-0">
      <ul className="">
        <li className="font-bold pl-3 hover:text-main cursor-pointer">
          Account
        </li>
        <li className="font-bold pl-3 border-t-2 hover:text-main cursor-pointer">
          Profile
        </li>
      </ul>
      <GGLogout />
    </div>
  </div>
  )
}

export default User