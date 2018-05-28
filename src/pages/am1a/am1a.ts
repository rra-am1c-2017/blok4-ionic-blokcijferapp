import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GradesProvider } from '../../providers/grades/grades';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Am1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-am1a',
  templateUrl: 'am1a.html',
})
export class Am1aPage {
  public grades: any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gradesProvider: GradesProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.gradesProvider.getGrades().subscribe((data: any[]) => {
      this.grades = data;
      console.log(this.grades);
    });
  }

  public changeResidence(residence) {
    console.log("Dit is de huidige woonplaats: " + residence);
    let changeResidenceInDb = this.alertCtrl.create({title: "Huidige woonplaats: " + residence, 
                                                     message: "Voer een nieuwe woonplaats in:",
                                                     inputs: [{type: "text",
                                                               name: "newResidence"}],
                                                     buttons: [{text: "Cancel"},
                                                               {text: "Voeg toe",
                                                                handler: (alertData) => {
                                                                  console.log(alertData.newResidence);
                                                                }}]
                                                              
                                                    });
    changeResidenceInDb.present();
  }

}
