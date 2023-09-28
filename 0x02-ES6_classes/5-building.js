export default class Building {
    constructor (sqf) {
        if (typeof sqf !== "number") throw new Error()
        this._sqf = sqf
        this.evacuationWarningMessage();
    }

    get sqf() {
        return this._sqf
    }

    set sqf(sqf) {
        this._sqf = sqf
    }

    evacuationWarningMessage() {
        if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}