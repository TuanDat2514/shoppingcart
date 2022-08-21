export interface Item{
  id: number|string,
  title:string,
  ingredient:string,
  price:number,
  img:string,
  category:number
}

export const _item:Item[]=[
  {id:1,title:"Original",ingredient:"Tomato sauce, mozzarella & oregano",price:18,img:"./assets/images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg",category:1},
  {id:2,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/sdw.jpg",category:1},
  {id:3,title:"Hawaiian",ingredient:"Tomato sauce, mozzarella, ham & pineapple",price:16,img:"./assets/images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg",category:1},
  {id:4,title:"Chicken",ingredient:"Tomato sauce, mozzarella, chicken, pineapple & bbq sauce","price":25,img:"./assets/images/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg",category:1},
  {id:5,title:"Chili Pie",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/istockphoto-1188412964-612x612.jpg",category:2},
  {id:6,title:"BBQ",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/istockphoto-1188412964-612x612.jpg",category:2},
  {id:7,title:"Chessesteak",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/istockphoto-1188412964-612x612.jpg",category:2},
  {id:8,title:"Breakfast",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/istockphoto-1188412964-612x612.jpg",category:2},
]
export interface Pizza{
  description: string;
  id: number;
  img: string;
  name: string;
  price: number
}
export interface Topping{
  id:number;
  name:string;
  options:{
    name: string;
    price:number;
  }[];
 category:number[];
}
export const _topping:Topping[]=[
  {id:1,name:'Cheese',options:[{name:'Extra Cheese',price:0},{name:'Double Cheese',price:4},{name:'Triple Cheese',price:8}],category:[1,2]},
  {id:2,name:'Crust',options:[{name:'Thin Crust',price:0},{name:'Handtossed',price:0},{name:'New York Crust',price:0}],category:[1]},
  {id:3,name:'Meat',options:[{name:'Extra Meat',price:0},{name:'Double Meat',price:5}],category:[2]},
]

