import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor() { }

  // El error es por la cantidad de caracteres en el texto
  Menu = [
    { nombre: 'TASTING BOARD', descripcion: 'Beef & bourbon meatballs, sticky chilli-hoisin glazed chicken & duck wings.', precio: '90 MXN', imagen: "https://cdn.cdkitchen.com/recipes/images/2017/08/128893-7408-mx.jpg" },
    { nombre: 'STICKY CHIPOTLE CHICKEN', descripcion: 'Sweet chipotle chilli-glazed chicken bites with toasted sesame seeds, served with a dressed slaw.', precio: '70 MXN', imagen: "https://www.seriouseats.com/images/2015/04/20150329-Baked-Strawberry-Chipotle-Chicken-Wings-Avocado-Blue-Cheese-Plated-Morgan-Eisenberg.jpg" },
    { nombre: 'Salt and Pepper Shrimp', descripcion: 'Served with chipotle chilli mayonnaise.', precio: '97 MXN', imagen: "https://i2.wp.com/petersfoodadventures.com/wp-content/uploads/2016/05/IMG_3642.jpg" }

  ]

  Decirprecio(precio: number, nombre: string) {
    alert(`El precio de ${nombre} es de ${precio}`);

  }
  ngOnInit() {
  }

}
