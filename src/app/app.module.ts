import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {DataTablesModule} from 'angular-datatables';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { QRComponent } from './qr/qr.component';
import { UserinvoiceComponent } from './userinvoice/userinvoice.component';
import { SafePipe } from 'src/safe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateproductComponentComponent } from './updateproduct.component/updateproduct.component.component';
import { GetalltransationdataComponent } from './getalltransationdata/getalltransationdata.component';
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { VendorordersComponent } from './vendororders/vendororders.component';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { LogoutComponent } from './logout/logout.component';
import { PreventScreenshotDirective } from './prevent-screenshot.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { AllvendorComponent } from './allvendor/allvendor.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';

import { VendorproductsComponent } from './vendorproducts/vendorproducts.component';

import { AftervenderloginComponent } from './aftervenderlogin/aftervenderlogin.component';
import { VendoruserdetailsComponent } from './vendoruserdetails/vendoruserdetails.component';
import { VenderaddproductComponent } from './venderaddproduct/venderaddproduct.component';
import { VenderupdateproductComponent } from './venderupdateproduct/venderupdateproduct.component';
import { VendoruserregisterComponent } from './vendoruserregister/vendoruserregister.component';
import { VendoruserinvoiceComponent } from './vendoruserinvoice/vendoruserinvoice.component';
import { VendororderdetailsComponent } from './vendororderdetails/vendororderdetails.component';
import { VendoruserloginComponent } from './vendoruserlogin/vendoruserlogin.component';
import { VendorUserScanproductComponent } from './vendor-user-scanproduct/vendor-user-scanproduct.component';
import { VendoruserOrderdetailsComponent } from './vendoruser-orderdetails/vendoruser-orderdetails.component';
import { VendorApprovalRejectionComponent } from './vendor-approval-rejection/vendor-approval-rejection.component';
import { VendorfooterComponent } from './vendorfooter/vendorfooter.component';
import { VendorheaderComponent } from './vendorheader/vendorheader.component';
import { ViewApprovalLogHistoryComponent } from './view-approval-log-history/view-approval-log-history.component';
import { ViewVendorLogOnlyComponent } from './view-vendor-log-only/view-vendor-log-only.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { ViewProductsForApprovalComponent } from './view-products-for-approval/view-products-for-approval.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantheaderComponent } from './merchantheader/merchantheader.component';
import { MerchantfooterComponent } from './merchantfooter/merchantfooter.component';
import { MerchantapproveComponent } from './merchantapprove/merchantapprove.component';
import { MerchantproductsComponent } from './merchantproducts/merchantproducts.component';
import { MerchantproductseditComponent } from './merchantproductsedit/merchantproductsedit.component';
import { MerchantordersComponent } from './merchantorders/merchantorders.component';
import { MerchantviewordersComponent } from './merchantvieworders/merchantvieworders.component';
import { MerchantaddproductComponent } from './merchantaddproduct/merchantaddproduct.component';
import { MerchantuserdetailsComponent } from './merchantuserdetails/merchantuserdetails.component';
import { MerchantuserinvoiceComponent } from './merchantuserinvoice/merchantuserinvoice.component';
import { VendormerchantinvoiceComponent } from './vendormerchantinvoice/vendormerchantinvoice.component';
import { AddvendormerchantComponent } from './addvendormerchant/addvendormerchant.component';
import { VendormerchantapproveComponent } from './vendormerchantapprove/vendormerchantapprove.component';
import { VendormerchanthomeComponent } from './vendormerchanthome/vendormerchanthome.component';
import { VendormarchantheaderComponent } from './vendormarchantheader/vendormarchantheader.component';
import { VendormarchantfooterComponent } from './vendormarchantfooter/vendormarchantfooter.component';
import { VendorinvoiceComponent } from './vendorinvoice/vendorinvoice.component';
import { AlladminmerchantComponent } from './alladminmerchant/alladminmerchant.component';
import { AdminApprovalRejectionComponent } from './admin-approval-rejection/admin-approval-rejection.component';
import { MerchantApprovalRejectionComponent } from './merchant-approval-rejection/merchant-approval-rejection.component';
import { AdminsizesComponent } from './adminsizes/adminsizes.component';
import { RequestsizeComponent } from './requestsize/requestsize.component';
import { RequestsComponent } from './requests/requests.component';
import { VendorviewproductComponent } from './vendorviewproduct/vendorviewproduct.component';
import { ViewAdminLogComponent } from './view-admin-log/view-admin-log.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { VendorMerchantAddProductComponent } from './vendor-merchant-add-product/vendor-merchant-add-product.component';
import { NetworkerrorInterceptor } from './networkerror.interceptor';
import { CompanyComponent } from './company/company.component';
import { ShowcompanyComponent } from './showcompany/showcompany.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { GetallemployeeComponent } from './getallemployee/getallemployee.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DepartmentComponent } from './department/department.component';
import { PickuppointComponent } from './pickuppoint/pickuppoint.component'

import { GoogleMapsModule } from '@angular/google-maps';
import { StatemasterComponent } from './statemaster/statemaster.component';
import { DesignationmasterComponent } from './designationmaster/designationmaster.component';
import { WorkmodeComponent } from './workmode/workmode.component';
import { ReportingmasterComponent } from './reportingmaster/reportingmaster.component';
import { EmploymenttypemasterComponent } from './employmenttypemaster/employmenttypemaster.component';
import { CommitiontypeComponent } from './commitiontype/commitiontype.component';
import { NPickuppointComponentComponent } from './npickuppoint-component/npickuppoint-component.component';
import { DistrictmasterComponent } from './districtmaster/districtmaster.component';
import { VehicletypeComponent } from './vehicletype/vehicletype.component';
import { VehicletypebrandComponent } from './vehicletypebrand/vehicletypebrand.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteruserComponent,
    HomeComponent,
    AddproductComponent,
    AfterloginComponent,
    ProductsComponent,
    ProductdetailsComponent,
    InvoiceComponent,
    OrderdetailsComponent,
    AfteradminloginComponent,
    UserorderdetailsComponent,
    UserdetailsComponent,
    UserdashboardComponent,
    QRComponent,
    UserinvoiceComponent,
    SafePipe,
    UpdateproductComponentComponent,
    GetalltransationdataComponent,
    VendordetailsComponent,
    VendorordersComponent,
    LogoutComponent,
    PreventScreenshotDirective,
    AddvendorComponent,
    AllvendorComponent,
    VendorhomeComponent,
    
    VendorproductsComponent,

    AftervenderloginComponent,
    VendoruserdetailsComponent,
    VenderaddproductComponent,
    VenderupdateproductComponent,
    VendoruserregisterComponent,
    VendoruserinvoiceComponent,
    VendororderdetailsComponent,
    VendoruserloginComponent,
    VendorUserScanproductComponent,
    VendoruserOrderdetailsComponent,
    VendorApprovalRejectionComponent,
    VendorfooterComponent,
    VendorheaderComponent,
    ViewApprovalLogHistoryComponent,
    ViewVendorLogOnlyComponent,
    UserHeaderComponent,
    UserFooterComponent,
    ViewProductsForApprovalComponent,
    MerchantComponent,
    MerchantheaderComponent,
    MerchantfooterComponent,
    MerchantapproveComponent,
    MerchantproductsComponent,
    MerchantproductseditComponent,
    MerchantordersComponent,
    MerchantviewordersComponent,
    MerchantaddproductComponent,
    MerchantuserdetailsComponent,
    MerchantuserinvoiceComponent,
    VendormerchantinvoiceComponent,
    AddvendormerchantComponent,
    VendormerchantapproveComponent,
    VendormerchanthomeComponent,
    VendormarchantheaderComponent,
    VendormarchantfooterComponent,
    VendorinvoiceComponent,
    AlladminmerchantComponent,
    AdminApprovalRejectionComponent,
    MerchantApprovalRejectionComponent,
    AdminsizesComponent,
    RequestsizeComponent,
    RequestsComponent,
    VendorviewproductComponent,
    ViewAdminLogComponent,
    LoginCustomerComponent,
    LoginVendorComponent,
    VendorMerchantAddProductComponent,
    CompanyComponent,
    ShowcompanyComponent,
    UpdateCompanyComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    GetallemployeeComponent,
    MainpageComponent,
    DepartmentComponent,
    PickuppointComponent,
    StatemasterComponent,
    DesignationmasterComponent,
    WorkmodeComponent,
    ReportingmasterComponent,
    EmploymenttypemasterComponent,
    CommitiontypeComponent,
    NPickuppointComponentComponent,
    DistrictmasterComponent,
    VehicletypeComponent,
    VehicletypebrandComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxScannerQrcodeModule,
    ZXingScannerModule,
    DataTablesModule,
    NgbModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ScrollingModule,
    GoogleMapsModule
    
    
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Set HashLocationStrategy for routing
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LdwQnonAAAAADahWuJLZAEXhTuwMjm7G0iYK1ul', // Replace with your actual Site Key
      } as RecaptchaSettings,
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkerrorInterceptor,
      multi: true, // Ensures multiple interceptors can be used
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
