import { IDataForm } from '@/stores/interfaces/formData'

export const dataForm:IDataForm = {
    developerName: '', // название застройщика
    urlDeveloperName: '', // ссылка на застройщика или их предлжения - url
    phone: '+7', // телефон контактный
    propertyLocation: '', // расположение недвижимости - геолакация
    whatCity: '',
    commentsDeveloper: '', // комментарий о застройщике

    maximumApartmentAmount: '', // максимальная сумма квартиры
    interestRate: '', // процентная ставка
    mortgageTerm: '', // срок ипотеки
    downPayment: '', // первоначальный взнос
    wishMonthlyPayment: '', // желаемый ежемесячный платеж
    incomeCustomer: '', // доход семьи/попкупателя
    priceOffer: '', // цена за недвижимость
}
