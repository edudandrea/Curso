import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/constants';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormatPipe  extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DAT_TIME_FMT);
  }

}
