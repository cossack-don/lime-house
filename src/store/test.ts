import { defineStore} from 'pinia'

export const useTest = defineStore("products", {
    state: () => {
        return {
            products:[1,23,44]
        }
    }
})