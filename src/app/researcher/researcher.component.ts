import { Component, DestroyRef, inject, output, OutputEmitterRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Ip2LocationService } from '../shared/services/ip-2-location.service';
import { domainPattern } from '../shared/validators';

@Component({
  selector: 'app-researcher',
  imports: [ReactiveFormsModule],
  templateUrl: './researcher.component.html',
})
export class ResearcherComponent {
  private destroyRef = inject(DestroyRef);
  private ip2Location = inject(Ip2LocationService);

  readonly domainDetails = this.ip2Location.domainDetails;

  researcherForm: FormGroup = new FormGroup({
    domain: new FormControl('', [Validators.required, Validators.pattern(domainPattern)]),
  });

  onSubmit() {
    if (!this.researcherForm.valid) return;

    this.ip2Location
      .getDomainDetails(this.researcherForm.value.domain)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
