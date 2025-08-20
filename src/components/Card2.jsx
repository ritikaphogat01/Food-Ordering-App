import React from 'react'
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RemoveItem , IncrementQty, DecrementQty} from '../redux/cartSlice';
import { useDispatch } from 'react-redux';



function Card2({name,id,price,image,qty}) {
let dispatch = useDispatch()

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
<div className='w-[60%] h-full flex gap-5 '>
  <div className='w-[60%] h-full overflow-hidden rounded-lg'>
    <img src={image} className='object-cover' alt="" />
  </div>
  <div className='w-[40%] h-full flex flex-col gap-3'>
    <div className='text-lg text-gray-600 font-semibold'>{name}</div>
    <div className='w-[110px] h-[50px] bg-slate-300 flex rounded-lg text-xl overflow-hidden shadow-lg font-semibold border-2 border-green-400'>
      <button className='w-[30%] text-green-400 h-full bg-white justify-center items-center hover:bg-gray-300' onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}}>-</button>
      <sapn className='w-[40%]  text-green-400 h-full bg-slate-200 flex justify-center items-center hover:bg-gray-300'>{qty}</sapn>
      <button className='w-[30%]  text-green-400 h-full bg-white justify-center items-center hover:bg-gray-300' onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
    </div>
  </div>
</div>
{/*  */}
<div className='flex flex-col justify-start items-end gap-6'>
 <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
<RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}  />
</div>

    </div>
  )
}

export default Card2