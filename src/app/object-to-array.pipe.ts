import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any): any[] {
    if (!value) return []; // Si la valeur est nulle ou indéfinie, retourne un tableau vide

    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }
}
