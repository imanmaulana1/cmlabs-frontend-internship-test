import { BASE_URL, getData } from './index.js'

const breadcumb = document.querySelector('.detail-category-breadcumb')
const categoryTitle = document.querySelector('.detail-category-title')
const categoryDescription = document.querySelector(
  '.detail-category-description',
)
const categoryGrid = document.querySelector('.detail-category-grid')

const getDetailCategory = async (param) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/filter.php?c=${param}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const init = async () => {
  const breadcumbElement = document.createElement('a')
  breadcumbElement.innerText = localStorage.getItem('categoryName')
  breadcumb.appendChild(breadcumbElement)

  categoryTitle.innerText = localStorage.getItem('categoryName')

  const result = await getData()
  result?.forEach((item) => {
    if (item.strCategory === localStorage.getItem('categoryName')) {
      categoryDescription.innerText = item.strCategoryDescription
    } else {
      return
    }
  })

  const res = await getDetailCategory(localStorage.getItem('categoryName'))
  res?.meals?.forEach((item) => {
    const boxWrapper = document.createElement('div')
    boxWrapper.classList.add('box-detail-food-wrapper')

    const divElement = document.createElement('div')
    divElement.classList.add('box-detail-food')
    divElement.style.backgroundImage = `url('${item.strMealThumb}')`

    const spanElement = document.createElement('span')
    spanElement.classList.add('label-detail-food')
    spanElement.innerText = item.strMeal

    divElement.appendChild(spanElement)
    boxWrapper.appendChild(divElement)
    categoryGrid.appendChild(boxWrapper)
  })
  console.log(res)
  console.log(result)
}

init()
