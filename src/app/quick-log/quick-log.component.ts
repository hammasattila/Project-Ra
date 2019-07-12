import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-log',
  templateUrl: './quick-log.component.html',
  styleUrls: ['./quick-log.component.scss']
})
export class QuickLogComponent implements OnInit {
  eFormGroup: FormGroup;
  dFormGroup: FormGroup;
  rTypes = ['Income', 'Expense'];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eFormGroup = this._formBuilder.group({
      typeFormCtrl: ['', Validators.required],
      valueFormCtrl: ['', Validators.required]
    });

    this.dFormGroup = this._formBuilder.group({
      nameFormCtrl: '',
      fromFormCtrl: '',
      commentFormCtrl: ''
    });
  }

  test() {
    // const r: Record = {
    //   type: 0,
    //   value: 2,
    //   name: '',
    //   from: '',
    //   comment: ''
    // };
    // this._recordApi.AddRecord(r);
  }
}
