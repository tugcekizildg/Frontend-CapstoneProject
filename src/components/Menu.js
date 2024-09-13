import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {

    
    const handleOrder = (id) => {
        console.log(id, "is ordered");
        Swal.fire({
            title: "Are you sure?",
            text: "You will be directed payment page!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been placed.",
                icon: "success"
              });
            }
          });
        }
    
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>

            {/* Menu Items */}  
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.title} />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order a delivery</button>
                        </div>
                        
                    </div>)
}
            </div>
        </div>
    )
}

export default Menu;