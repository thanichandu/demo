fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {

    if(!response.status == 200)
    {
      throw new Error('Response not OK');
    }
    return response.json()
    
  })
  .then(data => {
    console.log(data.title);
    return data;
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


/*async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  })
  return response.json();
} 

postData('https://jsonplaceholder.typicode.com/todos/1', { answer: 42 })
.then((data) => {
  console.log(data);
  return data;
})
.then((data) => {
  console.log(data.title);
})
.catch((err) => {

})*/
  