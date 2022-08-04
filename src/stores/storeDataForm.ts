import { defineStore} from 'pinia'
import { listlistCriterial } from '@/stores/dataComments'
import { dataForm } from "@/stores/dataForm";

export const storeDataForm = defineStore("dataForm", {
    state: () => {
        return {
            dataForm:{
                // Block-first-form
                listlistCriterial,
                // Block-second-form
                dataForm
            }
        }
    }
})