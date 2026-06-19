import axiosInstance from '@/lib/axiosInstance'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { errorToast } from '@/utils/toast'

export const fetchProducts = async (limit = 100) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCTS, {
      params: { limit },
    })
    return response.data
  } catch (error) {
    errorToast(error?.response?.data?.message || 'Failed to fetch products')
    throw error
  }
}

export const searchProducts = async (query) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.SEARCH_PRODUCTS, {
      params: { q: query },
    })
    return response.data
  } catch (error) {
    errorToast(error?.response?.data?.message || 'Search failed')
    throw error
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCT_BY_ID(id))
    return response.data
  } catch (error) {
    errorToast(error?.response?.data?.message || 'Failed to fetch product')
    throw error
  }
}
