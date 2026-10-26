export interface IStrapiResponse<T> {
  data: T
  meta?: Meta
}

export interface IMedia {
    id: number
    url: string
    alternativeText?: string
}

export interface IGame {
  id: number
  documentId: string
  title: string
  description?: Description[]
  rating?: number
  price?: number
  genre?: string
  releaseDate?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover?: IMedia
}

export interface Description {
  type: string
  children: Children[]
}

export interface Children {
  text: string
  type: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}