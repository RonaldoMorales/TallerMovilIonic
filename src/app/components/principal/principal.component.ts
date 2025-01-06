import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonList} from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  imports: [IonContent, NgIf, IonItem, IonLabel,IonList],
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuarioEstado: 'no-autenticado' | 'cliente' | 'admin' = 'no-autenticado';
 
  constructor() {}

  ngOnInit() {

  }


}