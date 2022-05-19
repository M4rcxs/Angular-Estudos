import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    console.log('ativando o service');
    return animals.filter((a) => animal.name !== a.name);
  }
}
