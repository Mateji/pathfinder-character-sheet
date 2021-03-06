import { AbilityGridComponent } from './../ability-grid/ability-grid.component';
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
    race: Race;
    classes: Class[];
    playerClasses: any[];
    classLookup: any;

    @ViewChild('abilityGrid')
    private abilityGrid: AbilityGridComponent;

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
        const races: any = [];
        // tslint:disable-next-line:forin
        for (const race in RACE) {
            const currentNumber = Number(race);
            if (!isNaN(currentNumber)) {
                const currentRace = new Race(currentNumber);
                races.push({
                    id: currentNumber,
                    race: currentRace,
                    title: currentRace.title
                });
            }
        }

        return races;
    }

    addPlusSign(event) {
        if (event.value > 0) {
            event.value = '+' + event.value;
        }
    }

    ngOnInit() {
    }

    rowInserted(object) {
        console.log(object);
    }

    validatePage() {
        this.abilityGrid.validate();
    }
}
