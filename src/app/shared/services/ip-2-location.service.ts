import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ip2WhoIsError, Ip2WhoIsResponse } from '../../researcher/researcher.model';

@Injectable({
  providedIn: 'root',
})
export class Ip2LocationService {
  private http = inject(HttpClient);
  domainDetails = signal<Ip2WhoIsResponse | null>(null);
  whoIsError = signal<string | null>(null);

  getDomainDetails(domain: string) {
    const requestParams: { [key: string]: string } = { domain: domain };

    if (!environment.production) {
      requestParams['key'] = environment.ip2locationConfig.apiKey;
    }

    return this.http
      .get<Ip2WhoIsResponse>(environment.ip2locationConfig.endpoint, {
        params: requestParams,
      })
      .pipe(
        tap({
          next: (data: Ip2WhoIsResponse) => {
            this.domainDetails.set(data);
            this.whoIsError.set(null);
          },
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            this.whoIsError.set(error.message);
          } else if ((error.error as Ip2WhoIsError)?.error.error_message !== undefined) {
            this.whoIsError.set((error.error as Ip2WhoIsError).error.error_message);
          } else {
            this.whoIsError.set(error.message);
          }

          this.domainDetails.set(null);

          return throwError(() => error);
        })
      );
  }
}
