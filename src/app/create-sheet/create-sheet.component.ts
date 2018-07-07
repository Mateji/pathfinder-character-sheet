import { Component, OnInit, ViewChild } from '@angular/core';
import { Ability, Race } from '../dataClasses/sheet-classes';
import { DxNumberBoxComponent } from 'devextreme-angular';
import { ABILITY, RACE } from '../dataClasses/enums/enums';

export class PlayerClass {
    id: string;
    class: Class;
    level: number;
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
    races: any[];
    race: any;
    classes: Class[];
    playerClasses: any[];
    classLookup: any;

    selectedRace: Race;

    /**
     * ViewChilds
     */
    // @ViewChild('strengthScore') strengthScoreDxComponent: DxNumberBoxComponent;
    // @ViewChild('strengthModifier') strengthModifierDxComponent: DxNumberBoxComponent;
    // @ViewChild('dexterityScore') dexterityScoreDxComponent: DxNumberBoxComponent;
    // @ViewChild('dexterityModifier') dexterityModifierDxComponent: DxNumberBoxComponent;

    /**
     * Abilities
     */
    strength: Ability;
    dexterity: Ability;
    constitution: Ability;
    intelligence: Ability;
    wisdom: Ability;
    charisma: Ability;



    constructor() {
        this.strength = new Ability(10, ABILITY.Strength);
        this.dexterity = new Ability(10, ABILITY.Dexterity);
        this.constitution = new Ability(10, ABILITY.Constitution);
        this.intelligence = new Ability(10, ABILITY.Intelligence);
        this.wisdom = new Ability(10, ABILITY.Wisdom);
        this.charisma = new Ability(10, ABILITY.Charisma);

        this.races = this.instantiateRaces();
        this.race = this.races[0].race;


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

    instantiateRaces() {
        let races:any = [];
        for (let race in RACE) {
            let currentNumber = Number(race);
            if (!isNaN(currentNumber)) {
                let currentRace = new Race(currentNumber);
                races.push({
                    id: currentNumber,
                    race: currentRace,
                    title: currentRace.title
                });
            }
        }

        return races;
    }

    ngOnInit() {
    }

    rowInserted(object) {
        console.log(object);
    }
}
