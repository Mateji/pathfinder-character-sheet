import { Component, OnInit } from '@angular/core';

export class PlayerClass {
    id: string;
    class: Class;
    level: number;
}

export class Race {
    id: number;
    title: string;
}

export class Class {
    id: number;
    title: string;
}
@Component({
    selector: 'app-create-sheet',
    templateUrl: './create-sheet.component.html',
    styleUrls: ['./create-sheet.component.css']
})
export class CreateSheetComponent implements OnInit {
    races: Race[];
    classes: Class[];
    playerClasses: any[];
    classLookup: any;

    constructor() {
        this.races = [
            {
                id: 1,
                title: 'Human',
            },
            {
                id: 2,
                title: 'Elf',
            },
            {
                id: 3,
                title: 'Half-Elf',
            },
            {
                id: 4,
                title: 'Half-Orc',
            },
            {
                id: 5,
                title: 'Dwarf',
            },
            {
                id: 6,
                title: 'Gnome',
            },
            {
                id: 7,
                title: 'Halfling',
            }
        ];

        this.classes = [
            {
                id: 1,
                title: 'Barbarian'
            },
            {
                id: 2,
                title: 'Bard'
            },
            {
                id: 3,
                title: 'Cleric'
            },
            {
                id: 4,
                title: 'Druid'
            },
            {
                id: 5,
                title: 'Fighter'
            },
            {
                id: 6,
                title: 'Monk'
            },
            {
                id: 7,
                title: 'Paladin'
            },
            {
                id: 8,
                title: 'Ranger'
            },
            {
                id: 9,
                title: 'Rogue'
            },
            {
                id: 10,
                title: 'Sorcerer'
            },
            {
                id: 11,
                title: 'Wizard'
            }
        ];

        this.classLookup = {
            store: {
                type: 'array',
                data: this.classes,
            }
        };

        this.playerClasses = [
            {
                id: 'bd9bcc16-9a59-e75b-c1ce-14a5bd4e1cfe',
                class: 3,
                level: 3
            }
        ];
    }

    ngOnInit() {
    }

    rowInserted(object) {
        console.log(object);
    }
}
