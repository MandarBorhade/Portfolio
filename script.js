

// project details
const Projects = [
    {
        title:'Multicolumn layout',
        liveUrl:'https://mandarborhade.github.io/four-card-feature-section-master-solution/',
        preview: 'assets/multicolumn.svg'
    },
    {
        title:'Dashboard',
        liveUrl:'https://mandarborhade.github.io/time-tracking-dashboard/',
        preview:'assets/dashboard.svg'
    },
    {
        title:'Huddle',
        liveUrl:'https://mandarborhade.github.io/huddle-landing-page/',
        preview:'assets/huddle.svg'
    },
    {
        title: 'Testimonials',
        liveUrl:'https://mandarborhade.github.io/testimonials-grid-section/',
        preview:'assets/testimonials.svg'
    },
    {
        title: '3 column layout',
        liveUrl:'https://mandarborhade.github.io/3-column-card-solution/' ,
        preview:'assets/3-column.svg'
    },
    {
        title:'Results summary',
        liveUrl:'https://mandarborhade.github.io/results-component-solution/',
        preview: 'assets/results.svg'
    },
    {
        title: 'QR code',
        liveUrl:'https://mandarborhade.github.io/frontend-mentor-qr-component-challenge/',
        preview:'assets/qr-code.svg'
    }
]


const countLabel = document.querySelector('.count');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const resume = document.querySelector('#resume');

const linkedinUrl = 'https://www.linkedin.com/in/mandar-borhade/';
const githubUrl = 'https://github.com/MandarBorhade';
const resumeUrl = 'https://drive.google.com/file/d/1uDJw6DutRRtdS-w8QA54aDcGTpN30-pv/view?usp=share_link';

linkedin.addEventListener('click' , () => {
    window.open(linkedinUrl);
})

github.addEventListener('click' , () => {
    window.open(githubUrl);
})

resume.addEventListener('click' , () => {
    window.open(resumeUrl);
})

//displaying project count
countLabel.textContent = Projects.length


//creating cards
Projects.map((project) => {
    const projectGallery = document.querySelector('.project-gallery');
    const cardElement = document.createElement('DIV');
    const projectCtaElement = document.createElement('DIV');
    const cardTitleElement = document.createElement('P');
    const rightArrowIconElement = document.createElement('IMG');
    const projectPreviewElement = document.createElement('DIV');


    projectGallery.appendChild(cardElement);
    cardElement.className = 'card';
    
    cardElement.appendChild(projectCtaElement);
    projectCtaElement.className = 'project-cta';

    projectCtaElement.appendChild(cardTitleElement);
    cardTitleElement.textContent = project.title;

    projectCtaElement.appendChild(rightArrowIconElement);
    rightArrowIconElement.src = 'assets/right-arrow-dark-bg.svg';

    cardElement.appendChild(projectPreviewElement);
    projectPreviewElement.className = 'project-preview';
    projectPreviewElement.setAttribute('style' , `background: url(${project.preview}) no-repeat center center / contain;`)

    rightArrowIconElement.addEventListener('click' , () => {
        window.open(project.liveUrl);
    })
})


