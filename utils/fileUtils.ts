export const downloadAsExcel = (htmlContent: string, filename: string) => {
  const template = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset='utf-8'>
      <!--[if gte mso 9]>
      <xml>
        <x:ExcelWorkbook>
          <x:ExcelWorksheets>
            <x:ExcelWorksheet>
              <x:Name>Sheet1</x:Name>
              <x:WorksheetOptions>
                <x:DisplayGridlines/>
              </x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
      </xml>
      <![endif]-->
      <style>
        body { font-family: Arial, sans-serif; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; vertical-align: top; white-space: normal; }
        th { background-color: #f2f2f2; }
        .header-row { background-color: #4F46E5 !important; color: #FFFFFF !important; font-weight: bold; }
        .subheader-row { background-color: #a5b4fc !important; color: #1e1b4b !important; font-weight: bold; }
        .data-row:nth-child(even) { background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

  const blob = new Blob([template], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = url;
  a.download = `${filename}.xls`;
  a.click();
  
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
