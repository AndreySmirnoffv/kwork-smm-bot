import axios from 'axios';

const response = await axios.post(
    'https://api.coingecko.com/api/v3/simple/price',
    {
            ids: 'twt',
            vs_currencies: 'usd'
    }
);
const tonPrice = response; // Получаем стоимость TON в USD

console.log(tonPrice)