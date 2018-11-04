import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabStateService {
  private DEFAULT_STATE = 0;
  private STATE_KEY = 'tabState';

  constructor() { }

  load(): Observable<number> {
    let state = localStorage.getItem(this.STATE_KEY);
    console.log(state);
    if(!state) {
      return of(this.DEFAULT_STATE);
    }

    return of(parseInt(state));
  }

  save(state: number) {
    localStorage.setItem(this.STATE_KEY, state.toString());
  }

}
