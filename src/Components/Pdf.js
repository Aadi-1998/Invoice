import React,{useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import Table from './Table';
import axios from 'axios';
import FileDownload from 'js-file-download';
 
const ExportPdfComponent =()=> {
     
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const download =(e) => {
    e.preventDefault()
    axios ({
      url:"http://localhost:3000/",
      method :"get",
      responseType:"blob"
    }).then((res)=>{
      FileDownload(res.data,"download.pdf")
    })
  }

      return (
        <div>

           

          <Table ref={componentRef} />
          
          <div className="d-grid   ">
            <button className="btn btn-primary m-2 " type="button" onClick={handlePrint}>Print </button>
            <button className="btn btn-primary m-2" type="button" onClick={(e)=>download(e)}>Download</button>

          </div>
        </div>
      );
    
}
 
export default ExportPdfComponent;