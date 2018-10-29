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

    bonusAbilitiesList: string[];
    selectedBonusAbility: string;

    /**
     * DevExtreme Control Settings
     */
    dxAbilityScoreWidth = 96;
    dxAbilityCostWidth = 40;
    dxRaceAdjustmentWidth = 40;
    dxAbilityModifierWidth = 40;


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

        this.bonusAbilitiesList = [
            'Strength',
            'Dexterity',
            'Constitution',
            'Intelligence',
            'Wisdom',
            'Charisma'
        ];

        this.selectedBonusAbility = '';
    }

    ngOnInit() { }

    calculatePoints(): number {
        let buyingPoints = this.buyingPoints;
        buyingPoints -= this.strength.abilityCost;
        buyingPoints -= this.dexterity.abilityCost;
        buyingPoints -= this.constitution.abilityCost;
        buyingPoints -= this.intelligence.abilityCost;
        buyingPoints -= this.wisdom.abilityCost;
        buyingPoints -= this.charisma.abilityCost;

        return buyingPoints;
    }

    finalModifier(abilityScore: string, raceModifier: string) {
        let finalModifier: number;

        finalModifier = Math.floor(((parseInt(abilityScore, 10) + parseInt(raceModifier, 10)) - 10) / 2);

        return finalModifier;
    }

    showRaceAbilityBonus(): boolean {
        return this.selectedRace.bonusModifier > 0;
    }

    // TODO: Rename function and fix function
    changeDropDownBoxValue(e) {
        this.selectedBonusAbility = e.addedItems[0];
    }

    abilityPointCheck() {
        return 0;
    }
}
