import axios from 'axios'

function getUsers(){
	return (axios.get('https://jsonplaceholder.typicode.com/users')
		.then(({data}) => {data})
)}
export default getUsers