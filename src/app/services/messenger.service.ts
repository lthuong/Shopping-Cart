import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // for more detailed info vist the website to understand this

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product) {
    this.subject.next(product); // Triggering an event
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
