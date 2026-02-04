import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apitoken =          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJhamFkbWluIn0.4nNbvscnxlhI1lR1s7d7_ACoN6P7WCNq4gG0tP-Q2ZHO_la2q58ukf9VtEETllyj_8PIUJ61fV_vptUeYUccjQ';
  private apitokenVendor  =   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJhamFkbWluIn0.4nNbvscnxlhI1lR1s7d7_ACoN6P7WCNq4gG0tP-Q2ZHO_la2q58ukf9VtEETllyj_8PIUJ61fV_vptUeYUccjQ';
  private apitokenMerchan =   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJhamFkbWluIn0.4nNbvscnxlhI1lR1s7d7_ACoN6P7WCNq4gG0tP-Q2ZHO_la2q58ukf9VtEETllyj_8PIUJ61fV_vptUeYUccjQ';
  private apitokenUser =      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJhamFkbWluIn0.4nNbvscnxlhI1lR1s7d7_ACoN6P7WCNq4gG0tP-Q2ZHO_la2q58ukf9VtEETllyj_8PIUJ61fV_vptUeYUccjQ';
  private apitokenUserAdmin = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJhamFkbWluIn0.4nNbvscnxlhI1lR1s7d7_ACoN6P7WCNq4gG0tP-Q2ZHO_la2q58ukf9VtEETllyj_8PIUJ61fV_vptUeYUccjQ';
  headers: any;
  headersAdmin: any;
  headersUser: any;
  headersMerchant: any;
  headersVendor: any;


   apiUrl = 'http://localhost:8085/api';

  http: HttpClient;


  constructor(http: HttpClient) {

    this.apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXJhamFkbWluIiwiaWF0IjoxNzY5MDU3NTcxLCJleHAiOjE3NzE2NDk1NzF9.BoM5OEdczAZlL1TGaV8uNI-fn5-nIH2Agk-9t52wbRQ';
    this.apitokenVendor = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXJhamFkbWluIiwiaWF0IjoxNzY5MDU3NTcxLCJleHAiOjE3NzE2NDk1NzF9.BoM5OEdczAZlL1TGaV8uNI-fn5-nIH2Agk-9t52wbRQ';
    this.apitokenMerchan = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXJhamFkbWluIiwiaWF0IjoxNzY5MDU3NTcxLCJleHAiOjE3NzE2NDk1NzF9.BoM5OEdczAZlL1TGaV8uNI-fn5-nIH2Agk-9t52wbRQ';
    this.apitokenUser = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXJhamFkbWluIiwiaWF0IjoxNzY5MDU3NTcxLCJleHAiOjE3NzE2NDk1NzF9.BoM5OEdczAZlL1TGaV8uNI-fn5-nIH2Agk-9t52wbRQ';
    this.apitokenUserAdmin = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXJhamFkbWluIiwiaWF0IjoxNzY5MDU3NTcxLCJleHAiOjE3NzE2NDk1NzF9.BoM5OEdczAZlL1TGaV8uNI-fn5-nIH2Agk-9t52wbRQ';

    this.http = http;
  
     
        this.apiUrl = 'https://trpinsiderbackend.routerosterpro.com/api';
     // this.apiUrl = 'http://localhost:8085/api';
        
       // alert(" Niraj Updated "+this.apiUrl);


    this.headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apitoken}`
    });


    this.headersAdmin = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apitokenUserAdmin}`
    });


    this.headersMerchant = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apitokenMerchan}`
    });


    this.headersUser = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apitokenUser}`
    });


    this.headersVendor = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apitokenVendor}`
    });




  }


  //========================================

  getAllSize(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/sizemaster/getAllSize", { "headers": this.headersVendor });
  }


  sizemaster(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/sizemaster/save", formData, { "headers": this.headersAdmin });
  }


  registerUser(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login/save", formData, { "headers": this.headers });
  }


  registerUserVendor(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login/saveVendor", formData, { "headers": this.headers });
  }
  registerVendormerchant(formData: any, vendorid: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login/saveVendorMerchant", formData, { "headers": this.headersAdmin });
  }



  loginUser(formData: any): Observable<any> {

    try {

      return this.http.post<any>(this.apiUrl + "/login/checkLogin", formData, { "headers": this.headersAdmin });
    }
    catch (e) {

      return new Observable<null | undefined>;;
    }
  }


saveCompany(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/company/save", formData, { "headers": this.headers });
  }

  


  getAllCompany(page: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/company/getAllCompany?page=" + page.page + "&size=" + page.size, { "headers": this.headers });
  }


  getAllAllCompany(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/company/getAllCompany", { "headers": this.headers });
  }


  getcompanybyid(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/company/getCompanyById?id=" + id, { "headers": this.headers });
  }



  //=====================================
    saveEmployee(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/employee/save", formData, { "headers": this.headers });
  }

  

  updateemployeebyid(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/employee/update", formData, { "headers": this.headersVendor });
  }


  getAllEmployee(page: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/employee/getAllEmployee?page=" + page.page + "&size=" + page.size, { "headers": this.headers });
  }


  getemployeebyid(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/employee/getEmployeeById?id=" + id, { "headers": this.headers });
  }



showEmployee(page: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/employee/getAllEmployee?page=" + page.page + "&size=" + page.size, { "headers": this.headers });
  }


  //==========================================




  //=====================Pickup Point ===========================
savePickupPoint(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/pickuppoint/save", formData, { "headers": this.headers });
  }


  getAllPickupPoint(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/pickuppoint/getAllPickuppoints",  { "headers": this.headers });
  }



  //====================================================================


  //=====================================
    saveDepartment(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/department/save", formData, { "headers": this.headers });
  }


  
  getAllDepartment(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/department/getAllDepartments",  { "headers": this.headers });
  }
  //====================================================================



  
  //=====================================
  saveState(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/statemaster/save", formData, { "headers": this.headers });
  }


  
  getAllState(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/statemaster/getAllStates",  { "headers": this.headers });
  }
  //====================================================================


  //=====================================
  saveDistrict(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/districtmaster/save", formData, { "headers": this.headers });
  }


  
  getAllDistrict(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/districtmaster/getAllDistricts",  { "headers": this.headers });
  }

  getDistrictsByState(stateId: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/districtmaster/getDistrictsByState?stateId=" + stateId,  { "headers": this.headers });
  }
  //====================================================================


  //=====================================
  saveVehicleType(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/vehicletype/save", formData, { "headers": this.headers });
  }


  
  getAllVehicleType(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/vehicletype/getAllVehicleType",  { "headers": this.headers });
  }
  //====================================================================


  //=====================================
  saveBankName(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/bankname/save", formData, { "headers": this.headers });
  }


  
  getAllBankName(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/bankname/getAllData",  { "headers": this.headers });
  }
  //====================================================================


  //=====================================
  saveLicenseType(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/licencetype/save", formData, { "headers": this.headers });
  }


  
  getAllLicenseType(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/licencetype/getAllData",  { "headers": this.headers });
  }
  //====================================================================


  //=====================================
  saveFuelType(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/fueltype/save", formData, { "headers": this.headers });
  }


  
  getAllFuelType(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/fueltype/getAllData",  { "headers": this.headers });
  }
  //====================================================================




//=====================================
  saveBloodGroup(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/bloodgroup/save", formData, { "headers": this.headers });
  }


  
  getAllBloodGroup(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/bloodgroup/getAllBloodGroups",  { "headers": this.headers });
  }
  //====================================================================



   //=====================================
  saveVehicleTypeBrand(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/vehicletypebrand/save", formData, { "headers": this.headers });
  }


  
  getAllVehicleTypeBrand(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/vehicletypebrand/getAllVehicleTypeBrands",  { "headers": this.headers });
  }

  getVehicleTypeBrandByVehicleType(vehicleTypeId: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/vehicletypebrand/getVehicleTypeBrandsByVehicleType?vehicleTypeId=" + vehicleTypeId,  { "headers": this.headers });
  }
  //====================================================================





  //=====================================
  saveDesignation(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/designationmaster/save", formData, { "headers": this.headers });
  }


  
  getAllDesignation(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/designationmaster/getAllDesignationMaster",  { "headers": this.headers });
  }
  //====================================================================



  //=====================================
  saveWorkMode(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/workmodemaster/save", formData, { "headers": this.headers });
  }



  getAllWorkMode(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/workmodemaster/getAllWorkModeMaster",  { "headers": this.headers });
  }
  //====================================================================


  //================Employment Type=====================
  saveEmploymentType(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/employmenttypemaster/save", formData, { "headers": this.headers });
  }



  getAllEmploymentType(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/employmenttypemaster/getAllMaster",  { "headers": this.headers });
  }
  //====================================================================



    //================Commission Type=====================
  saveCommissionType(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/commitiontype/save", formData, { "headers": this.headers });
  }



  getAllCommissionType(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/commitiontype/getAllMaster",  { "headers": this.headers });
  }
  //====================================================================






  saveProduct(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/products/save", formData, { "headers": this.headers });
  }


  showProducts(page: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllProducts?page=" + page.page + "&size=" + page.size, { "headers": this.headers });
  }


  /*
  getAllVendorProduct(logData:any): Observable<any> {
    
    return this.http.get<any>(this.apiUrl+"/vendor/getAll");
    
  }
  */


  showProductsId(designnumber: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllProductsByDesignerNo?designnumber=" + designnumber, { "headers": this.headers });
  }
  orderSave(formData: any): Observable<any> {


    return this.http.post<any>(this.apiUrl + "/orders/save", formData, { "headers": this.headers });
  }



  getorders(objdata: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/orders/getAllOrders?page=" + objdata.page + "&size=" + objdata.size, { "headers": this.headersVendor });
  }


  getordersByUser(uid: any, usermobile: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserID?uid=" + uid + "&usermobile=" + usermobile, { "headers": this.headers });
  }


  getAllorders(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserID", { "headers": this.headersVendor });
  }



  getusers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/login/getAllUsers", { "headers": this.headers });
  }


  getusersByMobile(mobile: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/login/getUsersByMobile?mobile=" + mobile, { "headers": this.headersAdmin });
  }


  getusersByVendoid(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/login/getUsersByVendorid?vendorid=" + id, { "headers": this.headers });
  }


  getuserdashboard(mobile: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/login/getUsersByMobile?mobile=" + mobile, { "headers": this.headersVendor });
  }


  getordersByUserByMobile(usermobile: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserMobile?usermobile=" + usermobile, { "headers": this.headers });
  }


  getAllOrdersByUserMobileVendor(usermobile: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserMobileVendor?usermobile=" + usermobile, { "headers": this.headersVendor });
  }


  deleteproducts(itemid: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/products/deleteProductByID?id=" + itemid, { "headers": this.headers });
  }

  getproductbyid(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getProductsById?id=" + id, { "headers": this.headers });
  }

  updateproductbyid(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/products/update", formData, { "headers": this.headersVendor });
  }

  saveOrderTransaction(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/ordertransaction/save", formData, { "headers": this.headers });
  }

  ordertransactiondata(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/ordertransaction/ordertransactiondata", formData, { "headers": this.headersVendor });
  }

  getAllOrderTransactiondata(formData: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/ordertransaction/getAllOrderTransactiondataPagination", { "headers": this.headersVendor });
  }


  sendMail(email: any, messageSend: any) {

    let urlName = "https://api.authkey.io/request?authkey=ed19f44e136929ce&email=" + email + "&country_code=91&sid=4305&company=WorkLooper&otp=" + messageSend;
    return this.http.get<any>(urlName);
  }


  generatepdf(uid: any, usermobile: any, username: any, shopname: any, billno: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/generatePDF?uid=" + uid + "&usermobile=" + usermobile + "&username=" + username + "&shopname=" + shopname + "&billno=" + billno, { "headers": this.headers });
  }

  generatepdfAdmin(uid: any, usermobile: any, username: any, shopname: any, billno: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/orders/generatePDFAdmin?uid=" + uid + "&usermobile=" + usermobile + "&username=" + username + "&shopname=" + shopname + "&billno=" + billno, { "headers": this.headers });
  }


  generatepreviouspdf(userid: any, usermobile: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/ordertransaction/getAllOrderTransactiondataByUseridAndUserMobile?userid=" + userid + "&usermobile=" + usermobile, { "headers": this.headers });
  }

  changeotp(formData: any): Observable<any> {

    return this.http.post<any>(this.apiUrl + "/login/updateOtpByMobile", formData, { "headers": this.headers });
  }


  getUniqueMobile(): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/ordertransaction/getUniqueMobile", { "headers": this.headersVendor });
  }


  getIDUniqueByMobile(usermobile: any) {
    return this.http.get<any>(this.apiUrl + "/ordertransaction/getIDUniqueByMobile?usermobile=" + usermobile, { "headers": this.headers });
  }

  getAllOrdersByUserdesignnumber(designnumber: any) {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserdesignnumber?designnumber=" + designnumber, { "headers": this.headers });
  }

  getAllVendors() {
    return this.http.get<any>(this.apiUrl + "/login/getAllVendors", { "headers": this.headers });
  }

  getAllMerchant() {
    return this.http.get<any>(this.apiUrl + "/login/getAllMerchant", { "headers": this.headers });
  }

  showProductsByVendoirId(vendorid: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllProductsByVendorid?vendorid=" + vendorid, { "headers": this.headers });
  }


  showProductsBymerchantid(page: any, merchantid: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllProductsByMerchantid?page=" + page.page + "&size=" + page.size + "&merchantid=" + merchantid, { "headers": this.headers });
  }


  updateApprovalRejection(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/products/updateApprovalRejection", formData, { "headers": this.headers });
  }


  getactionHistoryByID(productid: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/actionhistory/getactionHistoryByID?productid=" + productid, { "headers": this.headers });
  }

  updatePendingByVendor(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/products/updatePendingByVendor", formData, { "headers": this.headers });
  }



  getAllOrdersByUidAndMobile(objdata: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUidAndMobile?uid=" + objdata.uid + "&mobile=" + objdata.mobile, { "headers": this.headers });
  }


  getAllOrdersByUidAndMobileForVendor(objdata: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUidAndMobileForVendor?uid=" + objdata.uid + "&mobile=" + objdata.mobile, { "headers": this.headers });
  }



  getAllProductsForApprovalPending(): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/products/getAllProductsForApprovalPending", { "headers": this.headers });
  }


  getAllPendingProductsByVendorid(vendorid: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllPendingProductsByVendorid?vendorid=" + vendorid, { "headers": this.headers });
  }


  updateApprovedDisapproved(formData: any): Observable<any> {

    return this.http.post<any>(this.apiUrl + "/login/updateApprovedDisapproved", formData, { "headers": this.headers });
  }
  saveRequest(formData: any): Observable<any> {

    return this.http.post<any>(this.apiUrl + "/requestmaster/save", formData, { "headers": this.headers });
  }


  showRequests(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/requestmaster/getAllRequestMaster?page=0&size=300", { "headers": this.headers });
  }





  getordersPagination(objdata: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/ordertransaction/getAllOrderTransactiondataPaginationUpdate?page=" + objdata.page + "&size=" + objdata.size, { "headers": this.headersVendor });
  }



  getAllProductsByDesigner(designnumber: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllProductsByDesignerNo?designnumber=" + designnumber, { "headers": this.headers });
  }






  getAllOrdersByUserdesignnumberLike(designnumber: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/orders/getAllOrdersByUserdesignnumberLike?designnumber=" + designnumber, { "headers": this.headers });
  }





  getAllProductsByDesignerNoLike(designnumber: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/products/getAllProductsByDesignerNoLike?designnumber=" + designnumber, { "headers": this.headers });
  }

  updateUserEnableDisable(userid: number, usermobile: string, userflag: boolean): Observable<any> {
    const userflagStr = userflag ? 'true' : 'false';
    return this.http.post<any>(
      `${this.apiUrl}/login/updateEnableDisable?id=${userid}&mobile=${usermobile}&userflag=${userflagStr}`, {}, // Empty body, since you're passing parameters in the URL
      { headers: this.headers }
    );
  }


getImage(fileName: string) {

  const url = `https://trpinsiderbackend.routerosterpro.com/imageevent/${fileName}`;
  return this.http.get(url, {
    responseType: 'blob',
    headers: this.headers
  });
}

}

