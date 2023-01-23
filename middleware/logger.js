let date = new Date();

let currentHour = date.getHours();
console.log(currentHour)

let currentDay = date.getDay();
console.log(currentDay)

const logger = (req, res, next) => {
    if (currentHour >= 9 && currentHour < 17 && currentDay > 0 && currentDay < 6) {
        next();
    } else {
        res.send(`
        <div style='display: block; width: 1000px; margin: 10rem auto; text-align: center'>
            <h1>Sorry, we are closed today!</h1>
            <h2>We are open Monday to Friday, from 9 to 17.</h2>
        </div>
        `)
    }
}

module.exports = logger;