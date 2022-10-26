import { HttpErrorResponse } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'noimage'
})
export class NoImagePipe implements PipeTransform {
    respuesta:string='';
    constructor() {

    }
    transform(image: string): string {
        if (!image) {
            return 'assets/images/noimage.jpg'
        }
        if (image.length > 0) {
            return  image
        } else {
            return 'assets/images/noimage.jpg'
        }
    }

}