import React, { useState } from "react";
import './App.css';
import * as XLSX from 'xlsx';

function App() {

  const [items, setItems] = useState([])

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {type: 'buffer'});
        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      //console.log(d);
      setItems(d);
    });
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }} 
      />
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Segment</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.items}>
              <th>{d.Segment}</th>
              <td>{d.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default App;
