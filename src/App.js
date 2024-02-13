import React, { useRef } from "react";
import Invoice from "./component/Invoice";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function App() {
   
    const exportPDF = () =>{
        const input = document.getElementById("App")
        const useCORS = true;  
        html2canvas(input, {logging: true, letterRendering: 1, useCORS}).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height = imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("Invoice.pdf");


        })

        
       
      }
      
 return(
<div className="App">


          <button onClick={() => exportPDF()}>Print PDF</button>
<header id="App" className="App-header">  
    <Invoice />
</header>
        
  
</div>
 )
}

export default App;
