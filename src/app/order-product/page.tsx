"use client";
import React from 'react';
import { useRouter } from 'next/navigation';


function OrderProduct() {
  const router = useRouter();
  function handleClick(){
    console.log('Placing your order');
    router.replace('/');
  }
  return (
    <div>
      <h3>Order Product</h3>
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default OrderProduct