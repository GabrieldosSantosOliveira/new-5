import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.gabrieldos7.repl.co'
})

export default api