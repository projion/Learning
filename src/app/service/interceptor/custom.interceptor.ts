import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const currentToken = localStorage.getItem('userToken');
  //debugger;
  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${currentToken}`
    }
  })
  //return next(req);
  return next(cloneRequest);
};
