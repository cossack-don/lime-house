import { IDataForm } from '@/stores/interfaces/formData'

export const dataForm:IDataForm = {
    developerName:'ПИК', // название застройщика
    urlDeveloperName:'www.test.ru', // ссылка на застройщика или их предлжения - url
    phone:'+7-933-111-22-22', // телефон контактный
    commentsDeveloper:'test', // комментарий о застройщике
    maximumApartmentAmount:'6000000', // максимальная сумма квартиры
    interestRate:'13', // процентная ставка
    mortgageTerm: '', // срок ипотеки
    downPayment:'1500000', // первоначальный взнос
}
