const BASE_URL = `https://www.themealdb.com/api/json/v1/1`

export const getData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories.php`)
    return data.categories
  } catch (error) {
    console.log(error)
  }
}

export const getDetailCategory = async (param) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/filter.php?c=${param}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDetailFood = async (param) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${param}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }