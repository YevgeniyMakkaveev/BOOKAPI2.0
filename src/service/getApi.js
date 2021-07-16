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
 async getNormalBooks(tearm, field, priority, index) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${tearm}&startIndex=${index}&maxResults=30&orderBy=${priority}&subject=${field}:keyes&key=AIzaSyAse8WG5nA-_-AdTK_4wpa4CUF5fmqc8zE`)
  console.log(`tearm=${tearm}startIndex=${index}orderBy=${priority}&subject=${field}`)
 
  if (!res.ok) {
  throw new Error(`Could not fetch data, recieved ${res.status}`)
 }
 return await res.json()
 }

 async getSingleBook(link){
  const res = await fetch(link)
  if (!res.ok) {
   throw new Error(`Could not fetch data, recieved ${res.status}`)
  }
  return await res.json()
 }

}