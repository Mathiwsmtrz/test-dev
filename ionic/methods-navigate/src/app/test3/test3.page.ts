import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }
  ngOnDestroy() {
    console.log('destroy');
  }

}
