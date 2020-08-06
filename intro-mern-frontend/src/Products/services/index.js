import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProducts () {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response
  } catch (e) {
    console.log(e)
  }
}

export async function saveProduct (productData) {
  try {
    const formData = new FormData()

    formData.append('name', productData.name)
    formData.append('priceUnitary', productData.priceUnitary)
    formData.append('size', productData.size)
    formData.append('description', productData.description)
    formData.append('image', productData.image)

    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'POST',
      data: formData,
    })

    return response
  } catch (e) {
    console.log(e)
  }
}
