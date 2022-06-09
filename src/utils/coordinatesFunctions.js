//Source : https://www.movable-type.co.uk/scripts/latlong.html

//Haverine formula
export function getDistanceBetweenTwoPoints(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}


export function getBearingBetweenTwoPoints(lat1, lon1, lat2, lon2) {
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    lon1 = deg2rad(lon1);
    lon2 = deg2rad(lon2);
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const angle = Math.atan2(y, x);
    const brng = (angle * 180 / Math.PI + 360) % 360; // in degrees
    return brng;
}

export function getBearingChar(bearing) {
    bearing = bearing % 360;
    if (bearing >= 22.5 * 1 && bearing < 22.5 * 3) {
        return "🡽";
    } else if (bearing >= 22.5 * 3 && bearing < 22.5 * 5) {
        return "🡺";
    } else if (bearing >= 22.5 * 5 && bearing < 22.5 * 7) {
        return "🡾";
    } else if (bearing >= 22.5 * 7 && bearing < 22.5 * 9) {
        return "🡻";
    } else if (bearing >= 22.5 * 9 && bearing < 22.5 * 11) {
        return "🡿";
    } else if (bearing >= 22.5 * 11 && bearing < 22.5 * 13) {
        return "🡸";
    } else if (bearing >= 22.5 * 13 && bearing < 22.5 * 15) {
        return "🡼";
    }
    return "🡹";
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function rad2deg(rad) {
    return rad * (180 / Math.PI);
}