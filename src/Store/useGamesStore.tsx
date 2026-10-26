import { create } from "zustand";
import type { IGame, IStrapiResponse } from "./types";
import { api } from "../api";

interface IGameStore {
    games: IStrapiResponse<IGame[]> | undefined,
    getGames: () => void
}

export const useGamesStore = create<IGameStore>((set) => 
    ({
    games: undefined,
    getGames: async () => {
        try {
            const res = await api.getGames()
            set({games: res})
        } catch (error) {
            console.error(error)
        }
    },
}))