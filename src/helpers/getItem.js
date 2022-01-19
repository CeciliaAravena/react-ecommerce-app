import data from '../dataList/Data.json'

 export const getItem = new Promise((resolve) => {
     setTimeout(() => {
         resolve(data[0])
     }, 2000)

     // console.log('getItem data', data[0]);
 }) 