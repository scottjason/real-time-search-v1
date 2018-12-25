import axios from 'axios';

const onSucess = res => {
  return res.data;
}
const onError = err => console.log('api request error', err);

export const fetchByTerm = term => {
  term = term.length ? term : 'random';
  const url = `https://api.unsplash.com/search/photos?&query=${term}&page=1&per=15&client_id=4cce02a6e491787a97e925dc09dd54231d7e445925e4c3dee68d2832f5542c08&rel=next`;
  let promise = axios.get(url);
  return promise.then(onSucess, onError);
}

