import { useState } from "react";
import FoodItem from "./FoodItem";

export const ListFood = () => {
    const [initialFood, setInitialFood] =useState('');
    const [foods, setFoods] = useState([
        {
            id : Math.random(),
            namaMakanan : "Tempe",
            harga: "5000"
        },
        {
            id : Math.random(),
            namaMakanan : "Tahu",
            harga: "1000"
        },
        {
            id : Math.random(),
            namaMakanan : "Sambal Kacang",
            harga: "3000"
        },
        {
            id : Math.random(),
            namaMakanan : "Susu Kedelai",
            harga: "4000"
        }
    ])

    function addFoods(e) {
        setInitialFood(e.target.value)
    }
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            setFoods([
                ...foods, 
                {
                    id: Math.random(), 
                    namaMakanan: initialFood, 
                    harga:"10000"
                }
            ])
            setInitialFood('');
        }}
        >
            <input value={initialFood} type="text" onChange={addFoods}/>
        </form>
        {
            foods.map(food => <FoodItem key={food.id} harga={food.harga}>{food.namaMakanan}</FoodItem>)
        }
      </div>
    )
  }

export default ListFood;