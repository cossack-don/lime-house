// TODO ПОЧЕМУ ТО ШРИФТЫ РОБОТО И ДРУГИЕ НЕ РАБОТАЮТ, вместо fontAmiriRegular
// https://github.com/MrRio/jsPDF#use-of-unicode-characters--utf-8
// https://codepen.io/kuznetsovvn/pen/jOyWMgq?editors=1010
// https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html

// TODO ссылка где качать шрифты - https://fonts-online.ru/fonts?page=2
// Попробовать дугие установить
// https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html

import { jsPDF } from "jspdf";
import { amiriFont } from "@/utils/fonts/fontAmiriRegular";
import { PTSansWebRegular } from "@/utils/fonts/PTSansWebRegular";
import { PTSansWebBold } from "@/utils/fonts/PTSansWebBold";
import { PTSansWebBoldItalic } from "@/utils/fonts/PTSansWebBoldItalic";
import { PTSansWebRegularItalic } from "@/utils/fonts/PTSansWebRegularItalic";

export  const pdf = new jsPDF( );

// Шрифты, чтобы поддерживал русский язык
// Amiri-Regular
pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
pdf.setFont("Amiri", 'normal');
pdf.setFontSize(14)

// Regular
pdf.addFileToVFS('PT_Sans-Web-Regular-normal.ttf', PTSansWebRegular);
pdf.addFont('PT_Sans-Web-Regular-normal.ttf', 'PT_Sans-Web-Regular', 'normal');
pdf.setFont("PT_Sans-Web-Regular", 'normal');
pdf.setFontSize(14);

// Bold
pdf.addFileToVFS('PT_Sans-Web-Bold-normal.ttf', PTSansWebBold);
pdf.addFont('PT_Sans-Web-Bold-normal.ttf', 'PT_Sans-Web-Bold', 'normal');
pdf.setFont("PT_Sans-Web-Bold", 'normal');
pdf.setFontSize(14);

// Bold italic
pdf.addFileToVFS('PT_Sans-Web-BoldItalic-normal.ttf', PTSansWebBoldItalic);
pdf.addFont('PT_Sans-Web-BoldItalic-normal.ttf', 'PT_Sans-Web-BoldItalic', 'normal');
pdf.setFont("PT_Sans-Web-BoldItalic", 'normal');
pdf.setFontSize(14);

// Regular italic
pdf.addFileToVFS('PT_Sans-Web-Italic-normal.ttf', PTSansWebRegularItalic);
pdf.addFont('PT_Sans-Web-Italic-normal.ttf', 'PT_Sans-Web-Italic', 'normal');
pdf.setFont("PT_Sans-Web-Italic", 'normal');
pdf.setFontSize(14);