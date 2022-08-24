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
 pdf.text("Общая информация о недвижимости", 105, 15, null, null, 'center');

 // TODO Название застройщика
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.setFontSize(14);
 pdf.text('Название застройщика:', 10, 40);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.developerName}`, 10, 48);

 // TODO Максимальная сумма жилья
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Максимальная сумма жилья -", 100, 40);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.maximumApartmentAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`, 166, 40);

 // TODO сайт застройщика
 pdf.setTextColor("blue");
 pdf.textWithLink("Сайт застройщика - ссылка", 10, 58, {
  url:`${stateDataForm.dataForm.urlDeveloperName}`
 });

 // TODO Процентная ставка
 pdf.setTextColor("black");
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Процентная ставка -", 100, 50);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 if(stateDataForm.dataForm.interestRate.length === 3) {
  pdf.text(`${stateDataForm.dataForm.interestRate.replace(/[\s.,%]/g, '')} %`, 146, 50);
 } else {
  pdf.text(`${stateDataForm.dataForm.interestRate} %`, 146, 50);
 }

 // TODO телефон
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Телефон: ", 10, 68);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.phone}`, 32, 68);

 // TODO первоначальный взнос
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Первоначальный взнос -", 100, 60);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.downPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`, 155, 60);

 // TODO Комментарий о застройщике
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Комментарий о застройщике:", 10, 78);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize(`${stateDataForm.dataForm.commentsDeveloper}`, 66),
     10, 85);

 // TODO Срок ипотеки
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Срок ипотеки -", 100, 70);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(`${stateDataForm.dataForm.mortgageTerm} лет`, 133, 70);

 pdf.setFont("PT_Sans-Web-Italic", 'normal');
 pdf.setFontSize(20);
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
 pdf.text("Список приоритетов для покупки недвижимости", 105, 115, null, null, 'center');
 pdf.setFontSize(14);
 // TODO Список критериев - stateDataForm.dataComments
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Колличество м² в квартире:", 10, 130);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize(`${stateDataForm.dataComments[0].comments}`, 180),
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

 // TODO new page
 pdf.addPage("a4");
 // Список критериев 5
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 20);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 26);

 // Список критериев 6
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 50);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 56);

 // Список критериев 7
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 80);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 86);

 // Список критериев 7
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 110);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 116);

 // Список критериев 7
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 140);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 146);

 // Список критериев 7
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 170);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 176);

 // Список критериев 7
 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Заголовок5:", 10, 200);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text(
     pdf.splitTextToSize('ЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовокЗаголовок', 180),
     10, 206);
 // TODO SAVE DOC
 // pdf.text(storeDataForm().$state.dataForm.phone, 20, 60);
 pdf.save("a4.pdf");

}
