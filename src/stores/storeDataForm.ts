import { defineStore} from 'pinia'

import { IPushMessage } from '@/stores/interfaces/pushMessage'

import { dataComments } from '@/stores/dataComments'
import { dataForm } from "@/stores/dataForm";
import { pushMessage } from "@/stores/pushMessage";


export const storeDataForm = defineStore("dataForm", {
    state: () => {
        return {
                // Block-first-form
                dataComments,
                // Block-second-form
                dataForm,
                pushMessage
        }
    },
    actions:{
        setNumbers() {
            this.dataForm.maximumApartmentAmount = this.dataForm.maximumApartmentAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        setPushMessage(payload: IPushMessage) {
            this.pushMessage.toggle = payload.toggle
            this.pushMessage.description = payload.description
            this.pushMessage.title = payload.title
        }
    },
    getters: {
        doubleCount(state) {
            return state.dataForm.maximumApartmentAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    }
})