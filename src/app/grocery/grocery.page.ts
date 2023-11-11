import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, CommonModule, IonIcon, IonFab, IonFabButton ],
})

export class GroceryPage {
  constructor(private toastController: ToastController, private alertController: AlertController) {
    addIcons({ add });
  }

  title = 'Grocery List'

  items = [
    {
      'name': 'Banana',
      'quantity': 2,
    },
    {
      'name': 'Milk',
      'quantity': 1,
    }
  ];

  removeItem(item: any, index: number) {
    console.log('Removing ', item)
    this.items.splice(index, 1);
    this.presentToast(`${item.name} has been deleted.`);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Add to list',
      inputs: [
        {
          placeholder: 'Name',
          name: 'name',
        },
        {
          placeholder: 'Quantity',
          name: 'quantity',
          min: 1,
          max: 40,
        },
      ],
      buttons: [
        {
          'text': 'Cancel',
          'role': 'cancel',
        },
        {
          'text': 'Submit',
          'handler': (data: any) => {
            if (isNaN(data.quantity) || data.quantity.trim() === '' || data.name.trim() === '')  {
              this.presentToast('Invalid entry, Try Again.');
            } else {
              this.items.push(
                  data
                );
              console.log('Adding ', data);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
    });
    await toast.present();
  }
}