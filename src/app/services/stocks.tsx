import api from './api'

export const getAllStocks = async () => {
	const response = await api.get('/stocks')
	return response.data
}

export const getStocksById = async (id: number) => {
	const response = await api.get(`/stocks/${id}`)
	return response.data
}
