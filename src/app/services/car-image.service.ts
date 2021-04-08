import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44329/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number){
    let newPath = this.apiUrl + "carImages/getcarimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
