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
    },
    actions:{
        setNumbers() {

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.dataForm.maximumApartmentAmount = new Intl.NumberFormat('fr-FR').format(this.dataForm.maximumApartmentAmount)
            // console.log(disp)
        // =  this.dataForm.maximumApartmentAmount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
            const a = this.dataForm.maximumApartmentAmount.split('')
            console.log()
            if(a.length >= 4) {
                a.push(' ')
            }
            console.log(a)
        }
    },
    getters: {
        doubleCount(state) {
            return state.dataForm.maximumApartmentAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    }
})