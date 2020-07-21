import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

const token = environment.guestToken.token;
const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

@Injectable({
  providedIn: 'root',
})
export class LoanInfoService {
  private url = `${environment.dbUrl.url}api/loan`;

  constructor(private http: HttpClient) {}

  getAllLoans(page?, collectionSize?): Observable<any> {
    // const params = new HttpParams({fromString: `page=${page}`});
    const params = new HttpParams().set('page', page).set('perPage', collectionSize);
    return this.http.get(this.url, { headers: headers, params: params });
  }

  getBusiness(id: String): Observable<any> {
    return this.http.get(this.url + '/' + id, { headers: headers });
  }
}
