import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const verifyTokenGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token-characters');
  const router = inject(Router);
  if(!token) {
    router.navigate(['login'])
    return false
  }
  return true;
};
