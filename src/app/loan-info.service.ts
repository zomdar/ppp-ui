import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../environments/environment";

const token = environment.guestToken.token;
const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);

@Injectable({
  providedIn: 'root'
})
export class LoanInfoService {

  private url = `${environment.dbUrl.url}`;

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<any> {
    return this.http.get(this.url, { headers: headers });
  }

  getBusiness(id: String): Observable<any> {
    return this.http.get(this.url + "/" + id, { headers: headers });
  }
}
