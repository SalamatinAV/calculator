import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import { ButtonModel } from './button/model/button.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  buttons: ButtonModel[] = [
    { label: 'DEL', width: 100 },
    { label: 'C', width: 100 },
    { label: '√', width: 100 },
    { label: '7', width: 100 },
    { label: '8', width: 100 },
    { label: '9', width: 100 },
    { label: '4', width: 100 },
    { label: '5', width: 100 },
    { label: '6', width: 100 },
    { label: '1', width: 100 },
    { label: '2', width: 100 },
    { label: '3', width: 100 },
    { label: '0', width: 100 },
    { label: '=', width: 100 },
  ];
  symbols: ButtonModel[] = [
    { label: '/', width: 100 },
    { label: 'x', width: 100 },
    { label: '-', width: 100 },
    { label: '+', width: 100 },
    { label: '.', width: 100 },
  ];

  @Output() onResult: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickBtn(label: string) {
    console.log(label);
    this.onResult.emit(label);
  }
}
