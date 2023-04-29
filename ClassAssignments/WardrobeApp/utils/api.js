import axios from "axios";

const url = "http://localhost:3001";

export const getItems = async () => {
    return await axios.get(`${url}/items`)
}

export const filterItems = async (param) => (
    await axios.get(`${url}/items?description.category=${param}`)
)

export const createNewItem = async (item) => {

    await axios.post(`${url}/items`, {...item})
    console.log(item)
}

export const deleteItem = async (id) => {
    await axios.delete(`${url}/items/${id}`)
}

export const getCategories = async () => (
    await axios.get(`${url}/category`)
)

export const getImages = async () => (
    await axios.get(`${url}/imageUrls`)
)

export const getSizes = async () => (
    await axios.get(`${url}/size`)
)

export const updateWaredrobeItem = async (item) => {
    await axios.put(`${url}/items/${item.id}`, item)
}