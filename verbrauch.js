let version = 0;
let houses = 0;
$(function() {
    $('#dataSelect').on('change', function (e) {
        let value = $(e.currentTarget).val();
        version = value === 'gameData'?1:0;
        calcUsage(houses);
    });

    $('#houses').on('input', function (e) {
        houses = $(e.currentTarget).val();
        calcUsage(houses);
    });
});

function calcUsage(houses) {
    let residents = [
        houses * inhabitants[0],
        houses * inhabitants[1],
        houses * inhabitants[2],
        houses * inhabitants[3],
        houses * inhabitants[4]
    ];

    for(let i = 0; i < 8; i++) {
        let good;
        switch (i) {
            case 0:
                good = food[version];
                break;
            case 1:
                good = fabric[version];
                break;
            case 2:
                good = alcohol[version];
                break;
            case 3:
                good = spices[version];
                break;
            case 4:
                good = tobacco[version];
                break;
            case 5:
                good = cocoa[version];
                break;
            case 6:
                good = clothing[version];
                break;
            case 7:
                good = jewelry[version];
                break;
        }
        for(let k = 0; k < residents.length; k++) {
            let prefix = prefixes[k];
            $('#' + prefix + names[i]).text(calcGoodUsage(good[k], residents[k]));
        }
    }

    $('#pioniere').text(residents[0]);
    $('#siedler').text(residents[1]);
    $('#buerger').text(residents[2])
    $('#kaufleute').text(residents[3]);
    $('#aristokraten').text(residents[4]);
}

function calcGoodUsage(usage, residents) {
    return (residents / 100 * usage).toFixed(2);
}