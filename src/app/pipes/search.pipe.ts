import { Pipe, PipeTransform } from '@angular/core';
import { Root } from '../interface/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Root[] ,term:string): Root[] {
    return products.filter((pro)=> pro.title.toLowerCase().includes(term.toLowerCase()));
  }

}
