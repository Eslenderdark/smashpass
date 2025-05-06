import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardHeader, IonButton, IonImg, IonCardTitle, IonCardSubtitle, IonCardContent, IonHeader, IonGrid, IonRow, IonCol, IonCard, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonCardHeader, IonImg, IonButton, IonHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonCard, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor(private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
    this.getData()
  }

  public i: number = 0;
  public contadorpass: number = 0;
  public contadorsmash: number = 0;
  public url_host: string = "https://back-smashpass-8z0d.onrender.com/";
  public personajes: any[] = [];

  getData() {
    this.http.get(this.url_host + 'personajes').subscribe((response: any) => {
      if (response != null && response.length && response.length > 0) {
        this.personajes = response;
      }
      console.log(response);
    });
  }

  async showGameEndMessage() {
    const toast = await this.toastController.create({
      message: 'Has completado el Smash or Pass.',
      duration: 3000, 
      position: 'top', 
      color: 'success',
    });
    toast.present();
  }

  contador1() {
    this.contadorpass++;
    if (this.i == 65){
      this.i = 0
    }
  }

  contador2() {
    this.contadorsmash++;
    if (this.i == 65){
      this.i = 0
    }
  }

  async pass(i: number) {
    const personajesVotados = JSON.parse(localStorage.getItem('personajesVotados') || '[]');
  
    if (personajesVotados.includes(this.personajes[i].id)) {
      alert('Ya has hecho tus votos, gracias por participar.');
      return;
    }
    this.i++;
  
    if (this.i >= this.personajes.length) {
      this.showGameEndMessage();
    }
  
    console.log('ID a enviar:', this.personajes[i].id);
  
    this.http.post(this.url_host + 'personajes/pass', { id: this.personajes[i].id }).subscribe((response: any) => {
      console.log(response);
      personajesVotados.push(this.personajes[i].id);
      localStorage.setItem('personajesVotados', JSON.stringify(personajesVotados));
    });
  }

  async smash(i: number) {
    const personajesVotados = JSON.parse(localStorage.getItem('personajesVotados') || '[]');
  
    if (personajesVotados.includes(this.personajes[i].id)) {
      alert('Ya has hecho tus votos, gracias por participar.');
      return;
    }
    this.i++;
  
    // Verificar si hemos llegado al final de la lista
    if (this.i >= this.personajes.length) {
      this.showGameEndMessage();
   
    }
  
    console.log('ID a enviar:', this.personajes[i].id);
  
    this.http.post(this.url_host + 'personajes/smash', { id: this.personajes[i].id }).subscribe((response: any) => {
      console.log(response);
      personajesVotados.push(this.personajes[i].id);
      localStorage.setItem('personajesVotados', JSON.stringify(personajesVotados));
    });
  }

  getSmashPercentage(index: number): number {
    const personaje = this.personajes[index];
    const totalVotos = (personaje.smash || 0) + (personaje.pass || 0);
    if (totalVotos === 0) return 0;
    return Math.round((personaje.smash / totalVotos) * 100);
  }

  getPassPercentage(index: number): number {
    const personaje = this.personajes[index];
    const totalVotos = (personaje.smash || 0) + (personaje.pass || 0);
    if (totalVotos === 0) return 0;
    return Math.round((personaje.pass / totalVotos) * 100);
  }
}
