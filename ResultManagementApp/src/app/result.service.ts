import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url = "http://localhost:3000/addResult"
  constructor(private http: HttpClient) { }

  getList() {
    // console.log("list getting................")
    return this.http.get(this.url);
  }

  saveResult(data: any) {
    // console.log("service",data);
    return this.http.post(this.url, data);

  }

  deleteResult(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  currentResult(id:any){
    return this.http.get(`${this.url}/${id}`);

  }

  updateResult(id,data){
    return this.http.put(`${this.url}/${id}`,data);

  }
}
