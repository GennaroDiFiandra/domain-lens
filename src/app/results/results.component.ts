import { Component, inject } from '@angular/core';
import { Ip2LocationService } from '../shared/services/ip-2-location.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [DatePipe],
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  private ip2Location = inject(Ip2LocationService);

  readonly domainDetails = this.ip2Location.domainDetails;
  readonly whoIsError = this.ip2Location.whoIsError;
}
