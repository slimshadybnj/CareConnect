let insurancePlans = [
    {   
        name:"EmblemHealth Millennium, Catastrophic Plan",
        age: "18-31",
        cost:"$798.43",
        coverage: "Medical Plus Child Dental",
        extraInfo: "ST, INN, Millennium, Network, Pediartic Dental"
    },
    {   
        name:"HealthFirst Bronze Leaf Premier Plan",
        age: "24-35",
        cost:"$725.29",
        coverage: "Medical Plus Dental",
        extraInfo: "NS, INN, Fidelis Care HBX Network, Family Dental, Family Vision, Telemedicine, Fitness & Welness Rewards"
    },
    {   
        name:"Ambetter From Fidelis Care Silver One",
        age: "32-50",
        cost:"$828.79",
        coverage: "Medical Plus Dental",
        extraInfo: "NS, INN, Dep25, Free Telemedicine Program, Family Dental"
    },
    {   
        name:"Anthem Gatekeeper X Gold",
        age: "49-60",
        cost:"$1299.89",
        coverage: "Medical Plus Child Dental",
        extraInfo: "ST, INN, Individual Network, Dep 25, Pediatric Dental"
    }
]

/*
If you are able to input the information we are checking
for each of these medical providers in the object array,
as you know which ones you have in mind, please do.
*/




let userName = document.getElementById("firstNameInput")
let userDOB = document.getElementById("dob")
let button = document.querySelector("button");
let userZipCode = document.getElementById("zipcode")
let userPhoneNum = document.getElementById("phone number")
let userInsurStatus = document.getElementById("insurance status")
let userLanguage = document.getElementById("languages")
let userGender = document.getElementById("gender")


let form = document.getElementById("formQuestions")
let title = document.getElementById("title")
let providerList = document.getElementById("providerList")

let questions = [userName,userDOB,userZipCode,userPhoneNum,userInsurStatus,userLanguage, userGender];



let currentDate = new Date();
let currentYear = currentDate.getFullYear()
console.log(currentYear)
button.onclick = function(event) {
    if (emptyAlert()) {
        alert("You have empty fields still! Fill those out please.")
    }
    else 
    {
        form.style.display = "none";
        title.style.display = "block";
        providerList.style.display = "flex";

        


        const userYear = parseInt(userDOB.value.split("-")[0])
        console.log(userYear)
        const userAge = currentYear - userYear;
        event.preventDefault();
        

        if (userAge < 31) {
            showProvider(insurancePlans[0].name,insurancePlans[0].cost,insurancePlans[0].coverage,insurancePlans[0].extraInfo)
            showProvider(insurancePlans[1].name,insurancePlans[1].cost,insurancePlans[1].coverage,insurancePlans[1].extraInfo)
        }
        if (userAge > 31) {
            showProvider(insurancePlans[2].name,insurancePlans[2].cost,insurancePlans[2].coverage,insurancePlans[2].extraInfo)
            showProvider(insurancePlans[3].name,insurancePlans[3].cost,insurancePlans[3].coverage,insurancePlans[3].extraInfo)

        }

    }
    title.innerHTML += userName.value;
}


function showProvider(name,cost,coverage) {
    const newDiv = document.createElement("div");
    newDiv.className = 'provider';

    const provName = document.createElement("h3");
    provName.innerHTML = name;
    newDiv.appendChild(provName);

    const costP = document.createElement("p");
    costP.innerHTML = "Monthly Cost: " + cost;
    newDiv.appendChild(costP);

    const coverageP = document.createElement("p");
    coverageP.innerHTML = "Covers " + coverage;
    newDiv.appendChild(coverageP);

    providerList.appendChild(newDiv)
}

function emptyAlert () {
    for (i = 0; i < questions.length; i++) {
        if (!questions[0].value) {
            return true;
        }
    }
    return false;
}

// Animated Balls for the screen 
const canvas = document.getElementById('balls-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
let width = canvas.width
let height = canvas.height 
let BALL_COUNT = 10;
let BALL_RADIUS = 20; 

let color = '#4fd1c5'
if (window.location.pathname.includes('Index')) color = '#ff9800';
else if (window.location.pathname.includes('Form')) color = '#e94560'

function randomVel() {
    return (Math.random()- 0.5) * 6;
}

function randomPos(max){
    return Math.random() * (max - 2 * BALL_RADIUS) + BALL_RADIUS;
}

// Ball object
    function Ball(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = BALL_RADIUS;
    }
    Ball.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };
    Ball.prototype.move = function() {
        this.x += this.vx;
        this.y += this.vy;
        // Wall collision
        if (this.x - this.radius < 0) { this.x = this.radius; this.vx *= -1; }
        if (this.x + this.radius > width) { this.x = width - this.radius; this.vx *= -1; }
        if (this.y - this.radius < 0) { this.y = this.radius; this.vy *= -1; }
        if (this.y + this.radius > height) { this.y = height - this.radius; this.vy *= -1; }
    };
    // Ball collision
    function collide(b1, b2) {
        let dx = b2.x - b1.x;
        let dy = b2.y - b1.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < b1.radius + b2.radius) {
            // Simple elastic collision
            let angle = Math.atan2(dy, dx);
            let speed1 = Math.sqrt(b1.vx*b1.vx + b1.vy*b1.vy);
            let speed2 = Math.sqrt(b2.vx*b2.vx + b2.vy*b2.vy);
            let dir1 = Math.atan2(b1.vy, b1.vx);
            let dir2 = Math.atan2(b2.vy, b2.vx);
            let vx1 = speed2 * Math.cos(dir2 - angle);
            let vy1 = speed1 * Math.sin(dir1 - angle);
            let vx2 = speed1 * Math.cos(dir1 - angle);
            let vy2 = speed2 * Math.sin(dir2 - angle);
            b1.vx = vx1 * Math.cos(angle) + vy1 * Math.cos(angle + Math.PI/2);
            b1.vy = vx1 * Math.sin(angle) + vy1 * Math.sin(angle + Math.PI/2);
            b2.vx = vx2 * Math.cos(angle) + vy2 * Math.cos(angle + Math.PI/2);
            b2.vy = vx2 * Math.sin(angle) + vy2 * Math.sin(angle + Math.PI/2);
            // Separate balls
            let overlap = b1.radius + b2.radius - dist;
            let sepX = overlap * Math.cos(angle) / 2;
            let sepY = overlap * Math.sin(angle) / 2;
            b1.x -= sepX;
            b1.y -= sepY;
            b2.x += sepX;
            b2.y += sepY;
        }
    }
    // Create balls
    let balls = [];
    function createBalls() {
        balls = [];
        width = canvas.width;
        height = canvas.height;
        for (let i = 0; i < BALL_COUNT; i++) {
            let tries = 0;
            let newBall;
            do {
                newBall = new Ball(randomPos(width), randomPos(height), randomVel(), randomVel());
                tries++;
            } while (balls.some(b => Math.hypot(b.x - newBall.x, b.y - newBall.y) < 2 * BALL_RADIUS) && tries < 100);
            balls.push(newBall);
        }
    }
    createBalls();
    window.addEventListener('resize', createBalls);
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < balls.length; i++) {
            balls[i].move();
        }
        // Collisions
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                collide(balls[i], balls[j]);
            }
        }
        for (let i = 0; i < balls.length; i++) {
            balls[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
;