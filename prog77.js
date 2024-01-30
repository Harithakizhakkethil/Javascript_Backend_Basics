boleno = {
    model : 'hatch back',
    varient :['automatic','manuel'],
    manufacturer:'Maruti'
}

glanza = {
    manufacturer:'Toyota'
}

glanza.__proto__ = boleno
console.log(glanza.model);