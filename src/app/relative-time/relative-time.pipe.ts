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
    if (diffInDays <= -365) {
      const diffInYears = Math.floor(-1*diffInDays / daysInYear)
      const daysOverYear = -1*diffInDays - diffInYears*daysInYear
      const yearLabel=diffInYears>1?"years":"year"
      return `${diffInYears} ${yearLabel} and ${daysOverYear} days ago`
    }
    return rtf.format(diffInDays, 'day');
  }

}
