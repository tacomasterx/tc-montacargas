import {html2pdf} from 'html2pdf.js';

function savePdf() {
    let element = document.getElementById("pdf");
    html2pdf(element);
}

export default savePdf;
