
import Invoice from './component/Invoice';
import html2canvas from "html2canvas";

import jsPDF from "jspdf";

function App() {
 
  const exportPDF = () =>{
    const input = document.getElementById("App")
    html2canvas(input, {logging: true, letterRending: 1, useCORS: true}).then(canvas => {
      const imgWidth = 208;
      const imgHeight =canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Invoice.pdf');

    })

   
  }
  return (

  
   
   <div className="App">
    <button onClick={() => exportPDF}>print PDF</button>
    <header id="App" className="App-Header">
       <Invoice/>
       </header>
   
        </div>
  );
}

export default App;
