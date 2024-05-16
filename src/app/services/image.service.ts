import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    private apiKey = '43899660-0051a7cd0bdfd095c2c2c466a'; // Reemplaza 'TU_API_KEY' con tu propia API key de Pixabay

    constructor(private http: HttpClient) { }

    buscarImagenes(termino: string) {
        const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${encodeURIComponent(termino)}`;
        return this.http.get(url);
    }
}
