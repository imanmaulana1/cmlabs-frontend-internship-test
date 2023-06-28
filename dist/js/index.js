const endpoints = 'https://www.themealdb.com/api/json/v1/1/categories.php'
let myData = []
const getData = async () => {
  try {
    const { data } = await axios.get(endpoints)
    return data.categories
  } catch (error) {
    console.log(error)
  }
}

const main = async () => {
  const res = await getData()
  console.log(res)
}

main()
