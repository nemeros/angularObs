import { Component, OnDestroy } from '@angular/core';
import { DummyService } from './service/dummy.service';
import { Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  
  
  public count : number = 3;
  public nom : string;

  public subscription : Subscription;

  constructor(private dummy : DummyService){
    this.subscription = this.dummy.getSub().subscribe(value => {    
      this.count = value
    });


    this.dummy.getNameRequest().subscribe(body => this.nom = body.name);
  }

  public addValue() : void{
    this.dummy.add();    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
