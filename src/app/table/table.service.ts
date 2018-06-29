import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TableResponse, Hits } from './table';

@Injectable()
export class TableService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  getData(): Observable<Hits[]> {
    return this.http.get(this.apiUrl)
      .map((response: TableResponse) => response.hits);
  }

}
