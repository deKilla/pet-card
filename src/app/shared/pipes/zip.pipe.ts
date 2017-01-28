
import {Pipe} from "@angular/core";

@Pipe({
  name: 'zip',
})

export class ZipPipe {

  transform(arr1:Array<any>, arr2:Array<any>): Array<any> {

    return arr1.map((v,k) => {
      for (var key in arr2[k]) {
        if (arr2[k].hasOwnProperty(key)) v[key] = arr2[k][key];
      }
      return v;
    })
  }
}
