import BuildingManager from './BuildingManager';

export default class Donut {
  constructor(donuts, gameStateController) {
    this._gameName = 'Donut Clicker';
    this._donuts = donuts;
    //this._donutsClicked = gameState.donutInfo.donutsClicked;
    this._controller = gameStateController;
  }

  // getters
  get gameName() {
    return this._gameName;
  }

  get donuts() {
    return this._donuts;
  }

  get donutsClicked() {
    return this._donutsClicked;
  }

  // setters
  set gameName(name) {
    this._gameName = name;
  }

  set donuts(donuts) {
    this._controller((prevState) => ({
      ...prevState,
      donutInfo: {
        ...prevState.donutInfo,
        donuts: prevState.donutInfo.donuts + donuts,
      },
    }));
  }

  set donutsClicked(donuts) {
    this._controller((prevState) => ({
      ...prevState,
      donutInfo: {
        ...prevState.donutInfo,
        donutsClicked: prevState.donutInfo.donutsClicked + donuts,
      },
    }));
  }

  clickDonut() {
    this.donuts = 1;
    //this.donutsClicked =+ 1;
    console.log(this.donutsClicked)
  }
}
