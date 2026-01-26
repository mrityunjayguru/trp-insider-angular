import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let users;
  const userData = localStorage.getItem("otheruserData") || "";
  users = JSON.parse(userData);
  if (users !== undefined && users.id != undefined && users.mobile != undefined) {
    return true;
  }

  const router = new Router(); // Create a new Router instance (this is not recommended)
  router.navigate(['/']); // Assuming '/' is the route path for your home page

  return false;
};
