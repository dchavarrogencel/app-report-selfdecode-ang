import { HttpErrorResponse } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'noimage'
})
/**
 * Pipe encargado de hacer la transformacion de la imagen
 * @author dchavarro
 */
export class NoImagePipe implements PipeTransform {
    respuesta:string='';
    constructor() {

    }
    /**
     * Metodo encargado de transformar la imagen
     * @param image 
     * @returns 
     */
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