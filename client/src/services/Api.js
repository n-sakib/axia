import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: `http://localhost:8081`
    baseURL: `https://axia-backend.herokuapp.com/`
  })
}
