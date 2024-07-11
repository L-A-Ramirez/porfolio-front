import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-certificate',
  templateUrl: './carousel-certificate.component.html',
  styleUrls: ['./carousel-certificate.component.css']
})
export class CarouselCertificateComponent implements OnInit {


  certificates:any[]=[
    {img: '../../../assets/certificados/salesforce.jpeg'},
    {img: '../../../assets/certificados/Certificado Mundo Digital - Lucas Ramirez_page-0001.jpg'},
    {img:'../../../assets/certificados/Lucas Ramirez Habilidades para la Empleabilidad_page-0001.jpg'},
    {img:'../../../assets/certificados/Certificaciones Trayecto programador_page-0002.jpg'},
    {img:'../../../assets/certificados/Certificaciones Trayecto programador_page-0003.jpg'},
    {img:'../../../assets/certificados/Certificaciones Trayecto programador_page-0004.jpg'},
    {img:'../../../assets/certificados/Certificaciones Trayecto programador_page-0005.jpg'}
  ]

  constructor(private _confir:NgbCarouselConfig) {

  }

  ngOnInit(): void {
  }

}
