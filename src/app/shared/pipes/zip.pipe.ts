
import {Pipe} from "@angular/core";

@Pipe({
  name: 'zip',
})

// takes to arrays that contain objects and returns an array containing objects,
// that combine the objects of the respective keys of the 2 input arrays

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
