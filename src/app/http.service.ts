
/**************************************************************************************

 @Purpose : HTTP service file for communication with API

 @Author  : Sheetal Chaudhari

 @Date    : 15/01/2019

***************************************************************************************/

import { Injectable } from '@angular/core';

/*HttpClient include testability features, typed request and response objects, 
request and response interception, Observable apis, and streamlined error handling.*/

import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class HttpService 
{
baseUrl = "http://192.168.0.33:8000/api"

//constructor for initialisation of httpClient
constructor(private http: HttpClient) { }

postService(url, body)
{
return this.http.post(this.baseUrl+url, body);
}
}

