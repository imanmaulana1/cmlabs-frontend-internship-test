import { BASE_URL } from './index.js'

const getDetailCategory = async (param) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/filter.php?c=${param}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
