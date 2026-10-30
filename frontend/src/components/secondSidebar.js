import React from 'react';

import { HiHome } from 'react-icons/hi';
import {AiFillCompass} from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { BsAlarmFill } from 'react-icons/bs';
import { AiOutlineClockCircle} from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';

const SecondSidebar = () => {
  return (
    <div className="second-sidebar w-48 bg-slate-800 text-white list-none pl-12 pt-18 grid gap-7 overflow-y-hidden h-112">
       <HiHome className="home  -translate-x-8 translate-y-12 fill-red-500" /> <div className="link"><li><a href="#">Home</a></li></div> 
       <AiFillCompass className="discover -translate-x-8"/><div className="link -translate-y-12"><li><a href="#">Discovery</a></li></div>
       <ImUsers className="users -translate-x-8 -translate-y-12" /> <div className="discover -translate-y-24"><li><a href="#">Community</a></li></div>
        <BsAlarmFill className="alarm -translate-x-8  -translate-y-24"/><div className="link  border-b-10 -translate-y-36 "><li><a href="#">Coming soon</a></li></div>
        <p className="uppercase -translate-y-32 -translate-x-8  ">library</p>
        <AiOutlineClockCircle className="clock -translate-y-28 -translate-x-8" /><div className="link -translate-y-40">Recent</div>
        <BsBookmark className="book-mark -translate-y-40 -translate-x-8 " /><div className="link  -translate-y-52 ">Bookmarked</div>
        {/* <AiOutlineStar className="star -translate-y-60 -translate-x-8" /><div className="link -translate-y-64">top rated</div> */}
        <BsDownload className="download -translate-y-52 -translate-x-8 " /><div className="link -translate-y-64">dowloaded</div>
        <FiSettings className="settings -translate-y-48 -translate-x-8" /><div className="link -translate-y-60">settings</div>
        <FiHelpCircle className="help -translate-y-60 -translate-x-8" /><div className="link -translate-y-72 ">Help</div>
       

    </div>  
  )
}

export default SecondSidebar;