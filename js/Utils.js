export default class Utils {
    static VALID_CHOICES = ['pierre','feuille', 'ciseau'];

    static getIsValid(player, symbol) {
        while (!Utils.VALID_CHOICES.includes(symbol)) {
            return prompt("Choisisez entre pierre feuille ciseau " + player.name + ".");
        }
        player.last_move = symbol;
    }
}