export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finallY(() => { console.log('Got a response from the API'); });
}
