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
                pushMessage,
                isError: false as boolean,
                isErrorPushMessage: false as boolean,
                isSuccessPushMessage: false as boolean,
        }
    },
    actions:{
        setPushMessage(payload: IPushMessage) {
            this.pushMessage.toggle = payload.toggle
            this.pushMessage.description = payload.description
            this.pushMessage.title = payload.title
        },
        setError(value: boolean) {
            this.isError = value
        },
        setErrorPushMessage() {
            setTimeout(() => {
                this.isErrorPushMessage = false
            }, 2000)
            this.isErrorPushMessage = true
        },
        setSuccessPushMessage() {
            setTimeout(() => {
                this.isSuccessPushMessage = false
            }, 2000)
            this.isSuccessPushMessage = true
        }
    },
    getters: {
    }
})