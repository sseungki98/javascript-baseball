const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
class App {
  play() {}

  printStartMessage() {
    const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    Console.print(START_MESSAGE);
  }

  getAnswerNumber() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  numberInput() {
    const INPUT_MESSAGE = '숫자를 입력해주세요. : ';
    let inputNumber;
    Console.readLine(INPUT_MESSAGE, number => {
      inputNumber = number;
    });
    return inputNumber;
  }

  isInteger(inputNumber) {
    if (Number.isInteger(Number(inputNumber))) {
      return true;
    } else {
      return false;
    }
  }

  is3Digit(inputNumber) {
    if (inputNumber.length === 3) {
      return true;
    } else {
      return false;
    }
  }

  hasSameNumber(inputNumber) {
    if (inputNumber[0] === inputNumber[1] || inputNumber[1] === inputNumber[2] || inputNumber[2] === inputNumber[0]) {
      return true;
    }
    return false;
  }
}
module.exports = App;
