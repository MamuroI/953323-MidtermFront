import axios from "axios";

export const URL = 'http://localhost:8080'

export const client = axios.create({
    baseURL: URL,
    
})

const getStock = (token) => {
    return client.get(`/stock`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const buyCoin = (token, data) => {
    console.log('api data',data)
    return client.post(`/buy`,
        {
            id: data.userid,
            coinAmount: data.selectBuyAmount
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    
}

const getInfo = (token,id) => {
    return client.get(`/getInfo/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const sellCoin = (token, data) => {
    return client.post(`/sell`,
    {
        id: data.userid,
        coinAmount: data.selectSellAmount,
        money: data.perCoin
    }, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
}

export {getStock, buyCoin, getInfo, sellCoin};