import { Component, OnInit } from '@angular/core';

import { LengthOption } from './_models/length-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lengthOptions: LengthOption[] = [
    {
      unit: 'km',
      label: 'Kilometer',
    },
    {
      unit: 'cm',
      label: 'Centimeter',
    },
    {
      unit: 'm',
      label: 'Meter',
    },
  ];
  firstLengthOption: LengthOption = {
    unit: 'km',
    label: 'Kilometer',
  };
  secondLengthOption: LengthOption = {
    unit: 'km',
    label: 'Kilometer',
  };

  ngOnInit(): void {}

  checkValue(value: number | undefined): void {
    if (!value) {
      value = 1000;
    }
  }

  changeLengthOptionUnit(type: number, e: any) {
    if (type === 1) {
      this.firstLengthOption.unit = e.target.value;
    } else {
      this.secondLengthOption.unit = e.target.value;
    }
    console.log(`
    Type ${type},
    First Unit ${this.firstLengthOption.unit},
    Second Unit ${this.secondLengthOption.unit}`);
    this.changeLengthValues(
      type === 1 ? 2 : 1,
      this.firstLengthOption.unit,
      this.secondLengthOption.unit
    );
  }

  onChangeLengthValues(type: number, unit: number, mult: number): void {
    if (!this.firstLengthOption.value) {
      this.firstLengthOption.value = 1000;
    }
    if (!this.secondLengthOption.value) {
      this.secondLengthOption.value = 1000;
    }
    unit = mult === 1 ? unit : 1 / unit;
    if (type === 1) {
      this.firstLengthOption.value = this.secondLengthOption.value * unit;
    } else {
      this.secondLengthOption.value = this.firstLengthOption.value * unit;
    }
    console.log(`
    Type ${type},
    Unit ${unit},
    Mult ${mult},
    First Value: ${this.firstLengthOption.value},
    Second Value: ${this.secondLengthOption.value}`);
  }

  changeLengthValues(
    type: number,
    firstUnit: string,
    secondUnit: string
  ): void {
    if (firstUnit === 'km') {
      if (secondUnit === 'km') {
        this.onChangeLengthValues(type, 1, 1);
      } else if (secondUnit === 'cm') {
        this.onChangeLengthValues(type, 100, 1);
      } else if (secondUnit === 'm') {
        this.onChangeLengthValues(type, 1000, 1);
      }
    } else if (firstUnit === 'cm') {
      if (secondUnit === 'km') {
        this.onChangeLengthValues(type, 100, -1);
      } else if (secondUnit === 'cm') {
        this.onChangeLengthValues(type, 1, 1);
      } else if (secondUnit === 'm') {
        this.onChangeLengthValues(type, 10, -1);
      }
    } else if (firstUnit === 'm') {
      if (secondUnit === 'km') {
        this.onChangeLengthValues(type, 1000, -1);
      } else if (secondUnit === 'cm') {
        this.onChangeLengthValues(type, 10, -1);
      } else if (secondUnit === 'm') {
        this.onChangeLengthValues(type, 1, 1);
      }
    }
  }

  changeLengthOptionValue(type: number): void {
    this.changeLengthValues(
      type,
      this.firstLengthOption.unit,
      this.secondLengthOption.unit
    );
  }
}
