import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject  } from "rxjs";
import 'rxjs/add/observable/of';

@Injectable()
export class DummyService {

  private current : number;
  private url : string = 'assets/data.json';

  private subject: BehaviorSubject<number>;

  constructor(private http: HttpClient) {
    this.current = 0;
    this.subject = new BehaviorSubject<number>(this.current);
   }

   public getSub() : Observable<number>{
     return this.subject.asObservable();
   }

   public add() : void {
     this.current = this.current + 1;
      this.subject.next(this.current);
   }


   public getNameRequest() : Observable<any> {
     return this.http.get<any>(this.url);
   }

}
