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
  {id:5,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/bakery-donut.jpg",category:2},
  {id:6,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/bakery (2).jpg",category:2},
  {id:7,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/bakery.jpg",category:2},
  {id:8,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/hotdog1.png",category:3},
  {id:9,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/hotdog2.jpg",category:3},
  {id:10,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/hotdog3.jpg",category:3},
  {id:11,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/ice cream1.jpg",category:4},
  {id:12,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/icecream2.jpg",category:4},
  {id:13,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/icecreamChocolate.jpg",category:4},

]
export interface Pizza{
  description: string;
  id: number;
  img: string;
  name: string;
  price: number
}


// var json_data='[{"id":1,"title":"Original","ingredient":"Tomato sauce, mozzarella & oregano","price":18,"img":"images/3981417.jpg"},{"id":2,"title":"Salami","ingredient":"Tomato sauce, mozzarella & mild salami","price":15,"img":"images/sdw.jpg"},{"id":3,"title":"Hawaiian","ingredient":"Tomato sauce, mozzarella, ham & pineapple","price":16,"img":"images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg"},{"id":4,"title":"Chicken","ingredient":"Tomato sauce, mozzarella, chicken, pineapple & bbq sauce","price":25,"img":"images/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg"}]';
