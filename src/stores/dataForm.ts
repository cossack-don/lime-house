import { IDataForm } from '@/stores/interfaces/formData'

export const dataForm:IDataForm = {
    developerName:'', // название застройщика
    urlDeveloperName:'', // ссылка на застройщика или их предлжения - url
    phone:'+7', // телефон контактный
    commentsDeveloper:'', // комментарий о застройщике
    maximumApartmentAmount:'', // максимальная сумма квартиры
    interestRate:'', // процентная ставка
    mortgageTerm: '', // срок ипотеки
    downPayment:'', // первоначальный взнос
    overpayment:'', // переплата
}
