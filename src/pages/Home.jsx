// import React, { useContext, useState } from 'react'
// import Nav from '../components/Nav'
// import Categories from '../category';
// import Card from '../components/Card';
// import  food_items from './food';
// import { dataContext } from '../contact/UserContext';
// import { RxCross2 } from "react-icons/rx";



// function Home () {
// let {cate,setcate,input,showCart,setShowCart} = useContext(dataContext)

// function filter(category){
//   if(category==="All"){
//     setcate(food_items)
//   } else{
//    let newList =  food_items.filter((item) => ( item.food_category===category ))
//     setcate(newList)
//   }
// }

//   return (
//     <div className=' bg-slate-200 w-full min-h-screen '>
//         <Nav/>
// {!input? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
//   {Categories.map((item) => {
//     return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-300 ' onClick={() => filter(item.name)}>
      
//       {item.image}
//       {item.name}
//     </div>
//   })}
// </div> : null }
        


// <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
  
//   {cate.map((item) =>(
//     <Card name={item.food_name} image={item.food_image} 
//     price={item.price} id={item.id} type={item.food_type}
//     />
//   )
  
//   )}
// </div>
// {/*  cart*/}
// <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${showCart?"translate-x-0": "translate-x-full"}`}>
//   <header className='w-[100%] flex justify-between items-center'>
// <span className='text-green-400 text-[18px] font-semibold'>
//   Order items
// </span>
// <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold hover:text-gray-600' onClick={() => setShowCart(false)} />
//   </header>
// </div>


//     </div>
//   )
// }

// export default Home;

import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../category';
import Card from '../components/Card';
import food_items from './food';
import { dataContext } from '../contact/UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { IoMdSad } from "react-icons/io";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  let items = useSelector(state=>state.cart)

  let subtotal = items.reduce((total,item) =>total+item.qty*item.price,0)
  let deliveryFee=20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes)



  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />

      {!input && (
        <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
          {Categories.map((item) => (
            <div
              key={item.name} // ✅ key added
              className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-300'
              onClick={() => filter(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      )}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
       {cate.length>1?cate.map((item) => (
          <Card
            key={item.id} // ✅ key added
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )): <div className='text-green-800 text-xl font-semibold p-8'>No Dish Found...
        <span className='text-green-600 font-bold p-8 flex justify-center items-center'><IoMdSad /> TRY AGAIN</span></div>}
    
      </div>

      {/* Cart */}
      <div className={`w-full  md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-transform duration-300 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>
            Order items
          </span>
          <RxCross2
            className='w-[30px] h-[30px] text-green-400 hover:text-gray-600 cursor-pointer'
            onClick={() => setShowCart(false)} 
          />
        </header>

   {items.length>0? 
  <>

        {/* item */}
<div className='w-full mt-9 flex flex-col gap-2 '>
  {items.map ((item) => (
 <Card2 name={item.name} price={item.price} image={item.image} id={item.id}  qty={item.qty} />
  ))}

</div>

{/* price */}
<div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
<div className='w-full flex justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
  <span className='text-green-400 font-semibold'>Rs{subtotal}/-</span>
  </div>
{/*  */}
<div className='w-full flex justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
  <span className='text-green-400 font-semibold'>{deliveryFee}</span>
  </div>
{/*  */}
<div className='w-full flex justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
  <span className='text-green-400 font-semibold'>Rs{taxes}/-</span>
  </div>
{/*  */}


</div>
{/*  */}
<div className='w-full flex justify-between items-center p-9'>
  <span className='text-2xl text-gray-600 font-semibold'>Total</span>
  <span className='text-green-400  text-2xl font-semibold'>Rs {total}/-</span>
  </div>
       <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green transition-all' 
       >Place order </button>
</>: <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart  </div>
  }      

      </div>
    </div>
  );
}

export default Home;
