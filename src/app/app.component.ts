import { Component } from '@angular/core';
import { DummyService } from './service/dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valeur : number = 3;
  public sub : any;

  constructor(private dummy : DummyService){
    this.sub = this.dummy.getSub().subscribe(value => {    
      this.valeur = value
    });
  }

  public addValue() : void{
    this.dummy.add();    
  }
}
