import { Pipe, PipeTransform } from '@angular/core';
import { MediaItemListComponent } from 'src/app/media-item-list/media-item-list.component';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems): any {
    const categories =[];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItems.categories)<=-1){
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }

}
