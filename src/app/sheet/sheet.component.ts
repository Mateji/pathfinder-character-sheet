import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
    races: string[];

    constructor() {
        this.races = [
            'Human',
            'Elf',
            'Half-Elf',
            'Half-Orc',
            'Dwarf',
            'Gnome',
            'Halfling'
        ];
     }

    ngOnInit() {
    }

}
