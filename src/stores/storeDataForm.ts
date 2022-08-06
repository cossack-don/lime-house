import { defineStore} from 'pinia'
import { dataComments } from '@/stores/dataComments'
import { dataForm } from "@/stores/dataForm";

export const storeDataForm = defineStore("dataForm", {
    state: () => {
        return {
                // Block-first-form
                dataComments,
                // Block-second-form
                dataForm
        }
    }
})