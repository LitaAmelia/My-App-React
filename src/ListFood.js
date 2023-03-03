import FoodItem from "./FoodItem";

export const ListFood = () => {
    return (
      <div>
        {/* <div className="food-item">
          <h2>Tahu</h2>
          <p>Rp. 3000</p>
        </div> */}
        <FoodItem harga="5000">Tempe</FoodItem>
        <FoodItem harga="1000">Tahu</FoodItem>
        <FoodItem harga="3000">Sambal Kacang</FoodItem>
        <FoodItem harga="5000">Susu Kedelai</FoodItem>
      </div>
    )
  }

export default ListFood;