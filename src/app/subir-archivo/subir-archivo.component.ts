import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  files: File[] = [];

  grande: boolean = false;

  valor: string = 'two';

  form: FormGroup = this.formBuilder.group({
    input1: new FormControl('', [Validators.required]),
    select1: new FormControl(this.valor, Validators.required),
    select2: new FormControl('', [Validators.required]),
    select3: new FormControl('', [Validators.required]),
    select4: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder,
    private uploadService: UploadServiceService) { }

  ngOnInit(): void {

    if (false) {
      console.log(this.form.value.select1);//solo imprime no setea valor
      //setear valores
      this.form.get('select2').setValue("two");

      //this.form.controls.select1.setValue('two')
    }

  }

  onSelect(event) {
    console.log(event);
    if (event.addedFiles[0].size < 50000000) {//50MB=50 000 000
      this.files[0] = event.addedFiles[0];
      this.grande = false;
    } else {
      this.files.splice(this.files.indexOf(event), 1);
      this.grande = true;
      console.log('tamaño no valido')
    }
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  Guardar() {
    this.uploadService.subirArchivo(this.files[0]);
  }


}
