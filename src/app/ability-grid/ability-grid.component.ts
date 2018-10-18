import { ABILITY } from './../dataClasses/enums/enums';
import { Race, Ability } from './../dataClasses/sheet-classes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-ability-grid',
    templateUrl: './ability-grid.component.html',
    styleUrls: ['./ability-grid.component.css']
})
export class AbilityGridComponent implements OnInit {

    @Input() buyingPoints: number;
    @Input() selectedRace: Race;

    strength: Ability;
    dexterity: Ability;
    constitution: Ability;
    intelligence: Ability;
    wisdom: Ability;
    charisma: Ability;

    abilities: any[];

    currentBuyingPoints: number;
    scoreTable: Map<number, number>;

    constructor() {
        this.strength = new Ability(10, ABILITY.Strength);
        this.dexterity = new Ability(10, ABILITY.Dexterity);
        this.constitution = new Ability(10, ABILITY.Constitution);
        this.intelligence = new Ability(10, ABILITY.Intelligence);
        this.wisdom = new Ability(10, ABILITY.Wisdom);
        this.charisma = new Ability(10, ABILITY.Charisma);

        this.scoreTable = new Map();
        this.scoreTable.set(7, -4);
        this.scoreTable.set(8, -2);
        this.scoreTable.set(9, -1);
        this.scoreTable.set(10, 0);
        this.scoreTable.set(11, 1);
        this.scoreTable.set(12, 2);
        this.scoreTable.set(13, 3);
        this.scoreTable.set(14, 5);
        this.scoreTable.set(15, 7);
        this.scoreTable.set(16, 10);
        this.scoreTable.set(17, 13);
        this.scoreTable.set(18, 17);
    }

    ngOnInit() {
        this.currentBuyingPoints = this.buyingPoints;
        // this.abilities = [
        //     {
        //         AbilityName: 'Strength',
        //         AbilityScore: this.strength.abilityScore,
        //         RaceAdjustment: this.selectedRace.strengthModifier,
        //         AbilityModifier: this.strength.abilityModifier
        //     },
        //     {
        //         AbilityName: 'Dexterity',
        //         AbilityScore: this.dexterity.abilityScore,
        //         RaceAdjustment: this.selectedRace.dexterityModifier,
        //         AbilityModifier: this.dexterity.abilityModifier
        //     },
        //     {
        //         AbilityName: 'Constitution',
        //         AbilityScore: this.constitution.abilityScore,
        //         RaceAdjustment: this.selectedRace.constitutionModifier,
        //         AbilityModifier: this.constitution.abilityModifier
        //     },
        //     {
        //         AbilityName: 'Intelligence',
        //         AbilityScore: this.intelligence.abilityScore,
        //         RaceAdjustment: this.selectedRace.intelligenceModifier,
        //         AbilityModifier: this.intelligence.abilityModifier
        //     },
        //     {
        //         AbilityName: 'Wisdom',
        //         AbilityScore: this.wisdom.abilityScore,
        //         RaceAdjustment: this.selectedRace.wisdomModifier,
        //         AbilityModifier: this.wisdom.abilityModifier
        //     },
        //     {
        //         AbilityName: 'Charisma',
        //         AbilityScore: this.charisma.abilityScore,
        //         RaceAdjustment: this.selectedRace.charismaModifier,
        //         AbilityModifier: this.charisma.abilityModifier
        //     }
        // ];
    }

    checkAbilityCost(event, abilityName) {
        const valueCost = this.scoreTable.get(event.value);

        // if (this[abilityName].abilityScore === event.value) {
        //     return;
        // }

        if (valueCost > this.currentBuyingPoints) {
            // this.showError(event.element);
            this[abilityName].abilityScore = event.previousValue;
            return;
        } else {
            this.currentBuyingPoints -= valueCost;
        }
    }



}
