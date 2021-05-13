import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http:HttpClient) { }


  subirArchivo(file :File ){

    const data={
      "title": "11",
    "description": "22",
    "semesterName": "33",
    "course": {
        "id": 4
    },
    "student": {
        "id": 34
    }
    }
    const formData = new FormData();  

    const requestBlob = new Blob([JSON.stringify(data)], { type: "application/json" });

    formData.append("file", file); 
    formData.append("fileInfo",  JSON.stringify(data));  

     this.http.post('http://localhost:8085/api/v1/files/uploadFile', formData).subscribe(res => {
       console.log(res);
       alert('guardado')
    })
  }

  /*
file File
fileInfo {
    "title": "11",
    "description": "22",
    "semesterName": "",
    "course": {
        "id": 4
    },
    "student": {
        "id": 34
    }
}
  localhost:8085/api/v1/files/uploadFile
  
  */
}
