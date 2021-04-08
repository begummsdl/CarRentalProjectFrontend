import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetail:CarDetailDto;
  carImages:CarImage[]=[];

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute,
              private carImageService:CarImageService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarsByCar(params["carId"])
      this.getCarImagesByCarId(params["carId"])
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
    })
  }

  getCarsByCar(carId:number){
    this.carService.getCarsByCar(carId).subscribe(response=>{
      this.carDetail = response.data[0];
    })
  }

}
