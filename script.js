window.addEventListener('DOMContentLoaded', () => {

        /*Skin tones*/
        const people = ['🧑‍🦼', '🧑🏻‍🦼', '🧑🏼‍🦼', '🧑🏽‍🦼', '🧑🏾‍🦼', '🧑🏿‍🦼']
        /*Icons*/
        const icons = ['tone1', 'tone2', 'tone3', 'tone4', 'tone5', 'tone6',]

        /*queries*/
        const iconlink = document.querySelector('#icon')
        const person = document.querySelector('.person')
        const title = document.querySelector('title')


        /*Set title to loopcount if it exists*/
        if (localStorage.loopcount) {
            title.innerHTML = localStorage.loopcount;
            changeSpeed()
        } else {
            localStorage.loopcount = 0;
        }

        /*Set title to loopcount*/
        title.innerHTML = "Loops: " + localStorage.loopcount;


        /*Every time it loops*/
        person.addEventListener('webkitAnimationIteration', loopHandeler); /*webkit*/
        person.addEventListener('animationiteration', loopHandeler); /*chad browsers*/


        function loopHandeler() {
            /*Reset newpeople to people & newicons to icons*/
            let newpeople = [...people];
            let newicons = [...icons];

            /*Pick random color other than current color*/
            for (let i = 0; i < people.length; i++) {
                if (people[i] === person.innerHTML) {
                    newpeople.splice(i, 1);
                    newicons.splice(i, 1);
                }
            }

            /*Random key*/
            let randomperson = Math.floor(Math.random() * newpeople.length);

            /*Set title and emoji skin color*/
            person.innerHTML = newpeople[randomperson];

            /*Set favicon skin color*/
            iconlink.setAttribute('href', 'icons/' + newicons[randomperson] + '.png')

            /*Save loopcount to localstorage*/
            localStorage.loopcount = Number(localStorage.loopcount) + 1;

            /*Update title with loop*/
            title.innerHTML = "Loops: " + localStorage.loopcount;

            /*Update the speed*/
            changeSpeed()


        }


        function changeSpeed() {
            let speed = 15 - 0.03 * Number(localStorage.loopcount);
            /*If number is not greater than 0*/
            if (Math.sign(speed) !== 1) {
                speed = 0.1
            }
            person.setAttribute('style', 'animation: clean ' + speed + 's linear infinite')
        }

    }
)

/*Resets the loop*/
function Reset() {
    if(confirm("Are you sure?")){
        localStorage.loopcount = 0;
        location.reload()
    }
}
