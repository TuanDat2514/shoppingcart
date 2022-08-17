export interface Item{
  id: number|string,
  title:string,
  ingredient:string,
  price:number,
  img:string,

}

export const _item:Item[]=[
  {id:1,title:"Original",ingredient:"Tomato sauce, mozzarella & oregano",price:18,img:"./assets/images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg"},
  {id:2,title:"Salami",ingredient:"Tomato sauce, mozzarella & mild salami",price:15,img:"./assets/images/sdw.jpg"},
  {id:3,title:"Hawaiian",ingredient:"Tomato sauce, mozzarella, ham & pineapple",price:16,img:"./assets/images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg"},
  {id:4,title:"Chicken",ingredient:"Tomato sauce, mozzarella, chicken, pineapple & bbq sauce","price":25,img:"./assets/images/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg"}
]



// var json_data='[{"id":1,"title":"Original","ingredient":"Tomato sauce, mozzarella & oregano","price":18,"img":"images/3981417.jpg"},{"id":2,"title":"Salami","ingredient":"Tomato sauce, mozzarella & mild salami","price":15,"img":"images/sdw.jpg"},{"id":3,"title":"Hawaiian","ingredient":"Tomato sauce, mozzarella, ham & pineapple","price":16,"img":"images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg"},{"id":4,"title":"Chicken","ingredient":"Tomato sauce, mozzarella, chicken, pineapple & bbq sauce","price":25,"img":"images/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg"}]';
