// export class HttpXSRFInterceptor {
// }
import {Injectable} from '@angular/core'
import {Observable } from 'rxjs';
import {HttpClientModule,HttpInterceptor,HttpClientXsrfModule,HttpXsrfTokenExtractor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'

@Injectable()
export class HttpXSRFInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headerName = 'X-CSRFToken';
        let token = this.tokenExtractor.getToken() as string;
        if (token !== null && !req.headers.has(headerName)){
            req=req.clone({ headers: req.headers.set(headerName, token)})
        }
        return next.handle(req);
    }
}
