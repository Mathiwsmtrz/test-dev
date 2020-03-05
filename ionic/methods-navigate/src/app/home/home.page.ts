import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private navController: NavController,
  ) {}


  ngOnInit() {
    alert('init  home');
  }
  ngOnDestroy() {
    alert('destroing home');
  }

  goTest() {
    this.router.navigateByUrl('/test2');
  }

  goTestNav1() {
    this.navController.navigateForward('/test3');
  }

  goTestNav2() {
    this.navController.navigateRoot('/test4');
  }
}
