import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "nike", type: "dog", age: 0.5 },
    { name: "michelangelo", type: "cat", age: 5 },
    { name: "otavio", type: "turtle", age: 229 },
    { name: "bob", type: "horse", age: 2 },
  ];
  animal: Animal[] = [
    {name: 'Teste', type: 'dog', age: 2}
  ];
  animalDetails: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O pet tem ${animal.name} tem ${animal.age} anos`; 

  }
}
