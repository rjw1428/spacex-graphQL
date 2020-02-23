import { Pipe, PipeTransform } from '@angular/core';

const rtf = new (Intl as any).RelativeTimeFormat('en');
const milliSecondsInDay = 1000 * 3600 * 24;
const daysInYear = 365;

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  
  transform(utcTime: string): string {
    const diffInMillicseconds =
      new Date(utcTime).getTime() - new Date().getTime();
    const diffInDays = Math.round(diffInMillicseconds / milliSecondsInDay);
    // console.log(diffInDays)
    // if (diffInDays <= -365) {
    //   const diffInYears = Math.floor(-1*diffInDays / daysInYear)
    //   const daysOverYear = diffInDays - diffInYears*daysInYear
    //   return `${diffInYears} years and ${-1*daysOverYear} days ago`
    // }
    return rtf.format(diffInDays, 'day');
  }

}
