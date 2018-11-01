export default function turnOnOffSound() {
  // this.setState({ a: '', b: '', operator: '', equals: '', result: '' })
  let audio = new Audio('../../sounds/button-10.wav');
  // if (this.state.soundOn) {
    audio.play();
  // }
}