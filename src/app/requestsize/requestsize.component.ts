import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { LogService } from '../log.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LOG } from '@zxing/library/esm/core/datamatrix/encoder/constants';

@Component({
  selector: 'app-requestsize',
  templateUrl: './requestsize.component.html',
  styleUrls: ['./requestsize.component.css']
})
export class RequestsizeComponent implements OnInit {
  mainfoot: any;
  formBuilder: FormBuilder;
  apiService: ApiService;
  authService: AuthService;
  sizes: any;
  logService: any;
  requestMaster: any;
  formsize: any; // Use FormGroup for forms
  allVendorData: any; // Initialize as an empty array
  route: any;
  givenmobileNumber: any;
  userInfo: any;


  constructor(
    formBuilder: FormBuilder,
    apiService: ApiService,
    authService: AuthService,
    logService: LogService,
    route: ActivatedRoute
  ) {
    this.logService = logService;
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none';

    this.formBuilder = formBuilder;
    this.apiService = apiService;
    this.authService = authService;

    this.route = route;

    // this.route.queryParams.subscribe((params: Params) => {
    //   this.givenmobileNumber = params['mobile'];

    //   alert('Mobile Number:'+ this.givenmobileNumber);

    // });


    this.formsize = this.formBuilder.group({
      mobilenumber: ['', Validators.required],
      vendorname: ['', Validators.required],
      uid: ['', Validators.required],
      roleid: ['', Validators.required],
      requestType: ['', Validators.required],
      requestValue: ['', Validators.required]

    });
    this.apiService.getAllSize().subscribe(
      (response: any) => {
        this.sizes = response.data;

        this.logService.clog(" Product Data ", this.sizes, false);


      });


    this.apiService.showRequests().subscribe(
      (responseshowRequests: any) => {
        this.requestMaster = responseshowRequests;

        this.logService.clog(" Request data ", this.requestMaster, false);

      });


    // this.apiService.getAllVendors().subscribe(
    //   (response: any) => {
    //     this.allVendorData = response.data;
    //     // alert( this.allVendorData)
    //     console.log(this.allVendorData);

    //   },
    //   (error: any) => {
    //     console.error('Error:', error);
    //     // Handle the error appropriately
    //   }
    // );


    // Subscribe to changes in the mobilenumber field
    // this.formsize.get('mobilenumber').valueChanges.subscribe((newValue: string) => {
    //   this.updateVendorInfo(newValue);
    // });
  }

  // updateVendorInfo(enteredMobile: string) {
  //   const matchedVendor = this.allVendorData.find((vendor: any) => vendor.mobile === enteredMobile);

  //   if (matchedVendor) {
  //     this.formsize.patchValue({

  //       vendorname: matchedVendor.firstName,
  //       uid: matchedVendor.id,
  //       roleid: matchedVendor.roleid
  //     });
  //   } else {
  //     this.formsize.patchValue({
  //       vendorname: '',
  //       uid: '',
  //       roleid: ''
  //     });

  //   }
  // }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.givenmobileNumber = params['mobile'];
   

      // Call API to get all vendor data
      this.apiService.getAllVendors().subscribe(
        (response: any) => {
          this.allVendorData = response.data;
          console.log(this.allVendorData);

          // Find user info based on mobile number
          this.findUserInfo();
        },
        (error: any) => {
          console.error('Error:', error);
          // Handle the error appropriately
        }
      );
    });
  }

  findUserInfo(): void {
    const matchedVendor = this.allVendorData.find(
      (vendor: any) => vendor.mobile === this.givenmobileNumber
    );

    if (matchedVendor) {
      this.formsize.patchValue({
        mobilenumber: matchedVendor.mobile,
        vendorname: matchedVendor.firstName,
        uid: matchedVendor.id,
        roleid: matchedVendor.roleid
      });
    } else {
      this.formsize.patchValue({
        vendorname: '',
        uid: '',
        roleid: ''
      });
    }
  }

  // mobilenumber: matchedVendor.mobile,
  onSubmit() {
    const formData = new FormData();
    this.logService.clog(" Request data ", JSON.stringify(this.formsize.value), true);

    formData.append('requestmaster', JSON.stringify(this.formsize.value));

    this.apiService.saveRequest(formData).subscribe(
      (response: any) => {

        this.logService.clog(" Request data ",response,true);

        if (response.status === 200) {
          alert('Size Requested Successfully.');
        } else {
          alert('Not Add');
        }
      },
      (error: any) => {
        console.error('Error:', error);
        // Handle the error appropriately
      });
  }
}


