// alert("Welcome back");

/* 
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

pic - the src of the coffee
alt - the alt tag for coffee pic
desc - description of the coffee
day - the day of the week for the coffee
color - the color associated with the coffee

*/
function coffeeTemplate(coffee) {
    return `
    <p>
	<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
		<strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong
		class="feature">${coffee.name}</strong>, ${coffee.desc}
    </p>
    `;
}

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);





let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

if(urlParams.has("day")){//from querystring
myDay = urlParams.get("day");
}
if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{//today's day of week
    myDay = today;
}


myDay = parseInt(myDay);

switch (myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "a picture of Drip Coffee",
            color: "#3d5a6c",
            day: "Sunday",
            desc: "make sure you have plenty of coffee to get through the week ahead!"
        }
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "a picture of Caramel-latte",
            color: "#a77556",
            day: "Monday",
            desc: "may your coffee be strong and your Monday be short."
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "a picture of bubble tea",
            color: "pink",
            day: "Tuesday",
            desc: "life is just one cup of coffee after another, and don’t look for anything else."
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "a picture of a mocha",
            color: "brown",
            day: "Wednesday",
            desc: "the elixir that transforms the mundane into magic."
        }
        break;

        case 4:
        today = "Thursday";
        coffee = {
            name: "Pumpkin-Spice-Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "a picture of a pumpkin-spice-latte",
            color: "#e7a062",
            day: "Thursday",
            desc: "doesn’t matter where you’re from or how you feel—there’s always peace in a strong cup of coffee."
        }
        break;

        case 5:
        today = "Friday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "a picture of a Frappaccino",
            color: "#4f936d",
            day: "Friday",
            desc: "awaken your senses on a Friday with Frappaccino's aroma."
        }
        break;

        case 6:
        today = "Saturday";
        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            alt: "a picture of Cold-Brew",
            color: "#8e888d",
            day: "Saturday",
            desc: "relaxes and refreshes your soul with a great drink."
        }
        break;


        default:
            today = "Something went wrong!";
}

// places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// changes color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);