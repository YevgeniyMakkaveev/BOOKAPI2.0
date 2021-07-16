export default class GetApi{

 getItem =()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 }

 testit=(...props)=>{
  console.log(props)
 }
//https://www.googleapis.com/books/v1/volumes?q=${tearm}+orderBy=${priority}+subject=${field}:keyes&key=AIzaSyAse8WG5nA-_-AdTK_4wpa4CUF5fmqc8zE
 async getNormalBooks(tearm, field, priority) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${tearm}&maxResults=40&orderBy=${priority}&subject=${field}:keyes&key=AIzaSyAse8WG5nA-_-AdTK_4wpa4CUF5fmqc8zE`)
 
  if (!res.ok) {
  throw new Error(`Could not fetch data, recieved ${res.status}`)
 }
 return await res.json()
 }


}