import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-card',
  template: `
    <div *ngIf="character as c" class="card h-100">
      <img [src]="c.image" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h3 class="card-title flex-grow-1" [innerText]="c.name"></h3>
        <ul class="my-3">
          <li>Status: <span [innerText]="c.status"></span></li>
          <li>Species: <span [innerText]="c.species"></span></li>
          <li>Gender: <span [innerText]="c.gender"></span></li>
        </ul>
        <button
          [routerLink]="['/charecter', c.id]"
          class="btn btn-primary w-100 d-flex justify-content-center align-items-center"
        >
          <span class="fw-bold">Details</span>
          <i class="pi pi-arrow-right ms-3"></i>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character: Character.Model | undefined;
}
