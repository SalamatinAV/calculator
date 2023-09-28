import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  result?: string = '';
  str: string = '';
  expretion: string = '';

  constructor() {}

  ngOnInit(): void {}

  getResult(e: any) {
    switch (e) {
      case 'DEL':
        this.str = this.str.slice(0, -1);
        this.result = this.str;
        break;
      case 'C':
        this.str = '';
        this.expretion = '';
        this.result = this.str;
        break;
      case '=':
        this.result = this.culcResult(this.str);
        this.str = '';
        break;
      default:
        this.operators(e);
        break;
    }
  }

  operators(str: string) {
    if (str == '+' || str == '-' || str == 'x' || str == '/' || str == '√') {
      this.str += ` ${str} `;
    } else {
      this.str += str;
    }
    this.result = this.str;
  }

  culcResult(str: string): string {
    this.expretion = str;
    let res = 0;
    if (str.includes(' + ')) {
      let arr = str.split(' + ').map((value) => +value);
      for (const item of arr) {
        res += item;
        console.log(arr);
      }
      str = '';
    }
    if (str.includes(' - ')) {
      let arr = str.split(' - ').map((value) => +value);
      for (const item of arr) {
        res -= item;
      }
      res += 2 * arr[0];
      str = '';
    }
    if (str.includes(' x ')) {
      let arr = str.split(' x ').map((value) => +value);
      res = 1;
      for (const item of arr) {
        res *= item;
        console.log(arr);
      }
      str = '';
    }
    if (str.includes(' / ')) {
      let arr = str.split(' / ').map((value) => +value);
      res = arr[0];

      for (let i = 1; i < arr.length; i++) {
        const e = arr[i];
        res /= e;
        console.log(e);
      }
      console.log(arr);
      str = '';
    }
    if (str.includes(' √ ')) {
      let arr = str.split(' √ ').map((value) => +value);
      for (const item of arr) {
        res = item;
      }
      res = Math.sqrt(res);

      str = '';
    }
    return res.toString();
  }
}
