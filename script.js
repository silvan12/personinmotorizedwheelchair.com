window.addEventListener('DOMContentLoaded', () => {
    const people = ['🧑‍🦼', '🧑🏻‍🦼', '🧑🏼‍🦼', '🧑🏽‍🦼', '🧑🏾‍🦼', '🧑🏿‍🦼']
    const icons = ['tone1','tone2','tone3','tone4','tone5','tone6',]
    const iconlink = document.querySelector('#icon')
    const person = document.querySelector('.🧑‍🦼')
    const title = document.querySelector('title')

    person.addEventListener('animationiteration', () => {
        let newpeople = [...people];
        let newicons = [...icons];
        for (let i = 0; i < people.length; i++) {
            if (people[i] === person.innerHTML) {
                newpeople.splice(i, 1);
                newicons.splice(i, 1);
            }
        }

        let randomperson = Math.floor(Math.random() * newpeople.length);
        person.innerHTML = newpeople[randomperson];
        title.innerHTML = newpeople[randomperson];

        iconlink.setAttribute('href','icons/'+newicons[randomperson]+'.png')
    });

});