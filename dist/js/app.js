import { getData } from './handler.js'
import {
  openDrawerMenu,
  closeDrawerMenu,
  listSideBar,
  gridImageCategories,
} from './index.js'

const openDrawer = document.querySelector('.nav-links')
const openBar = document.querySelector('.nav-bars')
const closeDrawer = document.querySelector('.close')

const main = async () => {
  const res = await getData()

  res.forEach((item) => {
    // Create list sidebar
    listSideBar(item.strCategory)

    // Create box image categories
    gridImageCategories(item.strCategory, item.strCategoryThumb)
  })

  // Show sidebar
  openBar.addEventListener('click', openDrawerMenu)
  openDrawer.addEventListener('click', openDrawerMenu)
  closeDrawer.addEventListener('click', closeDrawerMenu)
}

main()
