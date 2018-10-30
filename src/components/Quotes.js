import React, { Component } from 'react';

class Quotes extends Component {
  render() {
    const quotesArr = [
      "There's nothing special about you. You're just an ordinary program.",
      "End of line.",
      "You've enjoyed all the power you've been given, haven't you? I wonder how you'd take to working in a pocket calculator.",
      "You're in trouble, program. Why don't you make it easy on yourself? Who's your user?",
      "You shouldn't have come back, Flynn.",
      "I'm warning you. You're entering a big error, Flynn.",
      "I'm going to have to put you on the game grid.",
      "No one User wrote me! I'm worth millions of their man-years!",
      "End of line!",
      "You should've joined me; we'd have made a great team!",
      "You're very persistent, Tron!",
      "I can't afford to have an independent programmer monitoring me. Do you have any idea how many outside systems I've gone into? How many programs I've appropriated?",
      "Greetings. The Master Control Program has chosen you to serve your system on the Game Grid. Those of you who continue to profess a belief in the Users will receive the standard substandard training which will result in your eventual elimination. Those of you who renounce this superstitious and hysterical belief will be eligible to join the warrior elite of the MCP. You will each receive an identity disc.",
      "Everything you do or learn will be imprinted on this disc. If you lose your disc, or fail to follow commands, you will be subject to immediate de-resolution. That will be all.",
      "Get them! Send out every game tank in the grid!",
      "Bring in the logic probe!"
    ];
    const index = Math.floor(Math.random() * quotesArr.length);
    const quote = quotesArr[index];

    if (this.props.on) {
      return (
        <div>
          <span>{this.props.result !== '' ? quote : null}</span>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default Quotes;



