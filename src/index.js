module.exports = function toReadable(number) {
    let numbers_0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numbers_11_19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numbers_20_90 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let number_100 = 'hundred';
    let number_length = number.toString().length;
    let str_number = number.toString();
    if (number_length == 1)
        return numbers_0_9[number];
    else if (number_length == 2) {
        if (str_number[1] == 0) {
            return numbers_20_90[str_number[0] - 1];
        }
        if (str_number[0] == 1) {
            return numbers_11_19[str_number[1] - 1];
        }
        else {
            return numbers_20_90[str_number[0] - 1] + ' ' + numbers_0_9[str_number[1]];
        }
    }
    else if (number_length == 3) {
        if (str_number[1] == 0 && str_number[2] == 0) {
            return numbers_0_9[str_number[0]] + ' ' + number_100;
        }
        else if (str_number[2] == '0') {
            return numbers_0_9[str_number[0]] + ' ' + number_100 + ' ' + numbers_20_90[str_number[1] - 1];
        }
        else if (str_number[1] == '1') {
            return numbers_0_9[str_number[0]] + ' ' + number_100 + ' ' + numbers_11_19[str_number[2] - 1];
        }
        else if (str_number[1] == '0') {
            return numbers_0_9[str_number[0]] + ' ' + number_100 + ' ' + numbers_0_9[str_number[2]];
        }
        else {
            return numbers_0_9[str_number[0]] + ' ' + number_100 + ' ' + numbers_20_90[str_number[1] - 1] + ' ' + numbers_0_9[str_number[2]];
        }
    }
}