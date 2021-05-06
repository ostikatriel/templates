import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  form = new FormGroup({
    input1: new FormControl('', [Validators.required]),
    select1: new FormControl('', Validators.required),
    select2: new FormControl('', [Validators.required]),
  })



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      input1: new FormControl('', [Validators.required]),
      select1: new FormControl('', Validators.required),
      select2: new FormControl('', [Validators.required]),
      select3: new FormControl('', [Validators.required]),
      select4: new FormControl('', [Validators.required]),
    });
  }


}
