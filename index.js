const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = function(){
    cats.push('Ralph')
}

const destructivelyPrependCat = function(){
    cats.unshift('Bob')
}

const destructivelyRemoveLastCat = function(){
    cats.pop('Bob')
}

const destructivelyRemoveFirstCat = function(){
    cats.shift('Bob')
}

function appendCat() {
    return appendCat = [...cats, "Broom"]
}

function prependCat() {
    return prependCat = ["Arnold", ...cats]
}

function removeLastCat() {
    return removeLastCat = cats.slice(0, 2)
}

function removeFirstCat() {
    return removeFirstCat = cats.slice(-2)
}