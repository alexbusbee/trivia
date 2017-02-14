import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TriviaService {
    constructor(private _http: Http) {

    }
/* TODO: Fix JSON path */
    getTrivia(fileName: string) {
        return this._http.get('./#/server/questions/' + fileName + '.json')
            .map(res => res.json());
    }
}
