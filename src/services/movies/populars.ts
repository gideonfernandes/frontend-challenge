import api from '../base'
import { IMovie } from '../../libs/interfaces/contexts'
import { IResponse, ITheMovieDBListResponse } from '../../libs/interfaces/services'
import { URLS } from '../../constants'
import movieHelpers from './helpers'

export default async function listPopulars(): Promise<IResponse<IMovie[]>> {
  try {
    const response = await api.client.get<ITheMovieDBListResponse<IMovie[]>>(URLS.POPULARS)

    const preparedResponse = await movieHelpers.prepareMovies(response.data.results)

    return api.response.success(preparedResponse, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
