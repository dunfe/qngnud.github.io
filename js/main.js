//home content
let home = new Vue({
    el: '#home',
    data: {
        title: 'hi, i\'m diện vô',
        subtitle: 'a software engineering with design love'
    }
});

let about = new Vue({
    el: '#about',
    data: {
        title: 'About',
        content: 'I am currently a student at FPT University with a great ' +
            'interest in different forms of art, such as photography, ' +
            'the traditional instruments, and special is programming'
    }
});

let caseStudy = new Vue({
    el: '#caseStudy',
    data: {
        title: 'case study',
        description: 'there is a list of my personal projects.\n' +
            '                    all of them just simple, small but "practice makes perfect"',
    }
});

let caseList = new Vue({
    el: '#caseList',
    data: {
        cases: [
            {
                id: 1,
                image: 'assert/project/project-vayne.png',
                name: 'Vayne Portfolio',
                description: 'I love the character Vayne in League of Legend, so the first Portfolio I made about her.',
                link: 'https://codepen.io/dung251997/full/POmyLK'
            },
            {
                id: 2,
                image: 'assert/project/project-noface.png',
                name: 'A story of No Face',
                description: 'No Face is another favorite character of mine. So, my Bootstrap practice is make a story teller with No Face story (actually it is me)',
                link : 'https://codepen.io/dung251997/full/KyaXxL'
            },
            {
                id: 3,
                image: 'assert/project/project-weather.png',
                name: 'Weather App',
                description: 'A simple weather shower made by javascript and API of ffc',
                link: 'https://codepen.io/dung251997/pen/qVgyOx'
            },
            {
                id: 4,
                image: 'assert/project/project-wikipedia.png',
                name: 'Wikipedia',
                description: 'A simple wikipedia show random article with user input keyword',
                link: 'https://codepen.io/dung251997/full/dZrJxG'
            },
        ]
    }
});

let contact = new Vue({
    el: '#contact',
    data: {
        email: 'qngndu@gmail.com',
        facebook: 'http://fb.com/dienvostudio',
        instagram: 'http://www.instagram.com/dung_nq',
        linkedin : 'http://www.linkedin.com/in/dung-nguyen-a23833198/'
    }
});
