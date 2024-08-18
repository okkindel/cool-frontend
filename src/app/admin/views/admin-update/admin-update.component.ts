import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { DatabaseService } from '@api/services';
import { Library } from '@api/models';
import { toast } from 'ngx-sonner';

@Component({
  template: `
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight">Update technology</h2>
      <p class="mt-2 text-lg leading-8">
        Fill in the form below to add a update technology in the database.
      </p>
    </div>

    <cf-element-form [value]="element" (valueChange)="onSubmit($event)" />
  `,
})
export class AdminUpdateComponent {
  private readonly _data = inject(ActivatedRoute).snapshot.data;
  private readonly _databaseService = inject(DatabaseService);
  private readonly _router = inject(Router);

  public readonly element = this._data['data'];

  public onSubmit(value: Library): void {
    this._databaseService.update('library', this.element.$id, value).subscribe({
      next: () => {
        this._router.navigate(['/', 'admin']);
      },
      error: (error) => {
        toast(error.message);
      },
    });
  }
}
