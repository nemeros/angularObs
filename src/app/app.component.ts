import { Component, OnDestroy } from '@angular/core';
import { DummyService } from './service/dummy.service';
import { Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
  title = 'app';
  count : number = 3;
  public subscription : Subscription;

  constructor(private dummy : DummyService){
    this.subscription = this.dummy.getSub().subscribe(value => {    
      this.count = value
    });
  }

  public addValue() : void{
    this.dummy.add();    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
