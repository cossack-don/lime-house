// шаблон для А4 PDF

// Данную функцию импортируем в компонент где generate pdf for click button
import { pdf } from '@/utils';
import { storeDataForm } from '@/stores/storeDataForm';

export const generationPDF = () => {

 // TODO Заголовок в документе
 pdf.setFont("PT_Sans-Web-Italic", 'normal');
 pdf.setFontSize(20);

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
 pdf.text("Список приоритетных условий, при покупке квартиры", 105, 15, null, null, 'center');

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.setFontSize(14);
 pdf.text('Название застройщика:', 10, 40);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text('ГК ПИК', 10, 48);
 pdf.text("Максимальная сумма жилья - 10 000 000 руб.", 100, 40);

 pdf.setTextColor("blue");
 pdf.textWithLink("Сайт застройщика - кликни", 10, 58, {
  url:'https://www.pik.ru/'
 });
 pdf.setTextColor("black");
 pdf.text("Процентная ставка - 15.6 %", 100, 50);

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Телефон: ", 10, 68);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text("8-933-003-00-22", 32, 68);
 pdf.text("Первоначальный взнос - 15% или 1 500 000 руб.", 100, 60);

 pdf.setFont("PT_Sans-Web-Bold", 'normal');
 pdf.text("Комментарий о застройщике:", 10, 78);
 pdf.setFont("PT_Sans-Web-Regular", 'normal');
 pdf.text( pdf.splitTextToSize('описание-коммент-описание-коммент-описание-коммент-описание-коммент-описание-коммент', 66), 10, 85);
 pdf.text("Срок ипотеки - 30 лет ( например 20 месяцев)", 100, 70);



 pdf.text("Переплата - 10 000 000 руб.", 100, 80);

 // pdf.setFont("helvetica", "bold");
 // pdf.text("ЫЫЫ.", 20, 30);
 // pdf.setFont("helvetica", "normal");
 // pdf.text("This is client-side Javascript, pumping out a PDF.", 20, 40);
 //
 // pdf.setLineWidth(0.1);
 // pdf.line(20, 20, 170, 20); // horizontal line
 //
 // pdf.addImage()лого в правый угол
 // pdf.setFont("helvetica", "bold");
 // pdf.text("Ttitle", 20, 50);
 // pdf.setFont("helvetica", "normal");
 pdf.text(storeDataForm().$state.dataForm.phone, 20, 60);
 pdf.save("a4.pdf");
 // pdf.setLineWidth(0.1);
 // pdf.line(20, 45, 190, 45); // horizontal line
 //
 // pdf.addPage("a4");
 //
 // pdf.text("page - 2", 20, 15);

  
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
