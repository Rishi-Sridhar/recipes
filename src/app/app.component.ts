import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('one', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('two', style({
        backgroundColor: 'blue',
        transform: 'translateX(500px)'
      })),
      transition('one <=> two', animate(500)),

    ]),

    trigger('wildState', [
      state('one', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('two', style({
        backgroundColor: 'blue',
        transform: 'translateX(500px) scale(1)'
      })),
      state('three', style({
        backgroundColor: 'blue',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('three <=> *', animate(500)),

    ]),
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';
  state = 'one';
  wildState = 'one';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDI8_fvpRMouAugenHh6TOp7vxAyypm7d4',
      authDomain: 'ng4-recipebook.firebaseapp.com'
    });
  }

  change() {
    this.state === 'one' ? this.state = 'two' : this.state = 'one';
    this.wildState === 'one' ? this.state = 'two' : this.state = 'one';
  }

  change2() {
    this.wildState = 'three';
  }
}
