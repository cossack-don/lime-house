// шаблон для А4 PDF
import { pdf } from '@/utils';
import { storeDataForm } from '@/stores/storeDataForm';



export const generationPDF = () => {
 const stateDataForm = storeDataForm().$state;
 // TODO Заголовок в документе
 pdf.setFont("PT_Sans-Web-Italic", 'normal');
 pdf.setFontSize(20);
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
 pdf.text("Список приоритетных условий, при покупке недвижимости", 105, 15, null, null, 'center');

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.setFontSize(14);
 pdf.text('Название застройщика:', 10, 40);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.developerName}`, 10, 48);

 // Максимальная сумма жилья
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Максимальная сумма жилья -", 100, 40);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.maximumApartmentAmount} руб.`, 166, 40);

 pdf.setTextColor("blue");
 pdf.textWithLink("Сайт застройщика - ссылка", 10, 58, {
  url:`${stateDataForm.dataForm.urlDeveloperName}`
 });

 // Процентная ставка
 pdf.setTextColor("black");
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Процентная ставка -", 100, 50);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.interestRate}`, 146, 50);

 //Телефон
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Телефон: ", 10, 68);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.phone}`, 32, 68);
 //Первоначальный взнос
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Первоначальный взнос -", 100, 60);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.downPayment}`, 155, 60);

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Комментарий о застройщике:", 10, 78);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize(`${stateDataForm.dataForm.commentsDeveloper}`, 66),
     10, 85);

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Срок ипотеки -", 100, 70);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.mortgageTerm}`, 133, 70);


 // Список критериев
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок:", 10, 130);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 136);

 // Список критериев 2
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок2:", 10, 160);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 166);

 // Список критериев 3
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок3:", 10, 190);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 196);

 // Список критериев 4
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок4:", 10, 220);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 226);

 // Список критериев 5
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 250);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 256);

 // Список критериев 5
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 280);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 286);


 pdf.addPage("a4");
 // Список критериев 5
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 20);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 26);
 // pdf.text(storeDataForm().$state.dataForm.phone, 20, 60);
 pdf.save("a4.pdf");

}

//
// Структура документа PDF
//
// page - 1
//
//  Заголовок по центру жирным
// __________________________________________________________________
//  Название застройщика - ГК ПИК                 Максимальная сумма жилья - 10 000 000 руб.
//  Сайт застройщика - https://www.pik.ru/       Процентная ставка - 15.6 %
//  Контактный телефон - 8-933-003-00-22         Первоначальный взнос - 15% или 1 500 000 руб.
//  Комментарий о застройщике:                   Срок ипотеки - 30 лет ( например 20 месяцев)
//  ТЕКСТ                                        Переплата - 10 000 000 руб.
//
//
// page - 2
//
// Колличество квадратных местров в квартире:
// описание
// ___________________________________________
//
// Расположение транспорта:
// описание
// ____________________________________________
//
// и т.д.
//
//
