import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElipsisPipe } from './elipsis.pipe';
import { TimePipe } from './time.pipe';
import { DatePipe } from './date.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { CharacterWithCommasPipe } from './character-with-commas.pipe';
import { NumberWithDoubleDigitsPipe } from './number-with-double-digits.pipe';
import {TwoDigitsPipe} from "./two-digits.pipe";


@NgModule({
  declarations: [
    ElipsisPipe,
    TimePipe,
    DatePipe,
    NumberWithCommasPipe,
    CharacterWithCommasPipe,
    NumberWithDoubleDigitsPipe,
    TwoDigitsPipe
  ],
  exports: [
    ElipsisPipe,
    TimePipe,
    DatePipe,
    NumberWithCommasPipe,
    CharacterWithCommasPipe,
    NumberWithDoubleDigitsPipe,
    TwoDigitsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
