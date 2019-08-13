import { Record } from '../../shared/record';
import { FirebaseService } from '../../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'home-quick-log',
    templateUrl: './quick-log.component.html',
    styleUrls: ['./quick-log.component.scss']
})
export class QuickLogComponent implements OnInit {
    eFormGroup: FormGroup;
    dFormGroup: FormGroup;
    rTypes = ['Income', 'Expense'];

    constructor(private _formBuilder: FormBuilder, private _friebaseAPI: FirebaseService) { }

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
        const r: Record = {
            type: this.rTypes.indexOf(this.eFormGroup.value.typeFormCtrl),
            value: this.eFormGroup.value.valueFormCtrl,
            name: this.dFormGroup.value.nameFormCtrl,
            from: this.dFormGroup.value.fromFormCtrl,
            comment: this.dFormGroup.value.commentFormCtrl
        };
        console.log(r);
        this._friebaseAPI.createRecord(r);
        console.log(this._friebaseAPI.getRecords());

    }
}
