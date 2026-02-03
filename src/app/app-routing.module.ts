import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { QRComponent } from './qr/qr.component';
import { UserinvoiceComponent } from './userinvoice/userinvoice.component';
import { UpdateproductComponentComponent } from './updateproduct.component/updateproduct.component.component';
import { GetalltransationdataComponent } from './getalltransationdata/getalltransationdata.component';
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { VendorordersComponent } from './vendororders/vendororders.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';
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
import { authGuard } from './auth.guard';
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
import { CompanyComponent } from './company/company.component';
import { ShowcompanyComponent } from './showcompany/showcompany.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { GetallemployeeComponent } from './getallemployee/getallemployee.component';
import {UpdateemployeeComponent} from './updateemployee/updateemployee.component';
import {DepartmentComponent} from './department/department.component';
import {PickuppointComponent} from './pickuppoint/pickuppoint.component'
import {StatemasterComponent} from './statemaster/statemaster.component'
import {DesignationmasterComponent} from './designationmaster/designationmaster.component'
import {WorkmodeComponent} from './workmode/workmode.component'

import {ReportingmasterComponent} from './reportingmaster/reportingmaster.component'
import {EmploymenttypemasterComponent} from './employmenttypemaster/employmenttypemaster.component'
import {CommitiontypeComponent} from './commitiontype/commitiontype.component'
import {NPickuppointComponentComponent} from './npickuppoint-component/npickuppoint-component.component'
import {DistrictmasterComponent} from './districtmaster/districtmaster.component'
import {VehicletypeComponent} from './vehicletype/vehicletype.component';
import {VehicletypebrandComponent} from './vehicletypebrand/vehicletypebrand.component';
import { BloodgroupComponent } from './bloodgroup/bloodgroup.component';

import { BanknameComponent } from './bankname/bankname.component';

const routes: Routes = [
  { path: 'registeruser.component', component: RegisteruserComponent,canActivate: [ExpenseGuard]},
  { path: 'login.component', component: LoginComponent }, 
  { path: 'login-customer.component', component: LoginCustomerComponent},
  { path: 'login-vendor.component', component: LoginVendorComponent},
  { path: 'home.component', component: HomeComponent,canActivate: [ExpenseGuard,, authGuard] },
  { path: 'addproduct.component', component: AddproductComponent,canActivate: [ExpenseGuard , authGuard] },
  { path: 'afterlogin.component', component: AfterloginComponent,canActivate: [ExpenseGuard, authGuard] },
  { path: 'products.component', component: ProductsComponent,canActivate: [ExpenseGuard, authGuard] },
  { path: 'productdetails.component', component: ProductdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'invoice.component', component: InvoiceComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'orderdetails.component', component: OrderdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'afteradminlogin.component', component: AfteradminloginComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'userorderdetails.component', component: UserorderdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'userdetails.component', component: UserdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'userdashboard.component', component: UserdashboardComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'userdashboard.component', component: UserdashboardComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'qr.component', component: QRComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'userinvoice.component', component: UserinvoiceComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'updateproduct.component.component', component: UpdateproductComponentComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'getalltransationdata.component', component: GetalltransationdataComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendordetails.component', component: VendordetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendororders.component', component: VendorordersComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'addvendor.component', component: AddvendorComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'allvendor.component', component: AllvendorComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorhome.component', component: VendorhomeComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorproducts.component', component: VendorproductsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'logout.component', component: LogoutComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'aftervenderlogin.component', component: AftervenderloginComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendoruserdetails.component', component: VendoruserdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'venderaddproduct.component', component:VenderaddproductComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'venderupdateproduct.component', component:VenderupdateproductComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendoruserregister.component', component:VendoruserregisterComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendoruserinvoice.component', component: VendoruserinvoiceComponent,canActivate: [ExpenseGuard, authGuard] },
  { path: 'vendororderdetails.component', component:  VendororderdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendoruserlogin.component', component:   VendoruserloginComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendor-user-scanproduct.component', component:   VendorUserScanproductComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendoruser-orderdetails.component', component:  VendoruserOrderdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendor-approval-rejection.component', component:  VendorApprovalRejectionComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorfooter.component', component:  VendorfooterComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorheader.component', component:  VendorheaderComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'view-approval-log-history.component', component:  ViewApprovalLogHistoryComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'view-vendor-log-only.component', component:  ViewVendorLogOnlyComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'user-header.component', component:  UserHeaderComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'user-footer.component', component:  UserFooterComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'view-products-for-approval.component', component:  ViewProductsForApprovalComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchant.component', component:  MerchantComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantheader.component', component:  MerchantheaderComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantheader.component', component:  MerchantfooterComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantapprove.component', component:  MerchantapproveComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantproducts.component', component:  MerchantproductsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantproductsedit.component', component:  MerchantproductseditComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantorders.component', component:  MerchantordersComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantvieworders.component', component:  MerchantviewordersComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantaddproduct.component', component:  MerchantaddproductComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantuserinvoice.component', component:  MerchantuserinvoiceComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchantuserdetails.component', component:  MerchantuserdetailsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendormerchantinvoice.component', component:  VendormerchantinvoiceComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'addvendormerchant.component', component:  AddvendormerchantComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendormerchantapprove.component', component:  VendormerchantapproveComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendormerchanthome.component', component:  VendormerchanthomeComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendormarchantheader.component', component:  VendormarchantheaderComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendormarchantfooter.component', component: VendormarchantfooterComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorinvoice.component', component: VendorinvoiceComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'alladminmerchant.component', component: AlladminmerchantComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'admin-approval-rejection.component', component: AdminApprovalRejectionComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'merchant-approval-rejection.component', component: MerchantApprovalRejectionComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'adminsizes.component', component: AdminsizesComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'requestsize.component', component: RequestsizeComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'requests.component', component: RequestsComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendorviewproduct.component', component: VendorviewproductComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'view-admin-log.component', component: ViewAdminLogComponent,canActivate: [ExpenseGuard, authGuard]},
  { path: 'vendor-merchant-add-product.component', component: VendorMerchantAddProductComponent,canActivate: [ExpenseGuard, authGuard]},
  

  // other project routing config

  {path: 'company.component', component: CompanyComponent,canActivate: [ExpenseGuard, authGuard]},
  {path: 'showcompany.component', component: ShowcompanyComponent,canActivate: [ExpenseGuard, authGuard]},
  {path: 'updatecompany.component', component: UpdateCompanyComponent,canActivate: [ExpenseGuard, authGuard]},
  {path: 'mainpage.component', component: MainpageComponent,canActivate: [ExpenseGuard, authGuard]},
  {path: 'addemployee.component', component: AddemployeeComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'getallemployee.component', component: GetallemployeeComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'updateemployee.component', component: UpdateemployeeComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'department.component', component: DepartmentComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'pickuppoint.component', component: PickuppointComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'statemaster.component',component: StatemasterComponent,canActivate: [ExpenseGuard, authGuard]},
  {path:'designationmaster.component',component: DesignationmasterComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'workmode.component',component:WorkmodeComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'reportingmaster.component',component:ReportingmasterComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'employmenttypemaster.component',component:EmploymenttypemasterComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'commitiontype.component',component:CommitiontypeComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'npickuppoint-component.component',component:NPickuppointComponentComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'districtmaster.component',component:DistrictmasterComponent,canActivate:[ExpenseGuard,authGuard]},
  {path: 'vehicletype.component', component: VehicletypeComponent,canActivate:[ExpenseGuard,authGuard]},
  {path: 'vehicletypebrand.component', component: VehicletypebrandComponent,canActivate:[ExpenseGuard,authGuard]},
  {path:'bloodgroup.component', component: BloodgroupComponent, canActivate:[ExpenseGuard,authGuard]},
  {path:'bankname.component', component: BanknameComponent, canActivate:[ExpenseGuard,authGuard]},

  { path: '', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
