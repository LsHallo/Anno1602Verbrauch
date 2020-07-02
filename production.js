const fisherData = [0.75, 1.07];
function calculateFisher(needed) {
    return round(needed / fisherData[version]);
}

const butcherData = [2.4, 2.4];
const cattleData = [2.3, 2.4];
function calculateButcher(needed) {
    let butcher = needed / butcherData[version];
    return round([needed * 2 / cattleData[version], butcher]);
}

const bakeryData = [3, 3.16];
const millData = [3, 3.33];
const grainData = [3, 3];
function calculateBakery(needed) {
    let bakery = needed / bakeryData[version];
    let mill = needed * 2 / millData[version];
    let grain = needed * 4 / grainData[version];
    return round([grain, mill, bakery]);
}

const hunterData = [2, 2];
function calculateHunter(needed) {
    return round(needed / hunterData[version]);
}

function round(x) {
    if(Array.isArray(x)) {
        for(let i = 0; i < x.length; i++) {
            x[i] = Math.round(x[i]);
        }
    } else {
        x = Math.round(x);
    }
    return x;
}