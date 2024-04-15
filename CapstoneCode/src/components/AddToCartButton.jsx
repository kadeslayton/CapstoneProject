

export default function CartButton({product, setCart, cart}){

function addToCart(e){
  try{
    console.log(cart)
    let copy = cart
    
    if(copy.find((prod)=>{ return prod.productId===product.id})){
      for(let i = 0; i < copy.length; i++){
        if(copy[i].productId === product.id){
          copy[i].quantity = copy[i].quantity +1
          console.log(copy) 
    }}
    }else{
      copy.push({productId: product.id, quantity: 1})
    }
    return setCart(copy)
    console.log(cart)
  }catch(error){
    console.log(error)
  }
}


  return(
    <>
    <div>
      <button onClick={addToCart}>Add 1 to Cart</button>
    </div>
    </>
    
    )};