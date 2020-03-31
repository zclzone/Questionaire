import request from './request'

export const getQuestions = (params) => request('/api/questions', params, 'GET')
export const getCities = () => request('/api/cities')
