import { Component, OnInit } from '@angular/core';
import { HeaderfooterService } from '../headerfooter.service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendororders',
  templateUrl: './vendororders.component.html',
  styleUrls: ['./vendororders.component.css']
})
export class VendorordersComponent implements OnInit{

  router:any;
  route:any;
  headerFooterService:any;
  formBuilder:any;
  apiService:any;
  imgConfigService:any;
  orderData:any;
  totalAmount : any;
  totalwsp:any;
  totalqty :any;
  showItems = false;
  imgConfig: any;
  imgConfigpdf:any;
  
  currentDate: any;
  dtOptions: any;
  datatable : any;
  dtRendered :any;


  totaladditem0:any;
  totaladditem1:any;
  totaladditem2:any;
  totaladditem3:any;
  totaladditem4:any;
  totaladditem5:any;
  totaladditem6:any;
  totaladditem7:any;
  totaladditem8:any;
  totaladditem9:any;
  totaladditem10:any;
  totaladditem11:any;
  totaladditem12:any;
  totaladditem13:any;
  totaladditem14:any;
  totaladditem15:any;
  totaladditem16:any;
  totaladditem17:any;
  totaladditem18:any;
  totaladditem19:any;
  totaladditem20:any;
  totaladditem21:any;
  totaladditem22:any;
  totaladditem23:any;
  totaladditem24:any;
  totaladditem25:any;
  totaladditem26:any;
  totaladditem27:any;
  totaladditem28:any;
  totaladditem29:any;



  imgcolor0:any;
  imgcolor1:any;
  imgcolor2:any;
  imgcolor3:any;
  imgcolor4:any;
  imgcolor5:any;
  imgcolor6:any;
  imgcolor7:any;
  imgcolor8:any;
  imgcolor9:any;
  imgcolor10:any;
  imgcolor11:any;
  imgcolor12:any;
  imgcolor13:any;
  imgcolor14:any;
  imgcolor15:any;
  imgcolor16:any;
  imgcolor17:any;
  imgcolor18:any;
  imgcolor19:any;
  imgcolor20:any;
  imgcolor21:any;
  imgcolor22:any;
  imgcolor23:any;
  imgcolor24:any;
  imgcolor25:any;
  imgcolor26:any;
  imgcolor27:any;
  imgcolor28:any;
  imgcolor29:any;
  pdffilename:any;
  ordtran:any;
  pdfurl:any;
  userdata:any;



  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

    constructor(headerFooterService :HeaderfooterService,
      formBuilder:FormBuilder, 
      apiService: ApiService, 
      imgConfigService: ImgconfigService,
      router: Router,
      route: ActivatedRoute)
    {



      

    this.ordtran = [];
    this.router=router;
    this.route=route;
    this.headerFooterService=headerFooterService;
    this.formBuilder=formBuilder;
    this.apiService=apiService;
    this.imgConfigService=imgConfigService;

    this.dtRendered=false;

    this.totaladditem0=0;  
    this.totaladditem1=0;
    this.totaladditem2=0;
    this.totaladditem3=0;
    this.totaladditem4=0;
    this.totaladditem5=0;
    this.totaladditem6=0;
    this.totaladditem7=0;
    this.totaladditem8=0;
    this.totaladditem9=0;
    this.totaladditem10=0;
    this.totaladditem11=0;
    this.totaladditem12=0;
    this.totaladditem13=0;
    this.totaladditem14=0;
    this.totaladditem15=0;
    this.totaladditem16=0;
    this.totaladditem17=0;
    this.totaladditem18=0;
    this.totaladditem19=0;
    this.totaladditem20=0;
    this.totaladditem21=0;
    this.totaladditem22=0;
    this.totaladditem23=0;
    this.totaladditem24=0;
    this.totaladditem25=0;
    this.totaladditem26=0;
    this.totaladditem27=0;
    this.totaladditem28=0;
    this.totaladditem29=0;
  





    this.imgConfig = this.imgConfigService.getImageConfig();
    this.imgConfigpdf = this.imgConfigService.getImageConfigpdf();

    
    
        this.route.queryParams.subscribe((params: any) => {
 
                                       

          this.pdffilename  = params.designnumber;


          this.apiService.getusers().subscribe(
            (resordtran:any) => {
      
             
      
                  this.userdata = resordtran.data;
                     
                  console.log("===========resordtran1========");
                   console.log(resordtran.data);
                  console.log("===========resordtran========");
                   
      




                      this.apiService. getAllOrdersByUserdesignnumber(params.designnumber).subscribe(
                        (response:any) => {


                          this.orderData = response.data;

                          console.log("===========response.data=============");
                          console.log(response.data);
                          console.log("============response.data================");
                          
                          
                          
                            // console.log("===============response.data2================");
                            // console.log(response.data);
                            // console.log("===============response.data================");
                            
                                                        

                             this.dtRendered=true;
                              
                              
                  
                               this.totalAmount = 0;
                               this.totalwsp=0;
                               this.totalqty =0;


                               for (const item of this.orderData) {
                                 
                                   this.totalqty    = this.totalqty + item.totalquantity;   
                                   this.totalAmount += item.wsp * item.totalquantity * item.setofpic;
                                  

                                    if( item.imgcolor0 != undefined && item.imgcolor0.length > 0 && item.additem0 > 0)
                                    {
                                      this.totaladditem0 = this.totaladditem0 +  item.additem0;
                                      this.imgcolor0=item.imgcolor0;
                                     
                                    }


                                    if(item.imgcolor1 != undefined &&  item.imgcolor1.length > 0 && item.additem1 > 0 )
                                    {
                                      this.totaladditem1 = this.totaladditem1 +  item.additem1;
                                      this.imgcolor1=item.imgcolor1;

                                    }

                                    if(item.imgcolor2 != undefined && item.imgcolor2.length > 0 && item.additem2 > 0 )
                                    {
                                      this.totaladditem2 = this.totaladditem2 +  item.additem2;
                                      this.imgcolor2=item.imgcolor2;

                                    }

                                    if(item.imgcolor3 != undefined && item.imgcolor3.length > 0 && item.additem3 > 0 )
                                    {
                                      this.totaladditem3 = this.totaladditem3 +  item.additem3;
                                      this.imgcolor3=item.imgcolor3;

                                    }

                                    if( item.imgcolor4 != undefined &&  item.imgcolor4.length > 0 && item.additem4 > 0 )
                                    {
                                      this.totaladditem4 = this.totaladditem4 +  item.additem4;
                                      this.imgcolor4=item.imgcolor4;

                                    }

                                    if(item.imgcolor5 != undefined && item.imgcolor5.length > 0 && item.additem5 > 0 )
                                    {
                                      this.totaladditem5 = this.totaladditem5 +  item.additem5;
                                      this.imgcolor5=item.imgcolor5;

                                    }

                                    if( item.imgcolor6 != undefined && item.imgcolor6.length > 0 && item.additem6 > 0 )
                                    {
                                      this.totaladditem6 = this.totaladditem6 +  item.additem6;
                                      this.imgcolor6=item.imgcolor6;

                                    }

                                    if(item.imgcolor7.length > 0 && item.additem7 > 0 )
                                    {
                                      this.totaladditem7 = this.totaladditem7 +  item.additem7;
                                      this.imgcolor7=item.imgcolor7;

                                    }


                                    if(item.imgcolor8 != undefined &&  item.imgcolor8.length > 0 && item.additem8 > 0 )
                                    {
                                      this.totaladditem8 = this.totaladditem8 +  item.additem8;
                                      this.imgcolor8=item.imgcolor8;

                                    }

                                    if(item.imgcolor9 != undefined && item.imgcolor9.length > 0 && item.additem9 > 0 )
                                    {
                                      this.totaladditem9 = this.totaladditem9 +  item.additem9;
                                      this.imgcolor9=item.imgcolor9;

                                    }

                                    if(item.imgcolor10 != undefined && item.imgcolor10.length > 0 && item.additem10 > 0 )
                                    {
                                      this.totaladditem10 = this.totaladditem10 +  item.additem10;
                                      this.imgcolor10=item.imgcolor10;

                                    }


                                    if(item.imgcolor11 != undefined && item.imgcolor11.length > 0 && item.additem11 > 0 )
                                    {
                                      this.totaladditem11 = this.totaladditem11 +  item.additem11;
                                      this.imgcolor11=item.imgcolor11;

                                    }

                                    if(item.imgcolor12 != undefined && item.imgcolor12.length > 0 && item.additem12 > 0 )
                                    {
                                      this.totaladditem12 = this.totaladditem12 +  item.additem12;
                                      this.imgcolor12=item.imgcolor12;

                                    }

                                    if(item.imgcolor13 != undefined && item.imgcolor13.length > 0 && item.additem13 > 0 )
                                    {
                                      this.totaladditem13 = this.totaladditem13 +  item.additem13;
                                      this.imgcolor13=item.imgcolor13;

                                    }


                                    if(item.imgcolor14 != undefined && item.imgcolor14.length > 0 && item.additem14 > 0 )
                                    {
                                      this.totaladditem14 = this.totaladditem14 +  item.additem14;
                                      this.imgcolor14=item.imgcolor14;

                                    }


                                    if(item.imgcolor15 != undefined &&  item.imgcolor15.length > 0 && item.additem15 > 0 )
                                    {
                                      this.totaladditem15 = this.totaladditem15 +  item.additem15;
                                      this.imgcolor15=item.imgcolor15;

                                    }

                                    
                                    if(item.imgcolor16 != undefined && item.imgcolor16.length > 0 && item.additem16 > 0 )
                                    {
                                      this.totaladditem16 = this.totaladditem16 +  item.additem16;
                                      this.imgcolor16=item.imgcolor16;

                                    }


                                    if(item.imgcolor17 != undefined && item.imgcolor17.length > 0 && item.additem17 > 0 )
                                    {
                                      this.totaladditem17 = this.totaladditem17 +  item.additem17;
                                      this.imgcolor17=item.imgcolor17;

                                    }

                                    if( item.imgcolor18 != undefined &&  item.imgcolor18.length > 0 && item.additem18 > 0 )
                                    {
                                      this.totaladditem18 = this.totaladditem18 +  item.additem18;
                                      this.imgcolor18=item.imgcolor18;

                                    }

                                    if( item.imgcolor19 != undefined && item.imgcolor19.length > 0 && item.additem19 > 0 )
                                    {
                                      this.totaladditem19 = this.totaladditem19 +  item.additem19;
                                      this.imgcolor19=item.imgcolor19;

                                    }


                                    if( item.imgcolor20 != undefined && item.imgcolor20.length > 0 && item.additem20 > 0 )
                                    {
                                      this.totaladditem20 = this.totaladditem20 +  item.additem20;
                                      this.imgcolor20=item.imgcolor20;

                                    }

                                    if(item.imgcolor21 != undefined && item.imgcolor21.length > 0 && item.additem21 > 0 )
                                    {
                                      this.totaladditem21 = this.totaladditem21 +  item.additem21;
                                      this.imgcolor21=item.imgcolor21;

                                    }

                                    if(item.imgcolor22 != undefined && item.imgcolor22.length > 0 && item.additem22 > 0 )
                                    {
                                      this.totaladditem22 = this.totaladditem22 +  item.additem22;
                                      this.imgcolor22=item.imgcolor22;

                                    }

                                    if(item.imgcolor23 != undefined && item.imgcolor23.length > 0 && item.additem23 > 0 )
                                    {
                                      this.totaladditem23 = this.totaladditem23 +  item.additem23;
                                      this.imgcolor23=item.imgcolor23;

                                    }

                                    if(item.imgcolor24 != undefined && item.imgcolor24.length > 0 && item.additem24 > 0 )
                                    {
                                      this.totaladditem24 = this.totaladditem24 +  item.additem24;
                                      this.imgcolor24=item.imgcolor24;

                                    }

                                    if(item.imgcolor25 != undefined && item.imgcolor25.length > 0 && item.additem25 > 0 )
                                    {
                                      this.totaladditem25 = this.totaladditem25 +  item.additem25;
                                      this.imgcolor25=item.imgcolor25;

                                    }

                                    if(item.imgcolor26 != undefined && item.imgcolor26.length > 0 && item.additem26 > 0 )
                                    {
                                      this.totaladditem26 = this.totaladditem26 +  item.additem26;
                                      this.imgcolor26=item.imgcolor26;

                                    }

                                    if(item.imgcolor27 != undefined && item.imgcolor27.length > 0 && item.additem27 > 0 )
                                    {
                                      this.totaladditem27 = this.totaladditem27 +  item.additem27;
                                      this.imgcolor27=item.imgcolor27;

                                    }

                                    if(item.imgcolor28 != undefined && item.imgcolor28.length > 0 && item.additem28 > 0 )
                                    {
                                      this.totaladditem28 = this.totaladditem28 +  item.additem28;
                                      this.imgcolor28=item.imgcolor28;

                                    }


                                     
                                    if(item.imgcolor29 != undefined &&  item.imgcolor29.length > 0 && item.additem29 > 0 )
                                    {
                                      this.totaladditem29 = this.totaladditem29 +  item.additem29;
                                      this.imgcolor29=item.imgcolor29;

                                    } 


                                    
                             
                               }


                               
                                    var data = 
                                    {   "totalqty":this.totalqty,
                                        "totalAmount":this.totalAmount
                                    }

                                 
                                    this.orderData.push(data);

                                    var data0 = 
                                    {   "totaladditem":this.totaladditem0,
                                        "imgcolor":this.imgcolor0
                                    }

                                    if(data0.totaladditem != undefined &&  data0.imgcolor != undefined)
                                     this.orderData.push(data0);

                                  var data1 = 
                                  {   "totaladditem":this.totaladditem1,
                                      "imgcolor":this.imgcolor1
                                  }
                                  if(data1.totaladditem != undefined &&  data1.imgcolor != undefined)
                                this.orderData.push(data1);

                                var data2 = 
                                {   "totaladditem":this.totaladditem2,
                                  "imgcolor":this.imgcolor2
                                }

                                if(data2.totaladditem != undefined &&  data2.imgcolor != undefined)
                                this.orderData.push(data2);



                                
                                var data3 = 
                                {   "totaladditem":this.totaladditem3,
                                  "imgcolor":this.imgcolor3
                                }

                                if(data3.totaladditem != undefined &&  data3.imgcolor != undefined)
                                this.orderData.push(data3);




                                var data4 = 
                                {   "totaladditem":this.totaladditem4,
                                  "imgcolor":this.imgcolor4
                                }

                                if(data4.totaladditem != undefined &&  data4.imgcolor != undefined)
                                this.orderData.push(data4);

                                var data5 = 
                                {   "totaladditem":this.totaladditem5,
                                  "imgcolor":this.imgcolor5
                                }

                                if(data5.totaladditem != undefined &&  data5.imgcolor != undefined)
                                this.orderData.push(data5);

                                var data6 = 
                                {   "totaladditem":this.totaladditem6,
                                  "imgcolor":this.imgcolor6
                                }

                                if(data6.totaladditem != undefined &&  data6.imgcolor != undefined)
                                this.orderData.push(data6);


                                
                                var data7 = 
                                {   "totaladditem":this.totaladditem7,
                                  "imgcolor":this.imgcolor7
                                }

                                if(data7.totaladditem != undefined &&  data7.imgcolor != undefined)
                                this.orderData.push(data7);

                                var data8 = 
                                {   "totaladditem":this.totaladditem8,
                                  "imgcolor":this.imgcolor8
                                }

                                if(data8.totaladditem != undefined &&  data8.imgcolor != undefined)
                                this.orderData.push(data8);

                                var data9 = 
                                {   "totaladditem":this.totaladditem9,
                                  "imgcolor":this.imgcolor9
                                }

                                if(data9.totaladditem != undefined &&  data9.imgcolor != undefined)
                                this.orderData.push(data9);

                                var data10 = 
                                {   "totaladditem":this.totaladditem10,
                                  "imgcolor":this.imgcolor10
                                }

                                if(data10.totaladditem != undefined &&  data10.imgcolor != undefined)
                                this.orderData.push(data10);

                                var data11 = 
                                {   "totaladditem":this.totaladditem11,
                                  "imgcolor":this.imgcolor11
                                }

                                if(data11.totaladditem != undefined &&  data11.imgcolor != undefined)
                                this.orderData.push(data11);

                                var data12 = 
                                {   "totaladditem":this.totaladditem12,
                                  "imgcolor":this.imgcolor12
                                }
                                if(data12.totaladditem != undefined &&  data12.imgcolor != undefined)
                                this.orderData.push(data12);

                                var data13 = 
                                {   "totaladditem":this.totaladditem13,
                                  "imgcolor":this.imgcolor13
                                }
                                if(data13.totaladditem != undefined &&  data13.imgcolor != undefined)
                                this.orderData.push(data13);

                                var data14 = 
                                {   "totaladditem":this.totaladditem14,
                                  "imgcolor":this.imgcolor14
                                }
                                if(data14.totaladditem != undefined &&  data14.imgcolor != undefined)
                                this.orderData.push(data14);

                                var data15 = 
                                {   "totaladditem":this.totaladditem15,
                                  "imgcolor":this.imgcolor15
                                }
                                if(data15.totaladditem != undefined &&  data15.imgcolor != undefined)
                                this.orderData.push(data15);

                                var data16 = 
                                {   "totaladditem":this.totaladditem16,
                                  "imgcolor":this.imgcolor16
                                }
                                if(data16.totaladditem != undefined &&  data16.imgcolor != undefined)
                                this.orderData.push(data16);

                                var data17 = 
                                {   "totaladditem":this.totaladditem17,
                                  "imgcolor":this.imgcolor17
                                }
                                if(data17.totaladditem != undefined &&  data17.imgcolor != undefined)
                                this.orderData.push(data17);

                                var data18 = 
                                {   "totaladditem":this.totaladditem18,
                                  "imgcolor":this.imgcolor18
                                }
                                if(data18.totaladditem != undefined &&  data18.imgcolor != undefined)
                                this.orderData.push(data18);

                                var data19 = 
                                {   "totaladditem":this.totaladditem19,
                                  "imgcolor":this.imgcolor19
                                }
                                if(data19.totaladditem != undefined &&  data19.imgcolor != undefined)
                                this.orderData.push(data19);

                                var data20 = 
                                {   "totaladditem":this.totaladditem20,
                                  "imgcolor":this.imgcolor20
                                }
                                if(data20.totaladditem != undefined &&  data20.imgcolor != undefined)
                                this.orderData.push(data20);

                                var data21 = 
                                {   "totaladditem":this.totaladditem21,
                                  "imgcolor":this.imgcolor21
                                }
                                if(data21.totaladditem != undefined &&  data21.imgcolor != undefined)
                                this.orderData.push(data21);

                                var data22 = 
                                {   "totaladditem":this.totaladditem22,
                                  "imgcolor":this.imgcolor22
                                }
                                if(data22.totaladditem != undefined &&  data22.imgcolor != undefined)
                                this.orderData.push(data22);

                                var data23 = 
                                {   "totaladditem":this.totaladditem23,
                                  "imgcolor":this.imgcolor23
                                }
                                if(data23.totaladditem != undefined &&  data23.imgcolor != undefined)
                                this.orderData.push(data23);

                                var data24 = 
                                {   "totaladditem":this.totaladditem24,
                                  "imgcolor":this.imgcolor24
                                }
                                if(data24.totaladditem != undefined &&  data24.imgcolor != undefined)
                                this.orderData.push(data24);

                                var data25 = 
                                {   "totaladditem":this.totaladditem25,
                                  "imgcolor":this.imgcolor25
                                }
                                if(data25.totaladditem != undefined &&  data25.imgcolor != undefined)
                                this.orderData.push(data25);

                                var data26 = 
                                {   "totaladditem":this.totaladditem26,
                                  "imgcolor":this.imgcolor26
                                }
                                if(data26.totaladditem != undefined &&  data26.imgcolor != undefined)
                                this.orderData.push(data26);

                                var data27 = 
                                {   "totaladditem":this.totaladditem27,
                                  "imgcolor":this.imgcolor27
                                }
                                if(data27.totaladditem != undefined &&  data27.imgcolor != undefined)
                                this.orderData.push(data27);

                                var data28 = 
                                {   "totaladditem":this.totaladditem28,
                                  "imgcolor":this.imgcolor28
                                }
                                if(data28.totaladditem != undefined &&  data28.imgcolor != undefined)
                                this.orderData.push(data28);

                                var data29 = 
                                {   "totaladditem":this.totaladditem29,
                                  "imgcolor":this.imgcolor29
                                }
                                if(data29.totaladditem != undefined &&  data29.imgcolor != undefined)
                                this.orderData.push(data29);


                                
                                   
                        


                              
                        })


                      })


              
          })

          

  




    }
  ngOnInit(): void {
    
 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
        'copy', {
          extend: 'csvHtml5',
          title: this.pdffilename, // Add the title for PDF
          footer: true
        }, {
          extend: 'excelHtml5',
          title: this.pdffilename, // Add the title for PDF
          footer: true
        }, {
          extend: 'pdfHtml5',
          title: this.pdffilename,
          footer: true,
          orientation: 'landscape',
                    pageSize: 'LEGAL',
                    exportOptions: {
                      stripNewlines: false
                   },
                    customize: function(pdfDocument:any) 
                    {
                      
                      

                    }
          }
      

]
    }
  }


  
  getPdfByMobile(mobile:any)
  {

    

    
    this.apiService.getIDUniqueByMobile(mobile).subscribe(
      (resordtran:any) => {
            this.ordtran = resordtran.data;


            if(this.ordtran.length > 0 )
            {
            
             this.pdfurl = this.imgConfigpdf + "/"+this.ordtran[0].id+".pdf";
             window.open(this.pdfurl);
             

            }
            else
            {
                  alert(" Bill not generated yet ");
            }


            
      })
  }




getUserByMobile(mobile:any)
{

 
  if(this.userdata == undefined)
  {
      console.log(" =============Blank===============")
      return "-------------";
  }


  var result = this.userdata.filter((obj:any) => {
    return obj.mobile == mobile
  })


  

  return result[0].shopname;


  }
}
    
