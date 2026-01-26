import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ImgconfigService {
    
    productPath = "https://stageeventappback.designdemonz.com/Event/productdetails.component?designNo=";
    imagePath =   "https://stageeventappback.designdemonz.com/imageevent";
    imagePathpdf = "https://stageeventappback.designdemonz.com/imageeventpdf";
    
    
  //  productPath = "http:192.168.1.16:8085/Event/productdetails.component?designNo=";
  // imagePath =   "assets/imageevent";
  //  imagePathpdf = "assets/imageeventpdf";
    

    
constructor(  )
{
    
   this.imagePath = "https://stageeventappback.designdemonz.com/imageevent";
   this.productPath = "https://stageeventappback.designdemonz.com/Event/productdetails.component?designNo=";
   this.imagePathpdf = "https://stageeventappback.designdemonz.com/imageeventpdf";

  //  this.productPath = "http:192.168.1.16:8085/Event/productdetails.component?designNo=";
  this.imagePath =   "C:/opt/tomcat/webapps/imageevent";
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