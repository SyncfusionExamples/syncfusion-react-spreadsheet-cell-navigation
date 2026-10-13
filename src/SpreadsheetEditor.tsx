import { useRef } from "react";
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-spreadsheet";
import SpreadsheetSidePanel from "./SpreadsheetSidePanel";
import { Employees, Sales, Inventory } from "./datasource";

const SpreadsheetEditor = () => {
  const spreadsheetRef = useRef<SpreadsheetComponent>(null);
  const sidePanelRef = useRef<{ findRecord: () => void }>(null);

  const onCreated = async () => {
    spreadsheetRef.current?.cellFormat({ fontWeight: 'bold' }, 'Employees!A1:I1');
    spreadsheetRef.current?.cellFormat({ fontWeight: 'bold' }, 'Sales!A1:J1');
    spreadsheetRef.current?.cellFormat({ fontWeight: 'bold' }, 'Inventory!A1:J1');
    const sheetNames = ['Employees', 'Sales', 'Inventory'];
    for (const sheet of sheetNames) {
      spreadsheetRef.current?.goTo(`${sheet}!A1`);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    spreadsheetRef.current?.goTo('Employees!A1');
    setTimeout(() => {
      sidePanelRef.current?.findRecord();
    }, 500);
  };
  return (
    <div className="spreadsheet-layout">
      <div className="spreadsheet-viewer-panel">
        <SpreadsheetComponent
          ref={spreadsheetRef}
          height="670px"
          width="100%"
          created={onCreated}
        >
          <SheetsDirective>
            <SheetDirective name='Employees'>
              <RangesDirective>
                <RangeDirective dataSource={Employees} />
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={90}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={70}></ColumnDirective>
                <ColumnDirective width={50}></ColumnDirective>
                <ColumnDirective width={70}></ColumnDirective>
                <ColumnDirective width={120}></ColumnDirective>
                <ColumnDirective width={90}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
            <SheetDirective name='Sales'>
              <RangesDirective>
                <RangeDirective dataSource={Sales} />
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={80}></ColumnDirective>
                <ColumnDirective width={80}></ColumnDirective>
                <ColumnDirective width={90}></ColumnDirective>
                <ColumnDirective width={125}></ColumnDirective>
                <ColumnDirective width={125}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={55}></ColumnDirective>
                <ColumnDirective width={75}></ColumnDirective>
                <ColumnDirective width={75}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
            <SheetDirective name='Inventory'>
              <RangesDirective>
                <RangeDirective dataSource={Inventory} />
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={70}></ColumnDirective>
                <ColumnDirective width={80}></ColumnDirective>
                <ColumnDirective width={90}></ColumnDirective>
                <ColumnDirective width={125}></ColumnDirective>
                <ColumnDirective width={90}></ColumnDirective>
                <ColumnDirective width={70}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={75}></ColumnDirective>
                <ColumnDirective width={110}></ColumnDirective>
                <ColumnDirective width={75}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      </div>

      <SpreadsheetSidePanel
        ref={sidePanelRef}
        spreadsheetRef={spreadsheetRef}
      />
    </div>
  );
};

export default SpreadsheetEditor;