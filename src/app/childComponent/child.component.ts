import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-selector',
    templateUrl:'./child.component.html'
})

export class childComponent implements OnInit
{
    @Input() customerDetail = new EventEmitter<any>();
    constructor(){};
        ngOnInit()
         {
            throw new Error('Method not implemented.');
        }


}