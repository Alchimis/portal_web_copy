import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../domain/auth.service";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = this.authService.getUser()
    let accessJwtToken = user?.jwtToken
    const isApiUrl = request.url.startsWith(environment.apiUrl)

    if (accessJwtToken != undefined && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessJwtToken}`,
          'X-user-id': '1',
          'X-organization-id': '1'
        }
      });
    }

    console.log(request)

    return next.handle(request)
  }


}
