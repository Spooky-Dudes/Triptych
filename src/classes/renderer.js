class Renderer {
  constructor() {
    this.DOM_el = [];

    this.DOM_el_names = [
      '.nw', '.n', '.ne', '.w', '.c', '.e', '.sw', '.s', '.se'
    ];

    this.getElements();
  }

  getElements() {
    for (let i = 0; i < this.DOM_el_names.length; i++) {
      this.DOM_el[i] = document.querySelector(this.DOM_el_names[i]);
    }
  }

  renderWorld(t) {
    for (let i = 0; i < t.length; i++) {
      if(t[i] === 0 && i !== 4) {
        this.DOM_el[i].setAttribute('data-tile', 'grass');
      } else if(i === 4) {
        this.DOM_el[i].setAttribute('data-tile', 'player');
      } else {
        this.DOM_el[i].setAttribute('data-tile', 'water');
      }
    }
  }
}

export default Renderer;
