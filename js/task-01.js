const categoriesCount = document.querySelectorAll('li.item').length
console.log(`В списке ${categoriesCount} категорий`)
const categoriesItem = document
  .querySelectorAll('.item h2')
  .forEach((elem) =>
    console.log(
      `Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`,
    ),
  )
