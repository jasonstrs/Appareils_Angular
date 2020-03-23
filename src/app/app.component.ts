import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(){
  }
  ngOnDestroy(): void {
    this.counterSub.unsubscribe();
  }

  seconde: number;
  counterSub: Subscription

  ngOnInit(){
    const numbers= interval(1000);
    this.counterSub = numbers.subscribe((x)=>{
      //console.log(x);
      this.seconde=x;
    });
  }
}


