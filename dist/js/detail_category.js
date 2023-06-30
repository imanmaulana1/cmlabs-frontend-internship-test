import { getData, getDetailCategory } from './handler.js'
import {
  openDrawerMenu,
  closeDrawerMenu,
  listSideBar,
  gridImagesFilterCategory,
} from './index.js'

const openDrawer = document.querySelector('.nav-links')
const openBar = document.querySelector('.nav-bars')
const closeDrawer = document.querySelector('.close')
const breadcumb = document.querySelector('.detail-category-breadcumb')
const categoryTitle = document.querySelector('.detail-category-title')
const categoryDescription = document.querySelector(
  '.detail-category-description',
)

const init = async () => {
  // Create breadcumb
  const breadcumbElement = document.createElement('a')
  breadcumbElement.innerText = localStorage.getItem('categoryName')
  breadcumb.appendChild(breadcumbElement)

  categoryTitle.innerText = localStorage.getItem('categoryName')

  // Create list sidebar
  const result = await getData()
  result?.forEach((item) => {
    if (item.strCategory === localStorage.getItem('categoryName')) {
      categoryDescription.innerText = item.strCategoryDescription
    }
    listSideBar(item.strCategory)
  })

  // Create grid box detail food
  const res = await getDetailCategory(localStorage.getItem('categoryName'))
  res?.meals?.forEach((item) => {
    gridImagesFilterCategory(item.strMeal, item.strMealThumb, item.idMeal)
  })

  // Show sidebar
  openBar.addEventListener('click', openDrawerMenu)
  openDrawer.addEventListener('click', openDrawerMenu)
  closeDrawer.addEventListener('click', closeDrawerMenu)
}

init()
