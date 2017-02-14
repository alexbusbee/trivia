import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TriviaService {
    constructor(private http: Http) {

    }

  getTrivia(fileName: string) {
    return this.http.request('../../server/questions/' + fileName + '.json')
        .map(res => res.json());
  }
}
