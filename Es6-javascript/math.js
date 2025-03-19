
const simpleInterest = (principal, rate, time, timeTime) => {
    let result;
    if (timeTime === 'year') {
        result = (principal * rate * time) / 100
        return result;


    } else if (timeTime === 'month') {
        result = (principal * rate * time) / (100 * 12)

        return result.toFixed(2);


    } else if (timeTime === 'week') {
        result = (principal * rate * time) / (100 * 52)
        return result;


    } else if (timeTime === 'day') {
        result = (principal * rate * time) / (100 * 365)

        return result;
    }
}

const circleAreaCircum = (radius, type) => {
    const pi = 3.14;
    if (type === 'area') {
        return pi * radius ** 2
    } else if (type === 'circum') {
        return 2 * pi * radius;


    } else if (type === 'areaCircum') {
        const area = pi * radius ** 2;
        const circumference = 2 * pi * radius;
        const result = {
            area: area.toFixed(2),
            circumference: circumference.toFixed(2)
        };
        return result;
    }
    return 'contact dlt for support';
}
export { simpleInterest, circleAreaCircum }