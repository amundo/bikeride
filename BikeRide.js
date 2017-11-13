class Screen {
  constructor(){
    this.el = document.querySelector('svg')
  }

  add(item){
    this.el.appendChild(item.el)
  }
} 

class Circle {
  constructor(cx, cy, r){
    this.el = document.createElement('circle')

    this.el.setAttribute('cx', cx)
    this.el.setAttribute('cy', cy)
    this.el.setAttribute('r', r)
  }

  get style(){
    return this.el.style
  }
}

class Bike {
  constructor(DOM){
    this.dom = DOM
    this.bike = DOM.querySelector('#bike')
  }

  get style(){
    return this.el.style
  }
}

let svg = new Screen 

let circle = new Circle(100, 100, 10)
circle.style.fill = '#ccc;'

svg.add(circle)

fetch('layers/bike/bike.svg')
  .then(r => r.text())
  .then(xml => new DOMParser().parseFromString(xml, 'text/xml'))
  .then(bike => window.bike = new Bike(bike))
