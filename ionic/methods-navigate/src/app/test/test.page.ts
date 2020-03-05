import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }
  ngOnDestroy() {
    console.log('destroy');
  }

}
