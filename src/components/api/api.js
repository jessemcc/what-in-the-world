import axios from 'axios';

const BASE_URL = 'https://restcountries.com/';
const version = 'v3.1/';
const query = 'all';
const url = `${BASE_URL}${version}${query}`;

const getCountries = () => {
    axios
    .get(url)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error);
    }) 
}

export default getCountries;