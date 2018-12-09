import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-mspcp',
  templateUrl: './mspcp.component.html',
  styleUrls: ['./mspcp.component.css']
})
export class MspcpComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['1', '2', '3', '4', '5', '6'];


  startDate = new Date(2018, 10, 1);


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
  
  
  }
}