import axios from "axios"
import type { IGame, IStrapiResponse } from "./Store/types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getGames = async (): Promise<IStrapiResponse<IGame[]>> => {
    const res = await apiInstance.get<IStrapiResponse<IGame[]>>("/games", {
        params: {
            populate: "cover",
        },
    })
    return res.data
}

export const api = { getGames }