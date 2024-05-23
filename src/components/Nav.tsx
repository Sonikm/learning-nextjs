"use  client";
import Link from 'next/link';
import React from 'react';

function Nav() {



  return (
   <nav>
    <div style={{display: "flex", gap:"10px", justifyContent:"space-evenly", alignItems: "center"}}>
        <Link href={'/'}>Logo 🌸</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/blog'}>Blogs</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/docs'}>Docs</Link>
    </div>
   </nav>
  )
}

export default Nav