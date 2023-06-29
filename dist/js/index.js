const endpoints = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const drawerMenu = document.querySelector('.categories-wrapper')
const openDrawer = document.querySelector('.nav-links')
const openBar = document.querySelector('.nav-bars')
const closeDrawer = document.querySelector('.close')
const listCategories = document.querySelector('.categories-body')

const getData = async () => {
  try {
    const { data } = await axios.get(endpoints)
    return data.categories
  } catch (error) {
    console.log(error)
  }
}

const openDrawerMenu = () => {
  drawerMenu.classList.add('show')
  document.querySelector('.hero-cta').classList.remove('animation')
}

const closeDrawerMenu = () => {
  drawerMenu.classList.remove('show')
  document.querySelector('.hero-cta').classList.add('animation')
}

const main = async () => {
  const res = await getData()
  console.log(res)
  res.forEach((item) => {
    const liElement = document.createElement('li')
    liElement.classList.add('categories-body-item')

    const aElement = document.createElement('a')
    aElement.innerText = item.strCategory

    liElement.appendChild(aElement)
    listCategories.appendChild(liElement)
  })

  openBar.addEventListener('click', openDrawerMenu)
  openDrawer.addEventListener('click', openDrawerMenu)
  closeDrawer.addEventListener('click', closeDrawerMenu)
}

main()
