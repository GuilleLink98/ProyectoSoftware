import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';
import {TaskI} from '../models/task.interface';
import { InfoService } from '../services/info.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dlista-nacional',
  templateUrl: './dlista-nacional.page.html',
  styleUrls: ['./dlista-nacional.page.scss'],
})
export class DListaNacionalPage implements OnInit {

  candidatos: TaskI[];
  constructor(private alertController: AlertController, private actionSheet: ActionSheetController,private infoService: InfoService, private router: Router){

  }
  go(){
    this.router.navigate(['ddistrito-electoral'])
  }

  ngOnInit(){
    this.infoService.getCandidatos().subscribe((res)=> {
      console.log('Candidatos',res);
      this.candidatos = res;
    });
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Su voto está a punto de ser enviado',
      subHeader: '',
      message: '¿Está seguro que desea votar por este candidato?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('You clicked cancel');
        }
      },            
        {
          text: 'Continuar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Second Handler'), this.go();
          } 
        }
          
      ]
    });

    await alert.present();
}

}
