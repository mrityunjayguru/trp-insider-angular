import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HeaderfooterService} from '../headerfooter.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  quantities: number[] = Array(30).fill(0);
  inputValues: number[] = Array(30).fill(0);
  apiService: any;
  file1: any;
  file2: any;
  headerFooterService :any;
  brandid: any;
  brandnumber: any;
  formData: any;
  productData: any;
  imgConfig: any;
  imgConfigService: any;
  name: any;
  router: any;
  route: any;
  imagefiles: any;
  imagecolor: any;
  orderForm:any;
  formBuilder : any;
  otheruserdata:any;
  logService :any;

  showItems = false;

  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }


  updateInputValue(index: number) {
    this.inputValues[index] = this.quantities[index];
  }
  increaseQuantity(index: number) {
    this.quantities[index]++;
  }
  decreaseQuantity(index: number) {
    if (this.quantities[index] > 0) {
      this.quantities[index]--;
    }
  }
  getTotalQuantity(): number {
    return this.quantities.reduce((total, quantity) => total + quantity, 0);
  }
  range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }
  generateImagePath(index: number): string {
    return `imgfile${index}`;
  }
  generateColorValue(index: number): string {
    return `imgcolor${index}`;
  }
  isNullValue(value: any): boolean {
    return value === null || value === undefined;
  }
  constructor(logService: LogService, headerFooterService :HeaderfooterService,formBuilder:FormBuilder, apiService: ApiService, imgConfigService: ImgconfigService, router: Router, route: ActivatedRoute) {
    
    this.logService = logService;
    this.router = router;
    this.route = route;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.formBuilder = formBuilder;
    this.formData = new FormData();
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.route.queryParams
      .subscribe((params: any) => {
        this.apiService.showProductsId(params.designNo).subscribe(
          (response: any) => {
            this.productData = response.data;
            this.logService.clog("Product Data", this.productData, false)
            this.otheruserdata =  JSON.parse(localStorage.getItem("otheruserData") || "{}");
             
              if(this.otheruserdata.id == undefined )
              {
                  alert(" Session has been expired ");
                  this.router.navigate(['/login.component', {}]);
              }
           
            this.imagefiles = [this.productData.imgfile0, this.productData.imgfile1, this.productData.imgfile2, this.productData.imgfile3, this.productData.imgfile4, this.productData.imgfile5, this.productData.imgfile6,this.productData.imgfile7,this.productData.imgfile8,this.productData.imgfile9,this.productData.imgfile10,this.productData.imgfile11,this.productData.imgfile12,this.productData.imgfile13,this.productData.imgfile14,this.productData.imgfile15,this.productData.imgfile16,this.productData.imgfile17,this.productData.imgfile18,this.productData.imgfile19,this.productData.imgfile20,this.productData.imgfile21,this.productData.imgfile22,this.productData.imgfile23,this.productData.imgfile24,this.productData.imgfile25,this.productData.imgfile26,this.productData.imgfile27,this.productData.imgfile28,this.productData.imgfile29];
            this.imagecolor = [this.productData.imgcolor0, this.productData.imgcolor1, this.productData.imgcolor2, this.productData.imgcolor3, this.productData.imgcolor4, this.productData.imgcolor5, this.productData.imgcolor6,this.productData.imgcolor7,this.productData.imgcolor8,this.productData.imgcolor9,this.productData.imgcolor10,this.productData.imgcolor11,this.productData.imgcolor12,this.productData.imgcolor13,this.productData.imgcolor14,this.productData.imgcolor15,this.productData.imgcolor16,this.productData.imgcolor17,this.productData.imgcolor18,this.productData.imgcolor19,this.productData.imgcolor20,this.productData.imgcolor21,this.productData.imgcolor22,this.productData.imgcolor23,this.productData.imgcolor24,this.productData.imgcolor25,this.productData.imgcolor26,this.productData.imgcolor27,this.productData.imgcolor28,this.productData.imgcolor29];
    this.orderForm = this.formBuilder.group({
      topimage:[this.productData.topimage],
      designnumber:[this.productData.designnumber],
      size:[this.productData.size],
      setofpic:[this.productData.setofpic],
      category:[this.productData.category],
      wsp:[this.productData.wsp],
      description:[this.productData.description],
      imgfile0:[this.productData.imgfile0],
      imgfile1:[this.productData.imgfile1],
      imgfile2:[this.productData.imgfile2],
      imgfile3:[this.productData.imgfile3],
      imgfile4:[this.productData.imgfile4],
      imgfile5:[this.productData.imgfile5],
      imgfile6:[this.productData.imgfile6],
      imgfile7:[this.productData.imgfile7],
      imgfile8:[this.productData.imgfile8],
      imgfile9:[this.productData.imgfile9],
      imgfile10:[this.productData.imgfile10],
      imgfile11:[this.productData.imgfile11],
      imgfile12:[this.productData.imgfile12],
      imgfile13:[this.productData.imgfile13],
      imgfile14:[this.productData.imgfile14],
      imgfile15:[this.productData.imgfile15],
      imgfile16:[this.productData.imgfile16],
      imgfile17:[this.productData.imgfile17],
      imgfile18:[this.productData.imgfile18],
      imgfile19:[this.productData.imgfile19],
      imgfile20:[this.productData.imgfile20],
      imgfile21:[this.productData.imgfile21],
      imgfile22:[this.productData.imgfile22],
      imgfile23:[this.productData.imgfile23],
      imgfile24:[this.productData.imgfile24],
      imgfile25:[this.productData.imgfile25],
      imgfile26:[this.productData.imgfile26],
      imgfile27:[this.productData.imgfile27],
      imgfile28:[this.productData.imgfile28],
      imgfile29:[this.productData.imgfile29],
      imgfile30:[this.productData.imgfile30],
      imgcolor0:[this.productData.imgcolor0],
      imgcolor1:[this.productData.imgcolor1],
      imgcolor2:[this.productData.imgcolor2],
      imgcolor3:[this.productData.imgcolor3],
      imgcolor4:[this.productData.imgcolor4],
      imgcolor5:[this.productData.imgcolor5],
      imgcolor6:[this.productData.imgcolor6],
      imgcolor7:[this.productData.imgcolor7],
      imgcolor8:[this.productData.imgcolor8],
      imgcolor9:[this.productData.imgcolor9],
      imgcolor10:[this.productData.imgcolor10],
      imgcolor11:[this.productData.imgcolor11],
      imgcolor12:[this.productData.imgcolor12],
      imgcolor13:[this.productData.imgcolor13],
      imgcolor14:[this.productData.imgcolor14],
      imgcolor15:[this.productData.imgcolor15],
      imgcolor16:[this.productData.imgcolor16],
      imgcolor17:[this.productData.imgcolor17],
      imgcolor18:[this.productData.imgcolor18],
      imgcolor19:[this.productData.imgcolor19],
      imgcolor20:[this.productData.imgcolor20],
      imgcolor21:[this.productData.imgcolor21],
      imgcolor22:[this.productData.imgcolor22],
      imgcolor23:[this.productData.imgcolor23],
      imgcolor24:[this.productData.imgcolor24],
      imgcolor25:[this.productData.imgcolor25],
      imgcolor26:[this.productData.imgcolor26],
      imgcolor27:[this.productData.imgcolor27],
      imgcolor28:[this.productData.imgcolor28],
      imgcolor29:[this.productData.imgcolor29],
      imgcolor30:[this.productData.imgcolor30],
      qrcode:[this.productData.qrcode],
      qrfile:[this.productData.qrfile],
      pid:[this.productData.id],
      uid:[this.otheruserdata.id],
      usermobile:[this.otheruserdata.mobile],
      
      roleid:[this.productData.roleid],
      vendorid:[this.productData.vendorid],
      vendormobile:[this.productData.vendormobile],
      merchantid:[this.productData.merchantid],
      merchantmobile:[this.productData.merchantmobile],
      vendormerchantid:[this.productData.vendormerchantid],
      vendormerchantmobile:[this.productData.vendormerchantmobile],

      additem0:[''],
      additem1:[''],
      additem2:[''],
      additem3:[''],
      additem4:[''],
      additem5:[''],
      additem6:[''],
      additem7:[''],
      additem8:[''],
      additem9:[''],
      additem10:[''],
      additem11:[''],
      additem12:[''],
      additem13:[''],
      additem14:[''],
      additem15:[''],
      additem16:[''],
      additem17:[''],
      additem18:[''],
      additem19:[''],
      additem20:[''],
      additem21:[''],
      additem22:[''],
      additem23:[''],
      additem24:[''],
      additem25:[''],
      additem26:[''],
      additem27:[''],
      additem28:[''],
      additem30:[''],
      pervaritaionsetofpices:[this.productData.setofpic],
      totalquantity:[0],
      totalprice :[0],
      remarks : ['']

   });
          })
      })
    }
onSubmit(){
        this.orderForm.value.totalquantity = this.getTotalQuantity();
        this.orderForm.value.totalprice = this.getTotalQuantity() * this.productData.setofpic * this.productData.wsp;
            
           this.formData.append("ordersdata", JSON.stringify(this.orderForm.value));
            
              this.apiService.orderSave(this.formData).subscribe(
                  (response : any) => {
                    alert(response.mesage);
                    if(response.status==200)
                    this.router.navigateByUrl('/qr.component');
                    
                  },
                  (error:any) => {
                    alert(" Order Not Submitted.")
                    
                  }
                );
                }
}