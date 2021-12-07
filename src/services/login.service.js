import axios from 'axios'

const baseUrl = process.env.REACT_APP_URL_LOGIN;

const login = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { login }