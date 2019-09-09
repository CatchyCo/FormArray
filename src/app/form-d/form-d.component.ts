import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { DataTranferService } from  '../data-tranfer.service';
@Component({
  selector: 'app-form-d',
  templateUrl: './form-d.component.html',
  styleUrls: ['./form-d.component.css']
})
export class FormDComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private dataTransfer:DataTranferService) { }

  reactForm: FormGroup;

  ngOnInit() {

    this.reactForm = this.formBuilder.group({

      fTitle: ["Dynamic Form"],

      fData: this.formBuilder.array([this.addRow()])
    });

  }

  addCountry() {

    const control: FormArray = this.reactForm.get('fData') as FormArray;
    control.push(this.addRow());

  }

  remove(i) {

    if (i !== 0) {
      const control: FormArray = this.reactForm.get("fData") as FormArray;
      control.removeAt(i);
    }
  }

  addRow() {
    let group = this.formBuilder.group({
      countryName: [''],
      countryCode: ['']
    });
    return group;
  }

  onSubmit() {
    const control: FormArray = this.reactForm.get('fData') as FormArray;
    //console.log(control.value)
    this.dataTransfer.onSubmitFormData(control.value)
    .subscribe(data => console.log(data));
  }

  clearAllForm() {

    const control : FormArray = this.reactForm.get("fData") as FormArray;
    while(control.length){
      control.removeAt(0);
      
    }
    this.addCountry();
  }

}
