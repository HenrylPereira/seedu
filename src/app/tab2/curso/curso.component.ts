/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { ModuloGetInterface } from './interfaces/modulo-get.interface';
import { ModuloGetAllService } from './services/modulo-get-all.service';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  cards$!: ModuloGetInterface[];

  constructor(private moduloGetAllService: ModuloGetAllService, private alertController: AlertController) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.moduloGetAllService.getModulos().subscribe((card)=>{
      this.cards$ = card;
    });
  }

  async responder() {
    const alert = await this.alertController.create({
      header: 'Correto',
      message: 'Resposta certa',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
