import data from '../dataList/Data.json'

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data)
    }, 2000)

    // console.log('getFetch data', data);
}) 