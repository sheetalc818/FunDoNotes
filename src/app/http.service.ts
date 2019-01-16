import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class HttpService 
{
baseUrl = "http://192.168.0.33:8000/api"
constructor(private http: HttpClient) { }

postService(url, body)
{
return this.http.post(this.baseUrl+url, body);
}
}

