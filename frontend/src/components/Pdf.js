import React from "react";
import html2canvas from "html2canvas";
// eslint-disable-next-line
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

const PDF = () => {
  
  // ////////////////////***********single page pdf**********//////////////
  //  const div2PDF = e => {
  //     const but = e.target;
  //     // but.style.display = "none";
  //     let input = window.document.getElementsByClassName("div2PDF")[0];
  //     html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF({
  //         orientation: 'A4',
  //         unit: 'cm',
  //           // format: [heightCM, 50]
  //         format: 'a4'
  //       });

  //       const imgProps= pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //       pdf.save('graphs.pdf');
  //     });
  // }

  // *********   html2pdf ************//
  // const div2PDF = e => {
  // let input = window.document.getElementsByClassName("div2PDF")[0];
  // // config from your example
  // html2pdf()
  //   .from(input)
  //   .set({
  //     margin: [25, 15, 15, 15],
  //     filename: "download.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: {
  //       scale:  2,
  //       dpi: 192, letterRendering: true, width: 1024, height: 1448
  //     },
  //     jsPDF: { unit: "mm", format: "a4", orientation: "p" },
  //     pagebreak: { after: ".page-break", avoid: "table" },
  //   })
  //   .toPdf()
  //   .get("pdf")

  //   .then(function (pdf) {
  //     var totalPages = pdf.internal.getNumberOfPages();
  //     for (let i = 1; i <= totalPages; i++) {
  //       pdf.setPage(i);
  //       pdf.setFontSize(8);
  //       pdf.setTextColor(150);
  //       pdf.text(15, 15, "Header");
  //       pdf.text(
  //         'Footer' +
  //           i +
  //           "/" +
  //           totalPages +
  //           "",
  //         pdf.internal.pageSize.getWidth() - 85,
  //         pdf.internal.pageSize.getHeight() - 8
  //       );
  //     }
  //   })
  //   .save();
  // };

  //******* multipage html2canvas********* //

  const div2PDF = (e) => {
    let input = window.document.getElementsByClassName("div2PDF")[0];
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const doc = new jsPDF("p", "mm");
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      html2pdf().set({
        pagebreak: { before: "#page-break", after: ["#page-break", "#after2"] },
      });
      var totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(10);
        doc.text(15, 15, "Header");
        doc.text(
          "Page:" + i + "/" + totalPages + "",
          doc.internal.pageSize.getWidth() - 25,
          doc.internal.pageSize.getHeight() - 8
        );
      }

      doc.save("download.pdf");
    });
  };

  return (
    <div>
      <div>
        {/* <button className="btn btn-primary" onClick={(e) => this.div2PDF(e)}>Export 2 PDF</button> */}
        <button className="btn btn-primary" onClick={div2PDF}>
          Export 2 PDF
        </button>
      </div>
    </div>
  );
};

export default PDF;
