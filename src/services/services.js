import {axiosInstance} from './instance'

export async function getProducts(limit) {
  try {
    const res = await axiosInstance.get(`/products${limit ? '?_limit=' + limit : ""}`)
    return res.data
  } catch (error) {
    return error
  }
}