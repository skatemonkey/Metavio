// import { useRouter } from "next/router";
import './SidebarLink.css';
import React, { Component } from 'react';

function SidebarLink({ Icon, text, active }) {
  // const router = useRouter();
  return (
    <div
      className='sideicon xl:justify-start space-x-3 '
    >
      <Icon className="h-7" />
      <span className="hidden sidebar_text">{text}</span>
    </div>
  );
}

export default SidebarLink;
