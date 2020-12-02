import React from 'react';

export default function CartItem({item,value}){
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    
    return(
        
       <div className='row text-center text-capitalize my-1'>
           <div className='col-10 mx-auto col-lg-2'>
               <img src={img} style={{width:'5rem', height:"5rem"}} className='img-fluid' alt='product'  />
           </div>
           <div className='col-10 mx-auto col-lg-2'> 
            <span className='d-lg-none'>product : </span>{title}
           </div>
           <div className='col-10 mx-auto col-lg-2'> 
            <span className='d-lg-none'>price : </span>{price}
           </div>
           <div className='col-10 mx-auto col-lg-2 my-2 my-y-lg-0'>
               <div className='d-flex justify-content-ceenter'> 
                  <div>
                    <span className='btn btn-black mx-1' onClick={()=> decrement(id)}>-</span>
                    <span className='btn btn-black mx-1'>{count}</span>
                    <span className='btn btn-black mx-1' onClick={() => increment(id)}>+</span> 
                   </div> 
                 </div>
            </div>    
           <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>removeItem(id)}>
                 <i className='fas fa-trash'> </i>
                 </div> 
              
              </div>
           <div className='col-10 mx-auto col-lg-2'> 
               <strong>item total : $ {total}</strong>
             </div>
           
          
       </div>
    )
}