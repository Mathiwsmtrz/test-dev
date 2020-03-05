import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }
  ngOnDestroy() {
    console.log('destroy');
  }

}

