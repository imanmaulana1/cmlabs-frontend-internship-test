export const openDrawerMenu = () => {
  document.querySelector('.categories-wrapper').classList.add('show')
  document.querySelector('.hero-cta')
    ? document.querySelector('.hero-cta').classList.remove('animation')
    : null
  document.querySelector('body').style.overflow = 'hidden'
}

export const closeDrawerMenu = () => {
  document.querySelector('.categories-wrapper').classList.remove('show')
  document.querySelector('.hero-cta')
    ? document.querySelector('.hero-cta').classList.add('animation')
    : null
  document.querySelector('body').style.overflow = 'auto'
}

export const listSideBar = (nameCategory) => {
  const liElement = document.createElement('li')
  liElement.classList.add('categories-body-item')

  const aElement = document.createElement('a')
  aElement.innerText = nameCategory
  aElement.href = './detail_category.html'
  aElement.addEventListener('click', () => {
    localStorage.setItem('categoryName', nameCategory)
  })

  liElement.appendChild(aElement)
  document.querySelector('.categories-body').appendChild(liElement)
}

export const gridImageCategories = (nameCategory, imageCategory) => {
  const divElement = document.createElement('div')
  divElement.classList.add('box-food')
  divElement.style.backgroundImage = `url('${imageCategory}')`
  divElement.addEventListener('click', () => {
    localStorage.setItem('categoryName', nameCategory)
    window.location.href = './detail_category.html'
  })

  const spanElement = document.createElement('span')
  spanElement.classList.add('box-food-label')
  spanElement.innerText = nameCategory

  divElement.appendChild(spanElement)
  document.querySelector('.category-grid')?.appendChild(divElement)
}

export const gridImagesFilterCategory = (
  nameFilterCategory,
  imageFilterCategory,
  idMeal,
) => {
  const boxWrapper = document.createElement('div')
  boxWrapper.classList.add('box-detail-food-wrapper')

  const divElement = document.createElement('div')
  divElement.classList.add('box-detail-food')
  divElement.style.backgroundImage = `url('${imageFilterCategory}')`
  divElement.addEventListener('click', () => {
    localStorage.setItem('foodName', nameFilterCategory)
    localStorage.setItem('idFood', idMeal)
    window.location.href = './detail_meal.html'
  })

  const spanElement = document.createElement('span')
  spanElement.classList.add('label-detail-food')
  spanElement.innerText = nameFilterCategory

  divElement.appendChild(spanElement)
  boxWrapper.appendChild(divElement)
  document.querySelector('.detail-category-grid').appendChild(boxWrapper)
}
