import { getData, getDetailFood } from './handler.js'
import { openDrawerMenu, closeDrawerMenu, listSideBar } from './index.js'

const openDrawer = document.querySelector('.nav-links')
const openBar = document.querySelector('.nav-bars')
const closeDrawer = document.querySelector('.close')
const breadcumb = document.querySelector('.detail-category-breadcumb')
const breadcumbCategory = document.querySelector('.breadcumb-category')
const mealName = document.querySelector('.detail-category-title')
const mealArea = document.querySelector('.detail-category-subtitle')
const mealImage = document.querySelector('.detail-meal-image')
const mealInstruction = document.querySelector('.detail-meal-instruction')
const mealVideo = document.querySelector('.detail-meail-video')
const mealRecipes = document.querySelector('.recipe-item')

const init = async () => {
  // Create list sidebar
  const result = await getData()
  result?.forEach((item) => {
    listSideBar(item.strCategory)
  })

  // Create breadcumb
  breadcumbCategory.innerText = localStorage.getItem('categoryName')
  const breadcumbElementMeal = document.createElement('a')
  breadcumbElementMeal.innerText = localStorage.getItem('foodName')
  breadcumb.appendChild(breadcumbElementMeal)

  // Hit API detail meal
  const res = await getDetailFood(localStorage.getItem('idFood'))
  res?.meals?.forEach((item) => {
    mealName.innerText = item.strMeal
    mealArea.innerText = `${item.strArea} Culinary`
    mealInstruction.innerText = item.strInstructions
    mealImage.setAttribute('src', item.strMealThumb)
    mealVideo.setAttribute('src', item.strYoutube)

    // Filter key
    const filtered = Object.fromEntries(
      Object.entries(item).filter(([key]) => key.includes('strMeasure')),
    )

    for (const [index, [key, value]] of Object.entries(
      Object.entries(filtered),
    )) {
      if (value) {
        const listRecipe = document.createElement('li')
        listRecipe.innerText = `${value} `
        mealRecipes.appendChild(listRecipe)
      }
    }
  })

  //   Show sidebar
  openBar.addEventListener('click', openDrawerMenu)
  openDrawer.addEventListener('click', openDrawerMenu)
  closeDrawer.addEventListener('click', closeDrawerMenu)
}

init()
