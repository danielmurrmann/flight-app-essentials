import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, format: 'IATA' | 'Airport' = 'Airport'): string {
    let resultAirportName = value;
    let resultIataCode = value;

    switch(value) {
      case 'Wien':
        resultAirportName = 'Wien Schwechat';
        resultIataCode = 'VIE';
        break;
      case 'Berlin':
        resultAirportName = 'Berlin Brandenburg International';
        resultIataCode = 'BER';
        break;
    }

    if(format === 'Airport') return resultAirportName;
    else return resultIataCode;
  }

}
