import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LongestwordfinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-longestwordfinder',
  templateUrl: 'longestwordfinder.html',
})
export class LongestwordfinderPage {
  input: string;
  output: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LongestwordfinderPage');
  }

  longestWord(sen) {
    sen = sen.split('');
    for (let i = 0; i < sen.length; i++) {
      if (sen[i] == '.' || sen[i] == '!') {
        delete(sen[i]);
      }
    }
    sen = sen.join('').split(' ');
    sen.sort(function(a, b) {
      return b.length-a.length;
    });
    this.output = sen.slice(0, 1).join('');
  }
}
