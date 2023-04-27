
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
countLabel.textContent = Projects.length

Projects.map((project) => {
    const projectGallery = document.querySelector('.project-gallery');
    const cardElement = document.createElement('DIV');
    const projectCtaElement = document.createElement('DIV');
    const cardTitleElement = document.createElement('P');
    const rightArrowIconElement = document.createElement('IMG');
    const projectPreviewElement = document.createElement('DIV');
    // const projectMockup = document.createElement('IMG');

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
    // projectPreviewElement.appendChild(projectMockup);
    projectPreviewElement.setAttribute('style' , `background: url(${project.preview}) no-repeat center center / contain;`)

    rightArrowIconElement.addEventListener('click' , () => {
        window.open(project.liveUrl);
    })
})

// myProjects.map((item) => {
//     const cardWrapperElement = document.querySelector('.cards-wrapper');
//     const cardDiv = document.createElement('DIV');
//     const cardTitle = document.createElement('DIV');
//     const projectLabel = document.createElement('DIV');
//     const h1 = document.createElement('H1');
//     const a = document.createElement('A');
//     const sitePreview = document.createElement('DIV');

//     cardWrapperElement.appendChild(cardDiv);
//     cardDiv.className = 'card';
//     cardDiv.appendChild(cardTitle);
//     cardTitle.className = 'card-title';
//     cardTitle.appendChild(projectLabel);
//     projectLabel.className = 'project-label';
//     projectLabel.appendChild(h1);
//     h1.textContent = item.title;
//     projectLabel.appendChild(a);
//     a.textContent = 'Live Site';

//     a.addEventListener('click', () => {
//         window.open(item.liveUrl);
//     })

//     cardDiv.appendChild(sitePreview);
//     sitePreview.className = 'site-preview';
//     sitePreview.setAttribute('style', `background: url(${item.preview}) center center / cover;height: 100%;border-radius: 2.6rem;`)
// })













