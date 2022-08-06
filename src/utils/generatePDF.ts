// TODO ПОЧЕМУ ТО ШРИФТЫ РОБОТО И ДРУГИЕ НЕ РАБОТАЮТ, вместо fontAmiriRegular
// https://github.com/MrRio/jsPDF#use-of-unicode-characters--utf-8
// https://codepen.io/kuznetsovvn/pen/jOyWMgq?editors=1010
// https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html
import { jsPDF } from "jspdf";
import { amiriFont } from "@/utils/fontAmiriRegular";

export  const pdf = new jsPDF();

// Шрифты, чтобы поддерживал русский язык
pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
pdf.setFont("Amiri", 'normal');
pdf.setFontSize(14)


