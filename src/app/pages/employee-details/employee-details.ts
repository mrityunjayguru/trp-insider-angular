import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';



import {  OnInit } from '@angular/core';

import { ApiService } from '../../apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})







export class EmployeeDetails implements OnInit {
  docTopimage: any;
  file0: any;

  docimage1: any;
  docimage2: any;
  docimage3: any;
  docimage4: any;
  docimage5: any;
  docimage6: any;
  docimage7: any;
  docimage8: any;
  docimage9: any;
  formData: any;
  imageSrc: any;
  imageSrc0: any;
  imageSrc1: any;
  imageSrc3: any;
  imageSrc4: any;
  imageSrc5: any;
  imageSrc6: any;
  imageSrc7: any;
  imageSrc8: any;
  imageSrc9: any;
  imageSrc10: any;
  imageSrc11: any;
  imageSrc12: any;
  imageSrc13: any;
  imageSrc14: any;
  imageSrc15: any;
  imageSrc16: any;
  imageSrc17: any;
  imageSrc18: any;
  imageSrc19: any;
  imageSrc20: any;
  imageSrc21: any;
  imageSrc22: any;
  imageSrc23: any;
  imageSrc24: any;
  imageSrc25: any;
  imageSrc26: any;
  imageSrc27: any;
  imageSrc28: any;
  imageSrc29: any;
  imageSrc30: any;



  imageSrcbottom: any;
  imageSrcbottom1: any;
  imageSrcbottom2: any;
  imageSrcbottom3: any;
  imageSrcbottom4: any;
  imageSrcbottom5: any;
  imageSrcbottom6: any;
  imageSrcbottom7: any;
  imageSrcbottom8: any;
  imageSrcbottom9: any;
  imageSrcbottom10: any;
  imageSrcbottom11: any;
  imageSrcbottom12: any;
  imageSrcbottom13: any;
  imageSrcbottom14: any;
  imageSrcbottom15: any;
  imageSrcbottom16: any;
  imageSrcbottom17: any;
  imageSrcbottom18: any;
  imageSrcbottom19: any;
  imageSrcbottom20: any;
  imageSrcbottom21: any;
  imageSrcbottom22: any;
  imageSrcbottom23: any;
  imageSrcbottom24: any;
  imageSrcbottom25: any;
  imageSrcbottom26: any;
  imageSrcbottom27: any;
  imageSrcbottom28: any;
  imageSrcbottom29: any;
  imageSrcbottom30: any;

  imageSrcbottomimage: any;


  setBackgroundImage: any;
  showRow: boolean = true;
  columns: number[] = [];
  productsForm: any;
  formBuilder: any;
  imageUrls: any;
  apiService: any;
  router: any;



  backgroundElement: any;
  mainhead: any;
  user: any;
  serviceService: any;
  brandidval: any;
  brandvalue: any;
  categoryvalue: any;
  seasonvalue: any;
  sizes:any;




  showColumn0: boolean = true;
  showColumn1: boolean = true;
  showColumn2: boolean = false;
  showColumn3: boolean = false;
  showColumn4: boolean = false;
  showColumn5: boolean = false;
  showColumn6: boolean = false;
  showColumn7: boolean = false;
  showColumn8: boolean = false;
  showColumn9: boolean = false;
  showColumn10: boolean = false;
  showColumn11: boolean = false;
  showColumn12: boolean = false;
  showColumn13: boolean = false;
  showColumn14: boolean = false;
  showColumn15: boolean = false;
  showColumn16: boolean = false;
  showColumn17: boolean = false;
  showColumn18: boolean = false;
  showColumn19: boolean = false;
  showColumn20: boolean = false;
  showColumn21: boolean = false;
  showColumn22: boolean = false;
  showColumn23: boolean = false;
  showColumn24: boolean = false;
  showColumn25: boolean = false;
  showColumn26: boolean = false;
  showColumn27: boolean = false;
  showColumn28: boolean = false;
  showColumn29: boolean = false;
  showColumn30: boolean = false;
  showColumn31: boolean = false;



  imageData: any;


  docPictureinput: any;
  docPictureinput1: any;
  docPictureinput2: any;
  docPictureinput3: any;
  docPictureinput4: any;
  docPictureinput5: any;
  docPictureinput6: any;
  docPictureinput7: any;
  docPictureinput8: any;
  docPictureinput9: any;
  docPictureinput10: any;
  docPictureinput11: any;
  docPictureinput12: any;
  docPictureinput13: any;
  docPictureinput14: any;
  docPictureinput15: any;
  docPictureinput16: any;
  docPictureinput17: any;
  docPictureinput18: any;
  docPictureinput19: any;
  docPictureinput20: any;
  docPictureinput21: any;
  docPictureinput22: any;
  docPictureinput23: any;
  docPictureinput24: any;
  docPictureinput25: any;
  docPictureinput26: any;
  docPictureinput27: any;
  docPictureinput28: any;
  docPictureinput29: any;
  docPictureinput30: any;








  showNextColumn(): void {
    if (!this.showColumn1) {

      this.showColumn1 = true;

    } else if (!this.showColumn2) {
      this.showColumn2 = true;
    } else if (!this.showColumn3) {
      this.showColumn3 = true;
    }
    else if (!this.showColumn4) {
      this.showColumn4 = true;
    }
    else if (!this.showColumn5) {
      this.showColumn5 = true;
    }
    else if (!this.showColumn6) {
      this.showColumn6 = true;
    }
    else if (!this.showColumn7) {
      this.showColumn7 = true;
    }
    else if (!this.showColumn8) {
      this.showColumn8 = true;
    }
    else if (!this.showColumn9) {
      this.showColumn9 = true;
    }
    else if (!this.showColumn10) {
      this.showColumn10 = true;
    }
    else if (!this.showColumn11) {
      this.showColumn11 = true;
    }
    else if (!this.showColumn12) {
      this.showColumn12 = true;
    }
    else if (!this.showColumn13) {
      this.showColumn13 = true;
    }
    else if (!this.showColumn14) {
      this.showColumn14 = true;
    }
    else if (!this.showColumn15) {
      this.showColumn15 = true;
    }
    else if (!this.showColumn16) {
      this.showColumn16 = true;
    }
    else if (!this.showColumn17) {
      this.showColumn17 = true;
    }
    else if (!this.showColumn18) {
      this.showColumn18 = true;
    }
    else if (!this.showColumn19) {
      this.showColumn19 = true;
    }
    else if (!this.showColumn20) {
      this.showColumn20 = true;
    }
    else if (!this.showColumn21) {
      this.showColumn21 = true;
    }
    else if (!this.showColumn22) {
      this.showColumn22 = true;
    }
    else if (!this.showColumn23) {
      this.showColumn23 = true;
    }
    else if (!this.showColumn24) {
      this.showColumn24 = true;
    }
    else if (!this.showColumn25) {
      this.showColumn25 = true;
    }
    else if (!this.showColumn26) {
      this.showColumn26 = true;
    }
    else if (!this.showColumn27) {
      this.showColumn27 = true;
    }
    else if (!this.showColumn28) {
      this.showColumn28 = true;
    }
    else if (!this.showColumn29) {
      this.showColumn29 = true;
    }
    else if (!this.showColumn30) {
      this.showColumn30 = true;
    }

  }
  removeColumn(column: string): void {
    switch (column) {

      case 'column0': {



        this.showColumn0 = false;
        this.docPictureinput = null;
        this.imageData[1] = this.docPictureinput;

        break;
      }
      case 'column1': {



        this.showColumn1 = false;
        this.docPictureinput1 = null;
        this.imageData[2] = this.docPictureinput1;
        this.imageSrcbottom1 = null;
        this.setBackgroundImage1(this.imageSrcbottom1);

        break;
      }
      case 'column2': {


        this.showColumn2 = false;
        this.docPictureinput2 = null;
        this.imageData[3] = this.docPictureinput2;
        this.imageSrcbottom2 = null;
        this.setBackgroundImage2(this.imageSrcbottom2);



        break;
      }
      case 'column3': {

        this.showColumn3 = false;
        this.docPictureinput3 = null;
        this.imageData[4] = this.docPictureinput3;
        this.imageSrcbottom3 = null;
        this.setBackgroundImage3(this.imageSrcbottom3);


        break;
      }
      case 'column4': {

        this.showColumn4 = false;
        this.docPictureinput4 = null;
        this.imageData[5] = this.docPictureinput4;
        this.imageSrcbottom4 = null;
        this.setBackgroundImage4(this.imageSrcbottom4);

        break;
      }
      case 'column5': {

        this.showColumn5 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput5 = null;
        this.imageData[6] = this.docPictureinput5;
        this.imageSrcbottom5 = null;
        this.setBackgroundImage5(this.imageSrcbottom5);

        break;
      }
      case 'column6': {

        this.showColumn6 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput6 = null;
        this.imageData[7] = this.docPictureinput6;
        this.imageSrcbottom6 = null;
        this.setBackgroundImage6(this.imageSrcbottom6);

        break;
      }
      case 'column7': {

        this.showColumn7 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput7 = null;
        this.imageData[8] = this.docPictureinput7;
        this.imageSrcbottom7 = null;
        this.setBackgroundImage7(this.imageSrcbottom7);

        break;
      }
      case 'column8': {

        this.showColumn8 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput8 = null;
        this.imageData[9] = this.docPictureinput8;
        this.imageSrcbottom8 = null;
        this.setBackgroundImage8(this.imageSrcbottom8);

        break;
      }
      case 'column9': {

        this.showColumn9 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput9 = null;
        this.imageData[10] = this.docPictureinput9;
        this.imageSrcbottom9 = null;
        this.setBackgroundImage9(this.imageSrcbottom9);

        break;
      }
      case 'column10': {

        this.showColumn10 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput10 = null;
        this.imageData[11] = this.docPictureinput10;
        this.imageSrcbottom10 = null;
        this.setBackgroundImage10(this.imageSrcbottom10);

        break;
      }
      case 'column11': {

        this.showColumn11 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput11 = null;
        this.imageData[12] = this.docPictureinput11;
        this.imageSrcbottom11 = null;
        this.setBackgroundImage11(this.imageSrcbottom11);

        break;
      }
      case 'column12': {

        this.showColumn12 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput12 = null;
        this.imageData[13] = this.docPictureinput12;
        this.imageSrcbottom12 = null;
        this.setBackgroundImage12(this.imageSrcbottom12);

        break;
      }
      case 'column13': {

        this.showColumn13 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput13 = null;
        this.imageData[14] = this.docPictureinput13;
        this.imageSrcbottom13 = null;
        this.setBackgroundImage13(this.imageSrcbottom13);

        break;
      }

      case 'column14': {

        this.showColumn14 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput14 = null;
        this.imageData[15] = this.docPictureinput14;
        this.imageSrcbottom14 = null;
        this.setBackgroundImage14(this.imageSrcbottom14);

        break;
      }
      case 'column15': {

        this.showColumn15 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput15 = null;
        this.imageData[16] = this.docPictureinput15;
        this.imageSrcbottom15 = null;
        this.setBackgroundImage15(this.imageSrcbottom15);

        break;
      }

      case 'column16': {

        this.showColumn16 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput16 = null;
        this.imageData[17] = this.docPictureinput16;
        this.imageSrcbottom16 = null;
        this.setBackgroundImage16(this.imageSrcbottom16);

        break;
      }

      case 'column17': {

        this.showColumn17 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput17 = null;
        this.imageData[18] = this.docPictureinput17;
        this.imageSrcbottom17 = null;
        this.setBackgroundImage17(this.imageSrcbottom17);

        break;
      }
      case 'column18': {

        this.showColumn18 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput18 = null;
        this.imageData[19] = this.docPictureinput18;
        this.imageSrcbottom18 = null;
        this.setBackgroundImage18(this.imageSrcbottom18);

        break;
      }

      case 'column19': {

        this.showColumn19 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput19 = null;
        this.imageData[20] = this.docPictureinput19;
        this.imageSrcbottom19 = null;
        this.setBackgroundImage19(this.imageSrcbottom19);

        break;
      }

      case 'column20': {

        this.showColumn20 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput20 = null;
        this.imageData[21] = this.docPictureinput20;
        this.imageSrcbottom20 = null;
        this.setBackgroundImage20(this.imageSrcbottom20);

        break;
      }

      case 'column21': {

        this.showColumn21 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput21 = null;
        this.imageData[22] = this.docPictureinput21;
        this.imageSrcbottom21 = null;
        this.setBackgroundImage21(this.imageSrcbottom21);

        break;
      }

      case 'column22': {

        this.showColumn22 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput22 = null;
        this.imageData[23] = this.docPictureinput22;
        this.imageSrcbottom22 = null;
        this.setBackgroundImage22(this.imageSrcbottom22);

        break;
      }

      case 'column23': {

        this.showColumn23 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput23 = null;
        this.imageData[24] = this.docPictureinput23;
        this.imageSrcbottom23 = null;
        this.setBackgroundImage23(this.imageSrcbottom23);

        break;
      }

      case 'column24': {

        this.showColumn24 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput24 = null;
        this.imageData[25] = this.docPictureinput24;
        this.imageSrcbottom24 = null;
        this.setBackgroundImage24(this.imageSrcbottom24);

        break;
      }
      case 'column25': {

        this.showColumn25 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput25 = null;
        this.imageData[26] = this.docPictureinput25;
        this.imageSrcbottom25 = null;
        this.setBackgroundImage25(this.imageSrcbottom25);

        break;
      }
      case 'column26': {

        this.showColumn26 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput26 = null;
        this.imageData[27] = this.docPictureinput26;
        this.imageSrcbottom26 = null;
        this.setBackgroundImage26(this.imageSrcbottom26);

        break;
      }

      case 'column27': {

        this.showColumn27 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput27 = null;
        this.imageData[28] = this.docPictureinput27;
        this.imageSrcbottom27 = null;
        this.setBackgroundImage27(this.imageSrcbottom27);

        break;
      }
      case 'column28': {

        this.showColumn28 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput28 = null;
        this.imageData[29] = this.docPictureinput28;
        this.imageSrcbottom28 = null;
        this.setBackgroundImage28(this.imageSrcbottom28);

        break;
      }

      case 'column29': {

        this.showColumn29 = false; // Corrected from showColumn4 to showColumn5
        this.docPictureinput29 = null;
        this.imageData[30] = this.docPictureinput29;
        this.imageSrcbottom29 = null;
        this.setBackgroundImage29(this.imageSrcbottom29);

        break;
      }

      default: {
        // Handle the case if an invalid column is provided
        alert("Invalid column: " + column);
        break;
      }
    }
  }


 
allState:any;
departments:any;
alldesignation:any;
allworkmode:any;
allcommission:any;
allemploymenttype:any;



  constructor(formBuilder: FormBuilder, apiService: ApiService, router: Router) {
    this.apiService = apiService;
    this.formBuilder = formBuilder;
    this.productsForm = this.formBuilder
    this.showRow = true;
    this.imageUrls = [];
 
    this.router = router;
    this.formData = new FormData();
    this.docTopimage = null;
    this.docPictureinput = null;
    this.docPictureinput1 = null;
    this.docPictureinput2 = null;
    this.docPictureinput3 = null;
    this.docPictureinput4 = null;
    this.docPictureinput5 = null;
    this.docPictureinput6 = null;
    this.docPictureinput7 = null;
    this.docPictureinput8 = null;
    this.docPictureinput9 = null;
    this.docPictureinput10 = null;
    this.docPictureinput11 = null;
    this.docPictureinput12 = null;
    this.docPictureinput13 = null;
    this.docPictureinput14 = null;
    this.docPictureinput15 = null;
    this.docPictureinput16 = null;
    this.docPictureinput17 = null;
    this.docPictureinput18 = null;
    this.docPictureinput19 = null;
    this.docPictureinput20 = null;
    this.docPictureinput21 = null;
    this.docPictureinput22 = null;
    this.docPictureinput23 = null;
    this.docPictureinput24 = null;
    this.docPictureinput25 = null;
    this.docPictureinput26 = null;
    this.docPictureinput27 = null;
    this.docPictureinput28 = null;
    this.docPictureinput29 = null;
    this.docPictureinput30 = null;

    this.imageData = [
      this.docTopimage,
      this.docPictureinput,
      this.docPictureinput1,
      this.docPictureinput2,
      this.docPictureinput3,
      this.docPictureinput4,
      this.docPictureinput5,
      this.docPictureinput6,
      this.docPictureinput7,
      this.docPictureinput8,
      this.docPictureinput9,
      this.docPictureinput10,
      this.docPictureinput11,
      this.docPictureinput12,
      this.docPictureinput13,
      this.docPictureinput14,
      this.docPictureinput15,
      this.docPictureinput16,
      this.docPictureinput17,
      this.docPictureinput18,
      this.docPictureinput19,
      this.docPictureinput20,
      this.docPictureinput21,
      this.docPictureinput22,
      this.docPictureinput23,
      this.docPictureinput24,
      this.docPictureinput25,
      this.docPictureinput26,
      this.docPictureinput27,
      this.docPictureinput28,
      this.docPictureinput29,
      this.docPictureinput30
    ];



    this.apiService.getAllEmploymentType().subscribe(
      (response : any) => {               
        this.allemploymenttype = response.data;
        console.log("getAllEmploymentType");
        console.log(this.allemploymenttype);
        console.log("getAllEmploymentType");
          
      })


this.apiService.getAllCommissionType().subscribe(
      (response : any) => {               
        this.allcommission = response.data;
        console.log("getAllCommissionType");
        console.log(this.allcommission);
        console.log("getAllCommissionType");
          
      })


 this.apiService.getAllWorkMode().subscribe(
      (response : any) => {               
        this.allworkmode = response.data;
        console.log("getAllWorkMode");
        console.log(this.allworkmode);
        console.log("getAllWorkMode");
          
      })

    
    this.apiService.getAllSize().subscribe(
      (response : any) => {
        this.sizes = response.data;
      })


       this.apiService.getAllState().subscribe(
      (response : any) => {
               
        this.allState = response.data;
        console.log("allState");
        console.log(this.allState);
        console.log("allState");          
      })



      this.apiService.getAllDepartment().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("Niraj Department Department");
        console.log(this.departments);
        console.log("Niraj Department");

          
      })

      this.apiService.getAllDesignation().subscribe(
      (response : any) => {               
        this.alldesignation = response.data;
        console.log("alldesignation");
        console.log(this.alldesignation);
        console.log("alldesignation");
          
      })


    this.productsForm = this.formBuilder.group({
      topimage: [''],
      name: [''],
      designationid:[''],
      designation: [''],
      department: [''],
      workmode: [''],
      officelocation:[''],
      contactnumber: [''],
      address:[''],
      country: [''],
      
      staeid:[''],

      state:[''],

      city:[''],
      pincode:[''],
      reportingmanager:[''],
      gender:[''],
      dateofbirth:[''],
      dateofjoining:[''],
      pannumber:[''],
      aadhaarnumber:[''],
      uan:[''],
      pfnumber:[''],
      pfjoiningdate:[''],
      esinumber:[''],
      nameofbank:[''],
      ifsccode:[''],
      accountnumber:[''],
      nameofaccountholder:[''],
      upiid:[''],
      bloodgroupofemployee:[''],
      emergencycontactpersonname:[''],
      relation:[''],
      relationcontactnumber:[''],
      typeofemployment:[''],
      monthlyfixedsalary:[''],
      minimumguaranteedsalary:[''],
      monthlytargetvalue:[''],
      commissiontype:[''],
      commissionrate:[''],

      department_id:[1],
      workmodeid:[1],
      typeofemploymentid:[''],
      commissionid:[''],
      



      imgfile0: [''],
      imgfile1: [''],
      imgfile2: [''],
      imgfile3: [''],
      imgfile4: [''],
      imgfile5: [''],
      imgfile6: [''],
      imgfile7: [''],
      imgfile8: [''],
      imgfile9: [''],
      imgfile10: [''],
      imgfile11: [''],
      imgfile12: [''],
      imgfile13: [''],
      imgfile14: [''],
      imgfile15: [''],
      imgfile16: [''],
      imgfile17: [''],
      imgfile18: [''],
      imgfile19: [''],
      imgfile20: [''],
      imgfile21: [''],
      imgfile22: [''],
      imgfile23: [''],
      imgfile24: [''],
      imgfile25: [''],
      imgfile26: [''],
      imgfile27: [''],
      imgfile28: [''],
      imgfile29: [''],
      imgfile30: [''],
      imgcolor0: [''],
      imgcolor1: [''],
      imgcolor2: [''],
      imgcolor3: [''],
      imgcolor4: [''],
      imgcolor5: [''],
      imgcolor6: [''],
      imgcolor7: [''],
      imgcolor8: [''],
      imgcolor9: [''],
      imgcolor10: [''],
      imgcolor11: [''],
      imgcolor12: [''],
      imgcolor13: [''],
      imgcolor14: [''],
      imgcolor15: [''],
      imgcolor16: [''],
      imgcolor17: [''],
      imgcolor18: [''],
      imgcolor19: [''],
      imgcolor20: [''],
      imgcolor21: [''],
      imgcolor22: [''],
      imgcolor23: [''],
      imgcolor24: [''],
      imgcolor25: [''],
      imgcolor26: [''],
      imgcolor27: [''],
      imgcolor28: [''],
      imgcolor29: [''],
      imgcolor30: [''],




    



    });
  }



  ngOnInit(): void {

  }


  toggleRowVisibility(): void {
    this.showRow = !this.showRow;
  }

  onSubmit() {


    console.log("this.productsForm");

    console.log(this.productsForm);

    console.log("this.productsForm");



    if (this.productsForm.value.name.length == 0) {
      alert("Kinldy enter the Employee name.");
      return;
    }
    else if (this.productsForm.value.topimage.length == 0) {
      alert("Kinldy select the topimage  ");
      return;
    }
    else if (this.productsForm.value.designation.length == 0) {
      alert("Kinldy enter  the employee designation ");
      return;
    }
    

    else if (this.productsForm.value.workmode.length == 0) {
      alert("Kinldy enter  the work mode");
      return;
    }
    else if (this.productsForm.value.contactnumber.length == 0 || this.productsForm.value.contactnumber == 0) {
      alert("Kinldy enter  the mobile number");
      return;
    }
    else if (this.productsForm.value.department.length == 0 || this.productsForm.value.department == 0) {
      alert("Kinldy Enter  the department number");
      return;
    }
    else {

    }


const payload = {
    ...this.productsForm.value,   // existing form fields
    departmentobj: {
      id: this.productsForm.value.department_id                  // or this.formsize.value.companyId
    }
  };


  console.log("=========Paylaod =================");
  
  console.log("=========Paylaod =================");

  
  console.log(payload);


  console.log("=========Paylaod =================");

  console.log("=========Paylaod =================");


  



    this.imageData.forEach((element: any) => {
  
      if (element != undefined) {
        this.formData.append('file', element, element.name);
      }


    });




    //this.formData.append("eventProduct", JSON.stringify(this.productsForm.value));
  
   
  this.formData.append(
    'eventProduct',
    JSON.stringify(payload)
  );
    
  

  console.log(" Employee Form data =========");
  console.log(" Employee Form data =========");
  console.log(" Employee Form data =========");
  console.log(" Employee Form data =========");
  console.log(this.formData);
  console.log(" Employee Form data =========");
  console.log(" Employee Form data =========");
  console.log(" Employee Form data =========");


  
    this.apiService.saveEmployee(this.formData).subscribe(
      (response: any) => {

        alert(response.mesage);
        if (response.mesage == "Data Stored successfully." || response.status == 200) {

          this.router.navigateByUrl('/getallemployee.component');
        }
        else
        {
          console.log(response);
        }
      })


    


  }
  onFileSelected(event: any): void {
    this.docTopimage = event.target.files[0];
    this.imageData[0] = this.docTopimage;

    //  this.formData.append('file', this.docTopimage,this.docTopimage.name);




    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;
        this.setBackgroundImage(this.imageSrc);
      };


    }





  }
  onFileSelectBottom(event: any): void {

    this.docPictureinput = event.target.files[0];

    this.imageData[1] = this.docPictureinput;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrcbottom = reader.result as string;
        this.setBackgroundImage(this.imageSrcbottom);

      };

    }

  }


  onFileSelectBottoms(event: any): void {

    this.docPictureinput1 = event.target.files[0];

    this.imageData[2] = this.docPictureinput1;
    // this.formData.append('file', this.docPictureinput1, this.docPictureinput1.name);
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file1] = event.target.files;
      reader.readAsDataURL(file1);
      reader.onload = () => {
        this.imageSrcbottom1 = reader.result as string;
        this.setBackgroundImage1(this.imageSrcbottom1);
      };
    }
  }

  setBackgroundImage1(imageUrl: string): void {


    const backgroundElement1 = document.getElementById('backgroundElement1');
    if (backgroundElement1) {
      backgroundElement1.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom2(event: any): void {

    this.docPictureinput2 = event.target.files[0];

    this.imageData[3] = this.docPictureinput2;

    //  this.formData.append('file', this.docPictureinput2,this.docPictureinput2.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file2] = event.target.files;
      reader.readAsDataURL(file2);
      reader.onload = () => {
        this.imageSrcbottom2 = reader.result as string;
        this.setBackgroundImage2(this.imageSrcbottom2);

      };

    }

  }
  setBackgroundImage2(imageUrl: string): void {
    const backgroundElement2 = document.getElementById('backgroundElement2');
    if (backgroundElement2) {
      backgroundElement2.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom3(event: any): void {

    this.docPictureinput3 = event.target.files[0];

    this.imageData[4] = this.docPictureinput3;

    //this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file3] = event.target.files;
      reader.readAsDataURL(file3);
      reader.onload = () => {
        this.imageSrcbottom3 = reader.result as string;
        this.setBackgroundImage3(this.imageSrcbottom3);

      };

    }

  }
  setBackgroundImage3(imageUrl: string): void {
    const backgroundElement3 = document.getElementById('backgroundElement3');
    if (backgroundElement3) {
      backgroundElement3.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom4(event: any): void {

    this.docPictureinput4 = event.target.files[0];

    this.imageData[5] = this.docPictureinput4;

    //this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file4] = event.target.files;
      reader.readAsDataURL(file4);
      reader.onload = () => {
        this.imageSrcbottom4 = reader.result as string;
        this.setBackgroundImage4(this.imageSrcbottom4);

      };

    }

  }
  setBackgroundImage4(imageUrl: string): void {
    const backgroundElement4 = document.getElementById('backgroundElement4');
    if (backgroundElement4) {
      backgroundElement4.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom5(event: any): void {

    this.docPictureinput5 = event.target.files[0];

    this.imageData[6] = this.docPictureinput5;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file5] = event.target.files;
      reader.readAsDataURL(file5);
      reader.onload = () => {
        this.imageSrcbottom5 = reader.result as string;
        this.setBackgroundImage5(this.imageSrcbottom5);

      };

    }

  }
  setBackgroundImage5(imageUrl: string): void {
    const backgroundElement5 = document.getElementById('backgroundElement5');
    if (backgroundElement5) {
      backgroundElement5.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom6(event: any): void {

    this.docPictureinput6 = event.target.files[0];

    this.imageData[7] = this.docPictureinput6;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file6] = event.target.files;
      reader.readAsDataURL(file6);
      reader.onload = () => {
        this.imageSrcbottom6 = reader.result as string;
        this.setBackgroundImage6(this.imageSrcbottom6);

      };

    }

  }
  setBackgroundImage6(imageUrl: string): void {
    const backgroundElement6 = document.getElementById('backgroundElement6');
    if (backgroundElement6) {
      backgroundElement6.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom7(event: any): void {

    this.docPictureinput7 = event.target.files[0];

    this.imageData[8] = this.docPictureinput7;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file7] = event.target.files;
      reader.readAsDataURL(file7);
      reader.onload = () => {
        this.imageSrcbottom7 = reader.result as string;
        this.setBackgroundImage7(this.imageSrcbottom7);

      };

    }

  }
  setBackgroundImage7(imageUrl: string): void {
    const backgroundElement7 = document.getElementById('backgroundElement7');
    if (backgroundElement7) {
      backgroundElement7.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom8(event: any): void {

    this.docPictureinput8 = event.target.files[0];

    this.imageData[9] = this.docPictureinput8;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file8] = event.target.files;
      reader.readAsDataURL(file8);
      reader.onload = () => {
        this.imageSrcbottom8 = reader.result as string;
        this.setBackgroundImage8(this.imageSrcbottom8);

      };

    }

  }
  setBackgroundImage8(imageUrl: string): void {
    const backgroundElement8 = document.getElementById('backgroundElement8');
    if (backgroundElement8) {
      backgroundElement8.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom9(event: any): void {

    this.docPictureinput9 = event.target.files[0];

    this.imageData[10] = this.docPictureinput9;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file9] = event.target.files;
      reader.readAsDataURL(file9);
      reader.onload = () => {
        this.imageSrcbottom9 = reader.result as string;
        this.setBackgroundImage9(this.imageSrcbottom9);

      };

    }

  }
  setBackgroundImage9(imageUrl: string): void {
    const backgroundElement9 = document.getElementById('backgroundElement9');
    if (backgroundElement9) {
      backgroundElement9.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom10(event: any): void {

    this.docPictureinput10 = event.target.files[0];

    this.imageData[11] = this.docPictureinput10;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file10] = event.target.files;
      reader.readAsDataURL(file10);
      reader.onload = () => {
        this.imageSrcbottom10 = reader.result as string;
        this.setBackgroundImage10(this.imageSrcbottom10);

      };

    }

  }
  setBackgroundImage10(imageUrl: string): void {
    const backgroundElement10 = document.getElementById('backgroundElement10');
    if (backgroundElement10) {
      backgroundElement10.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom11(event: any): void {

    this.docPictureinput11 = event.target.files[0];

    this.imageData[12] = this.docPictureinput11;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file11] = event.target.files;
      reader.readAsDataURL(file11);
      reader.onload = () => {
        this.imageSrcbottom11 = reader.result as string;
        this.setBackgroundImage11(this.imageSrcbottom11);

      };

    }

  }
  setBackgroundImage11(imageUrl: string): void {
    const backgroundElement11 = document.getElementById('backgroundElement11');
    if (backgroundElement11) {
      backgroundElement11.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom12(event: any): void {

    this.docPictureinput12 = event.target.files[0];

    this.imageData[13] = this.docPictureinput12;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file12] = event.target.files;
      reader.readAsDataURL(file12);
      reader.onload = () => {
        this.imageSrcbottom12 = reader.result as string;
        this.setBackgroundImage12(this.imageSrcbottom12);

      };

    }

  }
  setBackgroundImage12(imageUrl: string): void {
    const backgroundElement12 = document.getElementById('backgroundElement12');
    if (backgroundElement12) {
      backgroundElement12.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom13(event: any): void {

    this.docPictureinput13 = event.target.files[0];

    this.imageData[14] = this.docPictureinput13;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file13] = event.target.files;
      reader.readAsDataURL(file13);
      reader.onload = () => {
        this.imageSrcbottom13 = reader.result as string;
        this.setBackgroundImage13(this.imageSrcbottom13);

      };

    }

  }
  setBackgroundImage13(imageUrl: string): void {
    const backgroundElement13 = document.getElementById('backgroundElement13');
    if (backgroundElement13) {
      backgroundElement13.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom14(event: any): void {

    this.docPictureinput14 = event.target.files[0];

    this.imageData[15] = this.docPictureinput14;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file14] = event.target.files;
      reader.readAsDataURL(file14);
      reader.onload = () => {
        this.imageSrcbottom14 = reader.result as string;
        this.setBackgroundImage14(this.imageSrcbottom14);

      };

    }

  }
  setBackgroundImage14(imageUrl: string): void {
    const backgroundElement14 = document.getElementById('backgroundElement14');
    if (backgroundElement14) {
      backgroundElement14.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom15(event: any): void {

    this.docPictureinput15 = event.target.files[0];

    this.imageData[16] = this.docPictureinput15;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file15] = event.target.files;
      reader.readAsDataURL(file15);
      reader.onload = () => {
        this.imageSrcbottom15 = reader.result as string;
        this.setBackgroundImage15(this.imageSrcbottom15);

      };

    }

  }
  setBackgroundImage15(imageUrl: string): void {
    const backgroundElement15 = document.getElementById('backgroundElement15');
    if (backgroundElement15) {
      backgroundElement15.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom16(event: any): void {

    this.docPictureinput16 = event.target.files[0];

    this.imageData[17] = this.docPictureinput16;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file16] = event.target.files;
      reader.readAsDataURL(file16);
      reader.onload = () => {
        this.imageSrcbottom16 = reader.result as string;
        this.setBackgroundImage16(this.imageSrcbottom16);

      };

    }

  }
  setBackgroundImage16(imageUrl: string): void {
    const backgroundElement16 = document.getElementById('backgroundElement16');
    if (backgroundElement16) {
      backgroundElement16.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom17(event: any): void {

    this.docPictureinput17 = event.target.files[0];

    this.imageData[18] = this.docPictureinput17;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file17] = event.target.files;
      reader.readAsDataURL(file17);
      reader.onload = () => {
        this.imageSrcbottom17 = reader.result as string;
        this.setBackgroundImage17(this.imageSrcbottom17);

      };

    }

  }
  setBackgroundImage17(imageUrl: string): void {
    const backgroundElement17 = document.getElementById('backgroundElement17');
    if (backgroundElement17) {
      backgroundElement17.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom18(event: any): void {

    this.docPictureinput18 = event.target.files[0];

    this.imageData[19] = this.docPictureinput18;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file18] = event.target.files;
      reader.readAsDataURL(file18);
      reader.onload = () => {
        this.imageSrcbottom18 = reader.result as string;
        this.setBackgroundImage18(this.imageSrcbottom18);

      };

    }

  }
  setBackgroundImage18(imageUrl: string): void {
    const backgroundElement18 = document.getElementById('backgroundElement18');
    if (backgroundElement18) {
      backgroundElement18.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom19(event: any): void {

    this.docPictureinput19 = event.target.files[0];

    this.imageData[20] = this.docPictureinput19;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file19] = event.target.files;
      reader.readAsDataURL(file19);
      reader.onload = () => {
        this.imageSrcbottom19 = reader.result as string;
        this.setBackgroundImage19(this.imageSrcbottom19);

      };

    }

  }
  setBackgroundImage19(imageUrl: string): void {
    const backgroundElement19 = document.getElementById('backgroundElement19');
    if (backgroundElement19) {
      backgroundElement19.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom20(event: any): void {

    this.docPictureinput20 = event.target.files[0];

    this.imageData[21] = this.docPictureinput18;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file20] = event.target.files;
      reader.readAsDataURL(file20);
      reader.onload = () => {
        this.imageSrcbottom20 = reader.result as string;
        this.setBackgroundImage20(this.imageSrcbottom20);

      };

    }

  }
  setBackgroundImage20(imageUrl: string): void {
    const backgroundElement20 = document.getElementById('backgroundElement20');
    if (backgroundElement20) {
      backgroundElement20.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom21(event: any): void {

    this.docPictureinput21 = event.target.files[0];

    this.imageData[22] = this.docPictureinput21;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file21] = event.target.files;
      reader.readAsDataURL(file21);
      reader.onload = () => {
        this.imageSrcbottom21 = reader.result as string;
        this.setBackgroundImage21(this.imageSrcbottom21);

      };

    }

  }
  setBackgroundImage21(imageUrl: string): void {
    const backgroundElement21 = document.getElementById('backgroundElement21');
    if (backgroundElement21) {
      backgroundElement21.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom22(event: any): void {

    this.docPictureinput22 = event.target.files[0];

    this.imageData[23] = this.docPictureinput22;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file22] = event.target.files;
      reader.readAsDataURL(file22);
      reader.onload = () => {
        this.imageSrcbottom22 = reader.result as string;
        this.setBackgroundImage22(this.imageSrcbottom22);

      };

    }

  }
  setBackgroundImage22(imageUrl: string): void {
    const backgroundElement22 = document.getElementById('backgroundElement22');
    if (backgroundElement22) {
      backgroundElement22.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom23(event: any): void {

    this.docPictureinput23 = event.target.files[0];

    this.imageData[24] = this.docPictureinput23;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file23] = event.target.files;
      reader.readAsDataURL(file23);
      reader.onload = () => {
        this.imageSrcbottom23 = reader.result as string;
        this.setBackgroundImage23(this.imageSrcbottom23);

      };

    }

  }
  setBackgroundImage23(imageUrl: string): void {
    const backgroundElement23 = document.getElementById('backgroundElement23');
    if (backgroundElement23) {
      backgroundElement23.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom24(event: any): void {

    this.docPictureinput24 = event.target.files[0];

    this.imageData[25] = this.docPictureinput24;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file24] = event.target.files;
      reader.readAsDataURL(file24);
      reader.onload = () => {
        this.imageSrcbottom24 = reader.result as string;
        this.setBackgroundImage24(this.imageSrcbottom24);

      };

    }

  }
  setBackgroundImage24(imageUrl: string): void {
    const backgroundElement24 = document.getElementById('backgroundElement24         ');
    if (backgroundElement24) {
      backgroundElement24.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom25(event: any): void {

    this.docPictureinput25 = event.target.files[0];

    this.imageData[26] = this.docPictureinput25;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file25] = event.target.files;
      reader.readAsDataURL(file25);
      reader.onload = () => {
        this.imageSrcbottom25 = reader.result as string;
        this.setBackgroundImage25(this.imageSrcbottom25);

      };

    }

  }
  setBackgroundImage25(imageUrl: string): void {
    const backgroundElement25 = document.getElementById('backgroundElement25');
    if (backgroundElement25) {
      backgroundElement25.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom26(event: any): void {

    this.docPictureinput26 = event.target.files[0];

    this.imageData[27] = this.docPictureinput26;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file26] = event.target.files;
      reader.readAsDataURL(file26);
      reader.onload = () => {
        this.imageSrcbottom26 = reader.result as string;
        this.setBackgroundImage26(this.imageSrcbottom26);

      };

    }

  }
  setBackgroundImage26(imageUrl: string): void {
    const backgroundElement26 = document.getElementById('backgroundElement26');
    if (backgroundElement26) {
      backgroundElement26.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom27(event: any): void {

    this.docPictureinput27 = event.target.files[0];

    this.imageData[28] = this.docPictureinput27;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file27] = event.target.files;
      reader.readAsDataURL(file27);
      reader.onload = () => {
        this.imageSrcbottom27 = reader.result as string;
        this.setBackgroundImage27(this.imageSrcbottom27);

      };

    }

  }
  setBackgroundImage27(imageUrl: string): void {
    const backgroundElement27 = document.getElementById('backgroundElement27');
    if (backgroundElement27) {
      backgroundElement27.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom28(event: any): void {

    this.docPictureinput28 = event.target.files[0];

    this.imageData[29] = this.docPictureinput28;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file28] = event.target.files;
      reader.readAsDataURL(file28);
      reader.onload = () => {
        this.imageSrcbottom28 = reader.result as string;
        this.setBackgroundImage28(this.imageSrcbottom28);

      };

    }

  }
  setBackgroundImage28(imageUrl: string): void {
    const backgroundElement28 = document.getElementById('backgroundElement28');
    if (backgroundElement28) {
      backgroundElement28.style.backgroundImage = `url(${imageUrl})`;
    }
  }

  onFileSelectBottom29(event: any): void {

    this.docPictureinput29 = event.target.files[0];

    this.imageData[30] = this.docPictureinput29;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file29] = event.target.files;
      reader.readAsDataURL(file29);
      reader.onload = () => {
        this.imageSrcbottom29 = reader.result as string;
        this.setBackgroundImage29(this.imageSrcbottom29);

      };

    }

  }
  setBackgroundImage29(imageUrl: string): void {
    const backgroundElement29 = document.getElementById('backgroundElement29');
    if (backgroundElement29) {
      backgroundElement29.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  onFileSelectBottom30(event: any): void {

    this.docPictureinput30 = event.target.files[0];

    this.imageData[31] = this.docPictureinput30;
    // this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file29] = event.target.files;
      reader.readAsDataURL(file29);
      reader.onload = () => {
        this.imageSrcbottom30 = reader.result as string;
        this.setBackgroundImage30(this.imageSrcbottom30);

      };

    }

  }
  setBackgroundImage30(imageUrl: string): void {
    const backgroundElement30 = document.getElementById('backgroundElement30');
    if (backgroundElement30) {
      backgroundElement30.style.backgroundImage = `url(${imageUrl})`;
    }
  }



  get f() {
    return this.productsForm.controls;

  }


  alpha(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /^[0-9]*$/;

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  

onStateChange(event: any) {
  const selectedId = event.target.value;

  const selectedState = this.allState.find(
    (statedata: any) => statedata.id == selectedId
  );

  if (selectedState) {
    this.productsForm.patchValue({
      state: selectedState.statename
    });
  } else {
    this.productsForm.patchValue({
      state: ''
    });
  }
}

onDepartmentChange(event: any) {
  const deptid = event.target.value;

  const selectedDepartment = this.departments.find(
    (departmentsdata: any) => departmentsdata.id == deptid
  );

  if (selectedDepartment) {
    this.productsForm.patchValue({
      department: selectedDepartment.deptname
    });
  } else {
    this.productsForm.patchValue({
      department: ''
    });
  }
}


onDesignationChange(event: any) {
  const designationid = event.target.value;

  const selecteddesignation = this.alldesignation.find(
    (designationdata: any) => designationdata.id == designationid
  );

  if (selecteddesignation) {
    this.productsForm.patchValue({
      designation: selecteddesignation.designationname
    });
  } else {
    this.productsForm.patchValue({
      designation: ''
    });
  }
}



onWorkModeChange(event: any) {
  const workmodeid = event.target.value;

  const selectedworkmode = this.allworkmode.find(
    (workmodedata: any) => workmodedata.id == workmodeid
  );

  if (selectedworkmode) {
    this.productsForm.patchValue({
      workmode: selectedworkmode.workmodename
    });
  } else {
    this.productsForm.patchValue({
      workmode: ''
    });
  }
}


onEmploymentTypeChange(event: any) {
  const employmenttypeid = event.target.value;

  const selectedemploymenttype = this.allemploymenttype.find(
    (employmenttypedata: any) => employmenttypedata.id == employmenttypeid
  );

  if (selectedemploymenttype) {
    this.productsForm.patchValue({
      typeofemployment: selectedemploymenttype.employmenttypename
    });
  } else {
    this.productsForm.patchValue({
      typeofemployment: ''
    });
  }
}


onCommissionTypeChange(event: any) {
  const commissiontypeid = event.target.value;

  const selectedcommissiontype = this.allcommission.find(
    (commissiontypedata: any) => commissiontypedata.id == commissiontypeid
  );

  if (selectedcommissiontype) {
    this.productsForm.patchValue({
      commissiontype: selectedcommissiontype.commitiontypename
    });
  } else {
    this.productsForm.patchValue({
      commissiontype: ''
    });
  }
}


}


