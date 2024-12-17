import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  //constructor(private router: Router) { }
  const router = inject(Router)
  const localUser = localStorage.getItem('userToken');
  if (localUser != null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }
};
