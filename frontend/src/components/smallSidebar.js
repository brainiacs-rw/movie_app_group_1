import React from 'react'
import './smallSidebar.css';
import {SiNetflix} from 'react-icons/si';
import {SiAppletv} from 'react-icons/si;'

const SmallSidebar = () => {
  return (
    <div className="small-sidebar w-24 bg-black h-96 text-white">
       <SiNetflix className="netflix fill-red-500 "/>
       <SiAppletv />
    </div>
  )
}

export default SmallSidebar;