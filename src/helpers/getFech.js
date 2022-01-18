const products = [
    { 
    id: 1,
    img:"https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
    categoria: 'community manager', 
    name: "basic", 
    price: 3000 
    },
    {
    id: 2,
    img:"https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
    categoria: 'community manager', 
    name: "plus",
    price: 5000 
    },
    {
    id: 3,
    img:"https://res.cloudinary.com/dmvryasce/image/upload/v1640261555/cm_os7phk.png",
    categoria: 'community manager',
    name: "premium", 
    price: 7000 
    },
    {
    id: 4,
    img:'https://res.cloudinary.com/dmvryasce/image/upload/v1640261573/dw_jtydkj.png' ,
    categoria: 'diseño web',
    name: "basic", 
    price: 4999 
    },
    {
    id: 5,
    img:'https://res.cloudinary.com/dmvryasce/image/upload/v1640261573/dw_jtydkj.png' ,
    categoria: 'diseño web', 
    name: "plus", 
    price: 8999 
    },
    {
     id: 6,
     img:'https://res.cloudinary.com/dmvryasce/image/upload/v1640261573/dw_jtydkj.png' ,
     categoria: 'diseño web', 
     name: "premium", 
     price: 10999 
    },
    {
     id: 7,
     img:"https://res.cloudinary.com/dmvryasce/image/upload/v1640261565/media_w7uvjo.png",
     categoria: 'fotografia', 
     name: "basic", 
     price: 4300 
    },
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(products)
     }, 3000)
}) // instanciar un objeto 