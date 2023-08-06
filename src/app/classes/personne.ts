export class Personne {
        constructor(private _nom: string, private _prenom: string) {}
    get nom() {
    return this._nom;
    }
    set nom(nom: string) {
    this._nom = nom;
    }
    get prenom() {
    return this._prenom;
    }
    set prenom(prenom: string) {
    this._prenom = prenom;
    }
}
