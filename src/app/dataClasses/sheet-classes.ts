import { SIZE, LANGUAGE, WEAPON, RACE, ABILITY } from './enums/enums';

export class Race {
    id: number;
    title: string;

    size: SIZE;
    speed: number;
    languages: LANGUAGE[];
    weaponFamiliarity: WEAPON[];
    miscTraits: string[];

    strengthModifier: number;
    dexterityModifier: number;
    constitutionModifier: number;
    intelligenceModifier: number;
    wisdomModifier: number;
    charismaModifier: number;
    bonusModifier: number;

    constructor(race: RACE) {
        this.strengthModifier = 0;
        this.dexterityModifier = 0;
        this.constitutionModifier = 0;
        this.intelligenceModifier = 0;
        this.wisdomModifier = 0;
        this.charismaModifier = 0;
        this.bonusModifier = 0;

        switch (race) {
            case RACE.Dwarf:
                this.id = RACE.Dwarf;
                this.title = 'Dwarf';

                // Ability Modifiers
                this.constitutionModifier += 2;
                this.wisdomModifier += 2;
                this.charismaModifier -= 2;

                this.size = SIZE.Medium;
                this.speed = 20;
                this.weaponFamiliarity = [WEAPON.Battleaxe, WEAPON.HeavyPick, WEAPON.Warhammer, WEAPON.Dwarven];
                this.languages = [LANGUAGE.Common, LANGUAGE.Dwarven];

                this.miscTraits = ['Darkvision-60', 'Defensive Training', 'Greed', 'Hatred', 'Hardy', 'Stability', 'Stonecunning'];
                break;
            case RACE.Elf:
                this.id = RACE.Elf;
                this.title = 'Elf';

                // Ability Modifiers
                this.dexterityModifier += 2;
                this.intelligenceModifier += 2;
                this.constitutionModifier -= 2;

                this.size = SIZE.Medium;
                this.speed = 30;
                this.weaponFamiliarity = [
                    WEAPON.Longbow,
                    WEAPON.CompositeLongbow,
                    WEAPON.Longsword,
                    WEAPON.Rapier,
                    WEAPON.Shortbow,
                    WEAPON.CompositeShortbow,
                    WEAPON.Elven
                ];
                this.languages = [LANGUAGE.Common, LANGUAGE.Elven];

                this.miscTraits = [
                    'Low-Light Vision',
                    'Elven Immunities',
                    'Elven Magic',
                    'Keen Senses'
                ];
                break;
            case RACE.Gnome:
                this.id = RACE.Gnome;
                this.title = 'Gnome';

                // Ability Modifiers
                this.constitutionModifier += 2;
                this.charismaModifier += 2;
                this.strengthModifier -= 2;

                this.size = SIZE.Small;
                this.speed = 20;
                this.weaponFamiliarity = [WEAPON.Gnome];
                this.languages = [
                    LANGUAGE.Common,
                    LANGUAGE.Gnome,
                    LANGUAGE.Sylvan
                ];

                this.miscTraits = [
                    'Defensive Training',
                    'Gnome Magic',
                    'Hatred',
                    'Illusion Resistance',
                    'Keen Senses',
                    'Obsessive'
                ];
                break;
            case RACE.HalfElf:
                this.id = RACE.HalfElf;
                this.title = 'Half-Elf';

                // Ability Modifiers
                this.bonusModifier += 2;

                this.size = SIZE.Medium;
                this.speed = 30;
                this.weaponFamiliarity = [];
                this.languages = [LANGUAGE.Common, LANGUAGE.Celestial];

                this.miscTraits = ['Low-Light Vision', 'Adaptability', 'Elf Blood', 'Elven Immunities', 'Keen Senses', 'Multitalented'];
                break;
            case RACE.HalfOrc:
                this.id = RACE.HalfOrc;
                this.title = 'Half-Orc';

                // Ability Modifiers
                this.bonusModifier += 2;

                this.size = SIZE.Medium;
                this.speed = 30;
                this.weaponFamiliarity = [WEAPON.Greataxe, WEAPON.Falchion, WEAPON.Orc];
                this.languages = [LANGUAGE.Common, LANGUAGE.Orc];

                this.miscTraits = ['Darkvision', 'Intimidating', 'Orc Blood', 'Orc Ferocity'];
                break;
            case RACE.Halfling:
                this.id = RACE.Halfling;
                this.title = 'Halfling';

                // Ability Modifiers
                this.dexterityModifier += 2;
                this.charismaModifier += 2;
                this.strengthModifier -= 2;

                this.size = SIZE.Small;
                this.speed = 20;
                this.weaponFamiliarity = [WEAPON.Sling, WEAPON.Halfling];
                this.languages = [LANGUAGE.Common, LANGUAGE.Halfling];

                this.miscTraits = ['Fearless', 'Halfling Luck', 'Keen Senses', 'Sure-Footed'];
                break;
            case RACE.Human:
                this.id = RACE.Human;
                this.title = 'Human';

                // Ability Modifiers
                this.bonusModifier += 2;

                this.size = SIZE.Medium;
                this.speed = 30;
                this.weaponFamiliarity = [];
                this.languages = [LANGUAGE.Common];

                this.miscTraits = ['Bonus Feat', 'Skilled'];
                break;
            default:
                break;
        }
    }
}

export class ClassType {
    id: string;
    title: string;
}

export class Class {
    id: string;
    class: Class;
    level: number;
}

export class CharacterSheet {
    id: string;
    characterName: string;
    playerName: string;
    characterRace: Race;
    playerClasses: Class[];

    // Abilities
    AbilityStrength: Ability;
    AbilityDexterity: Ability;
    AbilityConstitution: Ability;
    AbilityIntelligence: Ability;
    AbilityWisdom: Ability;
    AbilityCharisma: Ability;

    // Skills
    SkillAcrobaticTotal;
    AcrobaticSkillRank;
}

export class SkillAcrobatics {
    rank: number;
    abilityModifier: number;
    miscModifier: number;
    total: number;
}

export class Ability {
    abilityType: ABILITY;
    _abilityScore: number;
    tempAdjustment: number;
    tempModifier: number;
    _abilityModifier: number;
    scoreTable: Map<number, number>;

    constructor(abilityScore: number, abilityType: ABILITY) {
        this.abilityScore = abilityScore;
        this.abilityType = abilityType;

        // Init Score Table
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

    get abilityModifier() {
        return this._abilityModifier;
    }

    get incrementCost() {
        return this.scoreTable.get(this.abilityScore);
    }

    set abilityModifier(abilityModifier: number) {
        this._abilityModifier = this.abilityModifier;
    }

    get abilityScore() {
        return this._abilityScore;
    }

    set abilityScore(score: number) {
        this._abilityScore = score;
        this._abilityModifier = Math.floor((score - 10) / 2);
    }
}

export class Skill {
    rank: number;
    ability: Ability;
    miscModifier: number;
    total() {
        return this.rank + this.ability.abilityModifier + this.miscModifier;
    }
}
