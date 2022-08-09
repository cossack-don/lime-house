// шаблон для А4 PDF

Данную функцию импортируем в компонент где generate pdf for click button

import STORE
import pdf libs

var doc = new jsPDF();

const export generationPDF = () => {

var doc = new jsPDF();

doc.addImage("examples/images/Octonyan.jpg", "JPEG", 180, 5, 25, 25);

doc.text("All info", 20, 15);

doc.setFont("helvetica", "bold");
doc.text("title.", 20, 30);
doc.setFont("helvetica", "normal");
doc.text("This is client-side Javascript, pumping out a PDF.", 20, 40);

doc.setLineWidth(0.1);
doc.line(20, 20, 170, 20); // horizontal line

doc.setFont("helvetica", "bold");
doc.text("Ttitle", 20, 50);
doc.setFont("helvetica", "normal");
doc.text("This is client-side Javascript, pumping out a PDF.", 20, 60);

doc.setLineWidth(0.1);
doc.line(20, 45, 190, 45); // horizontal line

doc.addPage("a4");

doc.text("page - 2", 20, 15);

  
}


Структура документа PDF 

page - 1

 Заголовок по центру жирным
__________________________________________________________________
 Название застройщика - ГК ПИК       Максимальная сумма жилья - 10 000 000 руб.
 Сайт застройщика - https://www.pik.ru/       Процентная ставка - 15.6 %
 Контактный телефон - 8-933-003-00-22         Первоначальный взнос - 15% или 1 500 000 руб.
 Комментарий о застройщике:                   Срок ипотеки - 30 лет ( например 20 месяцев)
 ТЕКСТ                                        Переплата - 10 000 000 руб.
 
 
page - 2

Колличество квадратных местров в квартире:
описание
___________________________________________

Расположение транспорта:
описание
____________________________________________

и т.д.
 
 
