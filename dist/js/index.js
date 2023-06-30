export const BASE_URL = `https://www.themealdb.com/api/json/v1/1`

const drawerMenu = document.querySelector('.categories-wrapper')
const openDrawer = document.querySelector('.nav-links')
const openBar = document.querySelector('.nav-bars')
const closeDrawer = document.querySelector('.close')
const listCategories = document.querySelector('.categories-body')
const gridCategories = document.querySelector('.category-grid')

export const getData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories.php`)
    return data.categories
  } catch (error) {
    console.log(error)
  }
}

const openDrawerMenu = () => {
  drawerMenu.classList.add('show')
  document.querySelector('.hero-cta').classList.remove('animation')
  document.querySelector('body').style.overflow = 'hidden'
}

const closeDrawerMenu = () => {
  drawerMenu.classList.remove('show')
  document.querySelector('.hero-cta').classList.add('animation')
  document.querySelector('body').style.overflow = 'auto'
}

const main = async () => {
  const res = await getData()

  res.forEach((item) => {
    const liElement = document.createElement('li')
    liElement.classList.add('categories-body-item')

    const aElement = document.createElement('a')
    aElement.innerText = item.strCategory
    aElement.href = './detail_category.html'
    aElement.addEventListener('click', () => {
      localStorage.setItem('categoryName', item.strCategory)
    })

    const divElement = document.createElement('div')
    divElement.classList.add('box-food')
    divElement.style.backgroundImage = `url('${item.strCategoryThumb}')`
    divElement.addEventListener('click', () => {
      localStorage.setItem('categoryName', item.strCategory)
      window.location.href = './detail_category.html'
    })

    const spanElement = document.createElement('span')
    spanElement.classList.add('box-food-label')
    spanElement.innerText = item.strCategory

    liElement.appendChild(aElement)
    listCategories.appendChild(liElement)
    divElement.appendChild(spanElement)
    gridCategories?.appendChild(divElement)
  })

  openBar.addEventListener('click', openDrawerMenu)
  openDrawer.addEventListener('click', openDrawerMenu)
  closeDrawer.addEventListener('click', closeDrawerMenu)
}

main()
