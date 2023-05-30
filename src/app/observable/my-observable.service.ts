import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyObservableService {
  private myObservable$: Subject<Array<number>> = new Subject<Array<number>>();
  private listNumber: Array<number> = [];
  private flagInit: boolean = false;  

  constructor() {
    if(!this.flagInit)
    {}

  }

  myLogic(): void {
    setInterval(() => {
      let numberTemp: number = Math.floor( Math.random() * 100) +1;
      this.listNumber[] = numberTemp;
      this.myObservable$.next(this.listNumber);
    }, 2000);
  }

  myObservableChanges$(): Observable<Array<number>> {
    return this.myObservable$.asObservable();
  }
}
