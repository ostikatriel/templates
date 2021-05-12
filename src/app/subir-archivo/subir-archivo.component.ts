import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  valor:string='two';

  form :FormGroup= this.formBuilder.group({
    input1: new FormControl('', [Validators.required]),
    select1: new FormControl(this.valor, Validators.required),
    select2: new FormControl('', [Validators.required]),
    select3: new FormControl('', [Validators.required]),
    select4: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    if(false){
      console.log(this.form.value.select1);//solo imprime no setea valor
      //setear valores
      this.form.get('select2').setValue("two");

      //this.form.controls.select1.setValue('two')
    }
  
  }


}
