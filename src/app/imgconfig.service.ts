import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ImgconfigService {
    
    productPath = "https://trpinsiderbackend.routerosterpro.com/Event/productdetails.component?designNo=";
    imagePath =   "https://trpinsiderbackend.routerosterpro.com/imageevent";
    imagePathpdf = "https://trpinsiderbackend.routerosterpro.com/imageeventpdf";
    
    
  //  productPath = "http:192.168.1.16:8085/Event/productdetails.component?designNo=";
  // imagePath =   "assets/imageevent";
  //  imagePathpdf = "assets/imageeventpdf";
    

    
constructor(  )
{
    
   this.imagePath = "https://trpinsiderbackend.routerosterpro.com/imageevent";
   this.productPath = "https://trpinsiderbackend.routerosterpro.com/Event/productdetails.component?designNo=";
   this.imagePathpdf = "https://trpinsiderbackend.routerosterpro.com/imageeventpdf";

  //  this.productPath = "http:192.168.1.16:8085/Event/productdetails.component?designNo=";
 // this.imagePath =   "C:/opt/tomcat/webapps/imageevent";
  //this.imagePathpdf = "assets/imageeventpdf";
    
  
 }
 getImageConfig()
 {
   return this.imagePath;
 }
 getImageConfigpdf()
 {
   return this.imagePathpdf;
 }
 getProductPath()
 {
   return this.productPath;
 }
}