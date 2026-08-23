# Search Across a Workbook and Navigate to a Worksheet and Cell in React Spreadsheet

This sample demonstrates how to implement **workbook-wide search and navigation** in the Syncfusion React Spreadsheet component using the `findAll` and `goTo` APIs.

## Features

- Search for text across all worksheets in a workbook.
- Display all matching occurrences with worksheet and cell references.
- Navigate directly to the selected worksheet and cell with a single click.
- Provide a user-friendly search panel for reviewing search results.
- Improve navigation and data discovery in large workbooks.

## How It Works

1. Load an Excel workbook into the Syncfusion React Spreadsheet component.
2. Use the `findAll` API with the **Workbook** search scope to retrieve matching records across all worksheets.
3. Display the returned results in a custom search panel.
4. Use the `goTo` API to navigate directly to the selected worksheet and cell.
5. Clear search results and reset the search panel when needed.

## Key APIs Used

- `findAll()` - Searches for matching values across all worksheets in the workbook.
- `goTo()` - Activates the specified worksheet and navigates to the target cell.
- `open()` - Loads an Excel workbook into the Spreadsheet component.

## Running the Sample

### Install Dependencies

```bash
npm install
```

### Run the Sample

```bash
npm run dev
```

After the application starts, open the URL displayed in the terminal in your browser.

## Use Cases

- Searching data across multiple worksheets.
- Quickly locating records in large workbooks.
- Building custom workbook search and navigation experiences.
- Enhancing productivity and accessibility for spreadsheet users.

## References

- **Live Demo:** [cell-navigation](https://ej2.syncfusion.com/products/react/spreadsheet/cell-navigation/)
- **Documentation**: [Find and Replace in React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/searching)
