export default class GetApi{

 async getNormalBooks(tearm, field, priority, index) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${tearm}&startIndex=${index}&maxResults=30&orderBy=${priority}&subject=${field}:keyes&key=AIzaSyAse8WG5nA-_-AdTK_4wpa4CUF5fmqc8zE`)
  if (!res.ok) {
  throw new Error(`Could not fetch data, recieved ${res.status}`)
 }
 return await res.json()}

 async getSingleBook(link){
  const res = await fetch(link)
  if (!res.ok) {
   throw new Error(`Could not fetch data, recieved ${res.status}`)
  }
  return await res.json()
 }
}