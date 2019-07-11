import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Record } from '../record';

@Component({
  selector: 'app-quick-log',
  templateUrl: './quick-log.component.html',
  styleUrls: ['./quick-log.component.scss']
})
export class QuickLogComponent implements OnInit {
  isLinear = false;
  rFormGroup: FormGroup;
  essentialFormGroup: FormGroup;
  detailsFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.rFormGroup = new FormGroup({
      essentialFormGroup: new FormGroup({
        type: new FormControl(),
        value: new FormControl()
      }),
      detailsFormGroup: new FormGroup({
        name: new FormControl(),
        from: new FormControl(),
        comment: new FormControl()
      })
    })

    //this.essentialFormGroup = new FormGroup({ type: new FormControl(), value: new FormControl() });
    //this.detailsFormGroup = new FormGroup({ type: new FormControl(), value: new FormControl() });
}

  ngOnInit() {
    this.rFormGroup = this._formBuilder.group({
      rCtrl: ['', Validators.required]
    });
    /*this.essentialFormGroup = this._formBuilder.group({
      essentialCtrl: ['', Validators.required]
    });
    //this.detailsFormGroup = this._formBuilder.group({
      detailsCtrl: ['', Validators.required]
    });*/
  }

  ngOn
}
