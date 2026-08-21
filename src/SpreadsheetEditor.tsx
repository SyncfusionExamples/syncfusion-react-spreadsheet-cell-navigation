import { useRef } from "react";
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import SpreadsheetSidePanel from "./SpreadsheetSidePanel";
import './index.css';

const SpreadsheetEditor = () => {
const spreadsheetRef = useRef<SpreadsheetComponent>(null);
const sidePanelRef = useRef<{ findRecord: () => void }>(null);
  // Triggers when the component is created
  const onCreated = () => {
    fetch('/Employees_Sales_Inventory.xlsx')
      .then((response) => response.blob())
      .then((fileBlob) => {
        const file = new File([fileBlob], 'Sample.xlsx');
        spreadsheetRef.current?.open({ file });
      });
  };
  // Triggers when the spreadsheet importing gets completed
  const openComplete = () =>{
    // Trigger the findRecord method on the side panel after the spreadsheet file is successfully opened
    sidePanelRef.current?.findRecord();
  }
  
  return (
    <div className='spreadsheet-layout'>
      <div className='spreadsheet-viewer-panel'>
        <SpreadsheetComponent
          ref={spreadsheetRef}
          height="670px"
          width="100%"
          openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
          saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
          created={onCreated.bind(this)}
          openComplete = {openComplete}
          >
        </SpreadsheetComponent>
      </div>
      <SpreadsheetSidePanel ref={sidePanelRef} spreadsheetRef={spreadsheetRef}/>
    </div>
  );
};

export default SpreadsheetEditor;