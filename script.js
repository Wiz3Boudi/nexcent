document.addEventListener('DOMContentLoaded', function () {
      function createElements(types, options) {
            const element = document.createElement(types);
            const {
                  text, html, id, classes = [], styles = {}, attributes = [], parent, events = {}, children = [], url,
                  type, src,
            } = options;

            if (id) element.id = options.id;

            if (classes.length > 0) {
                  element.classList.add(classes);
            }
            if (type) element.type = options.type;

            if (html) element.innerHtml = options.html;

            if (url) element.href = options.url;

            if (text) element.textContent = options.text;
            if (src) element.scr = options.src;

            Object.assign(element.style, styles);

            Object.entries(attributes).forEach(([key, value]) => {
                  element.setAttribute(key, value);
            })
            Object.entries(events).forEach(([events, handler]) => {
                  element.addEventLister(events, handler);
            })

            children.forEach(child => {
                  if (child === 'string') {
                        element.appendChild(document.createTextNode(child))
                  } else {
                        element.appendChild(child);
                  }
            });

            if (parent) {
                  const parentElement = typeof parent === 'string' ?
                        document.querySelector(parent) : parent;
                  parentElement.appendChild(element);
            }

            // console.log(element)

            return element;
      };
      // let styleX;
      createElements('nav', {
            id: 'divBar',
            classes: ['nav-bar'],
            parent: document.querySelector('body'),
            styles: {
                  display: 'grid',
                  gridTemplateColumns: '40% 30% 30%',
                  justifyItems: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  height: '90px',
            }
      })
      // get nav 
      const divBar = document.getElementById('divBar');
      // console.log(divBar)

      // creating divs
      for (let index = 0; index < 3; index++) {
            const contianer = document.createElement('div');
            contianer.id = `contianer-${index + 1}`;
            contianer.className = 'contianer';
            // contianer.textContent = `contianer-${index + 1}`
            divBar.appendChild(contianer)
      }

      const contianers = document.querySelectorAll('.contianer');
      const mm = contianers[1].classList.add('gaps')
      // console.log(mm)

      contianers.forEach(function (item, index) {
            const allUnorderedList = document.createElement('ul');
            allUnorderedList.className = 'un-order';
            allUnorderedList.id = `unOlrdered-${index + 1}`
            allUnorderedList.classList.add('stylish')
            item.appendChild(allUnorderedList);
      })

      // function for nav li 
      function eightLi() {
            const allUnorderedLists = document.querySelectorAll('.un-order');
            if (allUnorderedLists.length === 3) {
                  for (let i = 0; i < 8; i++) {
                        const list = document.createElement('li')
                        list.className = 'list';
                        list.id = `list-${i + 1}`;
                        list.classList.add('listes')
                        if (i < 2) {
                              contianers[0].querySelector('ul').appendChild(list);
                        } else if (i < 7) {
                              contianers[1].querySelector('ul').appendChild(list);
                        } else {
                              contianers[2].querySelector('ul').appendChild(list);
                        };
                  };
            };
      };
      eightLi();

      // create nav a
      function navLink() {
            const linkData = [
                  'Nexcent', 'Home', 'Features', 'Community', 'Blog', 'Pricing', 'Register Now →'
            ]

            let links = [];

            linkData.forEach(function (item, index) {
                  const link = document.createElement('a');
                  link.className = 'link';
                  link.href = `#${item}`;
                  link.id = `link-${index + 2}`;
                  links.push(link);
                  link.textContent = item
                  if (index > 0 && index < 6) {
                        link.className = 'link stylish hover';
                  }
            })

            // create the icon 
            const icon = document.createElement('img');
            icon.className = 'icon';
            icon.src = 'data/logo.png'
            icon.id = 'icon';
            icon.style.width = '45px';
            // icon.style.position = 'relative';
            icon.style.left = '15px';
            icon.addEventListener('mouseover', e => {
                  icon.style.cursor = 'pointer'
            })


            if (contianers.length === 3) {
                  const firstContainer = contianers[0].querySelectorAll('ul')[0].querySelectorAll('li');
                  if (firstContainer.length === 2) {
                        firstContainer[0].appendChild(icon);
                        firstContainer[1].appendChild(links[0]);
                        // firstContainer[1][0].style.fontSize ='2rem'
                  }
                  contianers[0].querySelectorAll('ul')[0].addEventListener('click', () => {
                        window.location.reload();
                  })
                  contianers[0].querySelectorAll('ul')[0].style.position = 'relative';
                  contianers[0].querySelectorAll('ul')[0].style.bottom = '10px';

                  const secondContainer = contianers[1].querySelectorAll('ul')[0].querySelectorAll('li');

                  if (secondContainer.length === 5) {
                        for (let i = 0; i < secondContainer.length; i++) {
                              secondContainer[i].appendChild(links[i + 1])
                        }
                  }

                  const thirdContainer = contianers[2].querySelectorAll('ul')[0].querySelectorAll('li');
                  if (thirdContainer.length === 1) {
                        thirdContainer[0].appendChild(links[6]);
                        thirdContainer[0].classList.add('register')
                  };
                  const registerHover = thirdContainer[0].querySelector('a');
                  registerHover.href = '#register';
                  registerHover.classList.add('register-boxer');

                  registerHover.addEventListener('mouseover', () => {
                        thirdContainer[0].classList.add('register-box')
                  });
            };

      }
      navLink();

      // create main 
      createElements('main', {
            id: 'main',
            classes: 'main',
            parent: document.body,
      });
      createElements('section', {
            id: 'slide',
            classes: 'slid',
            parent: main,
      });
      createElements('div', {
            id: 'sideShow1',
            classes: 'slideShow',
            parent: slide,
      });
      createElements('div', {
            id: 'slideShow2',
            classes: 'slideShow',
            parent: slide,
      });
      createElements('div', {
            id: 'slideShow3',
            classes: 'slideShow',
            parent: slide,
      });
      const contianersData = [
            'Lessons and insights', 'from 8 years', 'Where to grow your business as a photographer:site or social media?',
            'Register', 'data/slide-1.png', 'Dods'
      ]

      const slideShow = document.querySelectorAll('.slideShow');
      slideShow.forEach(function (item, index) {
            item.classList.add('center')
      })
      // console.log(slideShow);

      function slideElement() {

            for (let i = 0; i < contianersData.length; i++) {
                  const sildeContainers = document.createElement('div');
                  sildeContainers.id = `sildeContainers-${i + 1}`;
                  sildeContainers.className = 'sildeContainers';
                  document.getElementById('slide').appendChild(sildeContainers);

            }
            if (slideShow.length === 3) {
                  const sildeContainers = document.querySelectorAll('.sildeContainers');
                  for (let i = 0; i < 4; i++) {
                        slideShow[0].appendChild(sildeContainers[i])
                  }
                  slideShow[1].appendChild(sildeContainers[4]);
                  slideShow[2].appendChild(sildeContainers[5]);
            }
      }
      slideElement();

      createElements('h1', {
            text: contianersData[0],
            parent: document.querySelectorAll('.sildeContainers')[0],
            styles: {
                  fontSize: '3.5rem',
                  color: '#4D4D4D',
                  marginBottom: '-25px',
            },
      })
      createElements('h2', {
            text: contianersData[1],
            styles: {
                  color: '#66BB69',
                  fontSize: '3.1rem',
                  marginBottom: '0',
            },
            parent: document.querySelectorAll('.sildeContainers')[1]
      })
      createElements('p', {
            text: contianersData[2],
            parent: document.querySelectorAll('.sildeContainers')[2],
            // styles:{
            //       fontSize: '2rem',
            // }
      })
      createElements('a', {
            text: contianersData[3],
            url: '#register',
            parent: document.querySelectorAll('.sildeContainers')[3],
            styles: {
                  color: 'white',
            },
            classes: ['registertion']
      })

      const sildeContainers = document.getElementById('sildeContainers-5');
      const slideImgId = document.createElement('img');
      slideImgId.src = contianersData[4];
      slideImgId.style.width = '500px'
      // slideImgId.style.height = '600px'
      sildeContainers.appendChild(slideImgId);

      const sildeContainer6 = document.getElementById('sildeContainers-6');
      sildeContainer6.classList.add('dots-container')
      function dots() {
            for (let i = 0; i < 3; i++) {
                  const spanDot = document.createElement('div');
                  sildeContainer6.appendChild(spanDot);
                  spanDot.classList.add('dot')
            }
      }; dots();

      const out = contianers[0].querySelectorAll('ul')[0].classList.add('nexcent');
      // console.log(out) // do not delete it its important 

      // create 3 section for the rest of site
      const sectionsData = [
            'section-one', 'section-tow', 'section-three', 'section-four'
      ];
      const mainId = document.getElementById('main'); // the content container

      sectionsData.forEach(function (item, index) {
            const groupOfSections = document.createElement('section');
            groupOfSections.className = 'groupOfSections';
            groupOfSections.id = item;
            mainId.appendChild(groupOfSections);
      })
      const gettingGroupOfSections = document.querySelectorAll('.groupOfSections'); // getting the 3 sections 
      // console.log(gettingGroupOfSections);

      // create 5 divs for the first section 
      for (let div = 0; div < 5; div++) {
            const divsForFristSection = document.createElement('div');
            divsForFristSection.className = 'divsForFristSection';
            divsForFristSection.id = `divsForFristSection-${div + 1}`;
            gettingGroupOfSections[0].appendChild(divsForFristSection);
      }

      // create nested div for the first section part tow 
      createElements('div', {
            parent: gettingGroupOfSections[0].querySelectorAll('div')[0],
            classes: 'nested-div-frist-section-part-one',
            id: 'nestedDivSirstEsctionPartOne',
      })

      // create heading for the first section
      createElements('h3', {
            text: 'Our Clients',
            parent: document.getElementById('nestedDivSirstEsctionPartOne'),
            styles: {
                  fontSize: '2rem',
            },
            classes: 'headingFirstSection',
            id: 'headingFirstSection',
      })

      // create paragraph under the h3 for the first section
      createElements('p', {
            text: 'We have been working with some Fortune 500+ clients',
            parent: document.getElementById('nestedDivSirstEsctionPartOne'),
            styles: {
                  // fontSize: '2rem',
            },
            classes: 'paragraphFirstSection',
            id: 'paragraphFirstSection',
      })

      // create div for the first section for the icon 
      createElements('div', {
            parent: gettingGroupOfSections[0].querySelectorAll('div')[0],
            classes: 'paragraphFirstSection-icon-div',
            id: 'paragraphFirstSection-icon-div',             //paragraphFirstSection-icon-div
      })

      // create icons for the first section part one 
      const firstSectionIconData = [
            'first-section-icons/icon_1_64x64.png',
            'first-section-icons/icon_2_64x64.png',
            'first-section-icons/icon_3_64x64.png',
            'first-section-icons/icon_4_64x64.png',
            'first-section-icons/icon_5_64x64.png',
            'first-section-icons/icon_6_64x64.png',
            'first-section-icons/icon_7_64x64.png',
      ]
      firstSectionIconData.map(function (icon, index) {
            const firstSectionIcons = document.createElement('img');
            firstSectionIcons.src = icon;
            firstSectionIcons.className = icon;
            firstSectionIcons.id = `${icon}-${index + 1}`;
            firstSectionIcons.style.width = '100px'
            document.getElementById('paragraphFirstSection-icon-div').appendChild(firstSectionIcons);
      })

      // getting 4 nested divs for section one part tow
      const nestedDivSirstEsctionPartTowPartOne = document.querySelectorAll('.nestedDivSirstEsctionPartTowPartOne');

      // creating
      for (let i = 0; i < 2; i++) {
            const data = [
                  'Manage your entire community ',
                  'in a single system',
            ]
            createElements('h2', {
                  text: data[i],
                  parent: document.getElementById('divsForFristSection-2'),
                  classes: 'h2-for-section-one-part-tow',
                  id: 'h2ForSectionOnePartTow' + (i + 1),             //h2ForSectionOnePartTow
            });
      }

      // parageaph for section one part tow
      createElements('p', {
            text: 'Who is Nextcent suitable for?',
            parent: document.getElementById('divsForFristSection-2'),
            styles: {
                  // fontSize: '2rem',
            },
            classes: 'paragraphFirstSectionPartTow',
            id: 'paragraphFirstSectionPartTow',
      })

      // create 3 divs for section one part 3 //cards 
      const divsForFristSection = document.querySelectorAll('.divsForFristSection');
      // console.log(divsForFristSection)

      for (let i = 0; i < 3; i++) {
            const cardsSectionOnePartTow = document.createElement('div');
            cardsSectionOnePartTow.className = 'cardsSectionOnePartTow';
            cardsSectionOnePartTow.id = `cardsSectionOnePartTow-${i + 1}`;
            divsForFristSection[2].appendChild(cardsSectionOnePartTow);
      }

      // create cards 
      const cardsData = {
            imgsSrc: {
                  size: '100px',
            },
            innerPragraph: {
                  inner: 'Our membership management software provides full automation of membership renewals and payments',
            },
      }
      // geting container for cards 
      const cardsSectionOnePartTow = document.querySelectorAll('.cardsSectionOnePartTow');

      // create cards element
      function cardsElements() {
            const imgsSrc = [
                  'first-section-icons-part-three/img-1.png',
                  'first-section-icons-part-three/img-2.png',
                  'first-section-icons-part-three/img-3.png',
            ]

            const headData = [
                  'Membership Organisations',
                  'National Associations',
                  'Clubs And Groups',
            ]

            for (let i = 0; i < 3; i++) {
                  const img = document.createElement('img');
                  img.src = imgsSrc[i];
                  img.style.width = cardsData.imgsSrc.size;
                  const head = document.createElement('h3');
                  head.className = 'last-part-card-h3'
                  head.textContent = headData[i];
                  const p = document.createElement('p');
                  p.textContent = cardsData.innerPragraph.inner;
                  cardsSectionOnePartTow[i].appendChild(img);
                  cardsSectionOnePartTow[i].appendChild(head);
                  cardsSectionOnePartTow[i].appendChild(p);
            }
      }
      cardsElements()

      // working on section 1 part four 

      function learnMoreSection() {
            for (let i = 0; i < 2; i++) {
                  createElements('div', {
                        classes: 'learn-more',
                        id: 'learnMore' + (i + 1),
                        parent: document.getElementById('divsForFristSection-4'),
                  })
            }

            const learnMoreImg = document.createElement('img');
            learnMoreImg.src = 'first-section-icons-part-four/img.png';
            document.querySelectorAll('.divsForFristSection')[3].querySelectorAll('div')[0].appendChild(learnMoreImg);

            createElements('h2', {
                  text: 'The unseen of spending three years at Pixelgrade',
                  id: 'learnMoreHeading',
                  classes: 'learn-more-heading',
                  parent: document.querySelectorAll('.divsForFristSection')[3].querySelectorAll('div')[1],
            })
            createElements('p', {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
                  id: 'learnMorePragraph',
                  classes: 'learn-more-pragraph',
                  parent: document.querySelectorAll('.divsForFristSection')[3].querySelectorAll('div')[1],
            })
            createElements('a', {
                  text: 'Learn More',
                  id: 'learnMoreLink',
                  classes: 'learn-more-link',
                  url: '#learnmore',
                  parent: document.querySelectorAll('.divsForFristSection')[3].querySelectorAll('div')[1],
            })

            // last part of section 1
            for (let i = 0; i < 2; i++) {
                  const lastPartInSection = document.createElement('div');
                  lastPartInSection.id = 'lastPartInSection-1-' + (i + 1);
                  lastPartInSection.className = 'last-part-section-1';
                  document.querySelectorAll('.divsForFristSection')[divsForFristSection.length - 1].appendChild(lastPartInSection)
            }
            for (let i = 0; i < 4; i++) {
                  const insideContainer = document.createElement('div');
                  insideContainer.id = 'lastPartInSection-1-tiws' + (i + 1);
                  insideContainer.className = 'lastPartInSection-1-tiws';
                  document.getElementById('lastPartInSection-1-2').appendChild(insideContainer)
            }

            // all p for the last part 
            const sectionOneLastPartData = [
                  'Helping a local ',
                  'business reinvent itself',
                  'We reached here with our hard work and dedication',
                  '2,245,341',
                  'Members',
                  '828,867',
                  'Event Bookings',
                  '46,328',
                  'Clubs',
                  '1,926,436',
                  'Payments',
            ]
            const elements = document.querySelectorAll('.lastPartInSection-1-tiws');
            console.log(elements)

            // createElements('div',{
            //       parent:'',
            // })
            for (let i = 0; i < 4; i++) {
                  for (let j = 0; j < 2; j++) {
                        const towDivs = document.createElement('div');
                        towDivs.className = 'inside-div';
                        towDivs.id = 'insideDiv-' + j;
                        document.querySelectorAll('.lastPartInSection-1-tiws')[i].appendChild(towDivs)
                  }
            }
            for (let i = 0; i < 2; i++) {
                  const fCP = document.createElement('h2');
                  fCP.textContent = sectionOneLastPartData[i]
                  fCP.className = 'helping-Local'
                  fCP.id = 'helpingLocal' + (i + 1)
                  document.getElementById('lastPartInSection-1-1').appendChild(fCP);
            }
            const reDo = document.createElement('p');
            reDo.textContent = sectionOneLastPartData[2];
            document.getElementById('lastPartInSection-1-1').appendChild(reDo);

            for (let i = 0; i < 2; i++) {
                  const data = [
                        '2,245,341',
                        'Members',
                  ]
                  const fCP = document.createElement('p');
                  fCP.textContent = data[i]
                  document.querySelectorAll('.lastPartInSection-1-tiws')[0].querySelectorAll('div')[1].appendChild(fCP);
            }
            for (let i = 0; i < 2; i++) {
                  const data = [
                        '828,867',
                        'Event Bookings',
                  ]
                  const fCP = document.createElement('p');
                  fCP.textContent = data[i]
                  document.querySelectorAll('.lastPartInSection-1-tiws')[1].querySelectorAll('div')[1].appendChild(fCP);
            }
            for (let i = 0; i < 2; i++) {
                  const data = [
                        '46,328',
                        'Clubs',
                  ]
                  const fCP = document.createElement('p');
                  fCP.textContent = data[i]
                  document.querySelectorAll('.lastPartInSection-1-tiws')[2].querySelectorAll('div')[1].appendChild(fCP);
            }
            for (let i = 0; i < 2; i++) {
                  const data = [
                        '1,926,436',
                        'Payments',
                  ]
                  const fCP = document.createElement('p');
                  fCP.textContent = data[i]
                  document.querySelectorAll('.lastPartInSection-1-tiws')[3].querySelectorAll('div')[1].appendChild(fCP);
            }

            const newArray = [];
            const lastPartIcon = [
                  'first-section-icons-last-part/img.png',
                  'first-section-icons-last-part/img-1.png',
                  'first-section-icons-last-part/img-2.png',
                  'first-section-icons-last-part/img-3.png',
            ]
            lastPartIcon.map((function (img, index) {
                  const image = document.createElement('img');
                  image.src = img;
                  image.style.width = '50px'
                  newArray.push(image)
            }))
            document.getElementById('lastPartInSection-1-tiws1').querySelectorAll('div')[0].appendChild(newArray[0]);
            document.getElementById('lastPartInSection-1-tiws2').querySelectorAll('div')[0].appendChild(newArray[1]);
            document.getElementById('lastPartInSection-1-tiws3').querySelectorAll('div')[0].appendChild(newArray[2]);
            document.getElementById('lastPartInSection-1-tiws4').querySelectorAll('div')[0].appendChild(newArray[3]);
      }
      learnMoreSection();


      function sectionTow() {
            for (let i = 0; i < 2; i++) {
                  const thSecContainers = document.createElement('div');
                  thSecContainers.className = 'th-Sec-Containers';
                  thSecContainers.id = 'thSecContainers' + i;
                  document.getElementById('section-tow').appendChild(thSecContainers);
            }

            createElements('h3', {
                  text: 'How to design your site footer like we did',
                  classes: 'section-head',
                  id: 'sectionHead',
                  parent: document.querySelectorAll('.groupOfSections')[1].querySelectorAll('div')[1],
            })
            createElements('p', {
                  text: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida ',
                  classes: 'section-p',
                  id: 'sectionP',
                  parent: document.querySelectorAll('.groupOfSections')[1].querySelectorAll('div')[1],
            })
            createElements('a', {
                  text: 'Learn More',
                  url: '#learnmore',
                  classes: 'learn-more-section-tow',
                  id: 'learnmore',
                  styles: {
                        width: '120px',
                        height: '45px',
                        color: 'white',
                        backgroundColor: 'var(--color-primary-shade-3)',
                        border: '1px solid var(--color-primary-shade-3)',
                        textAlign: 'center',
                        alignContent: 'center',
                        borderRadius: '3px',
                  },
                  parent: document.querySelectorAll('.groupOfSections')[1].querySelectorAll('div')[1],
            })
            const section2img = document.createElement('img');
            section2img.src = 'second-section-img/img.png';
            document.querySelectorAll('.groupOfSections')[1].querySelectorAll('div')[0].appendChild(section2img)
      };
      sectionTow();

      function sectionThree() {
            const emptySrray = []
            for (let i = 0; i < 8; i++) {
                  const sectionThreeContainer = document.createElement('div');
                  emptySrray.push(sectionThreeContainer);
            }
            console.log(emptySrray);
            emptySrray[0].className = 'section-three-first-conatainer';
            emptySrray[0].id = 'sectionThreeFirstConatainer';
            emptySrray[1].className = 'section-three-second-conatainer';
            emptySrray[1].id = 'sectionThreeSecondConatainer';
            for (let j = 2; j < emptySrray.length; j++) {
                  emptySrray[j].className = 'section-three-second-conatainer-nestted-div';
                  emptySrray[j].id = 'sectionThreeSecondConatainerNestedDiv' + (j + 1);
            }
            for (let i = 0; i < 2; i++) {
                  document.querySelectorAll('.groupOfSections')[2].appendChild(emptySrray[i]);
            }
            for (let i = 2; i < emptySrray.length; i++) {
                  document.getElementById('sectionThreeSecondConatainer').appendChild(emptySrray[i]);
            }
            for (let i = 6; i < emptySrray.length; i++) {
                  document.getElementById('sectionThreeSecondConatainerNestedDiv6').appendChild(emptySrray[i]);
            }

            const section3Img = document.createElement('img');
            section3Img.src = 'third-section-img/img.png';
            document.querySelectorAll('.section-three-first-conatainer')[0].appendChild(section3Img)

            createElements('p', {
                  text: 'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.',
                  parent: document.querySelectorAll('.section-three-second-conatainer-nestted-div')[0],
            })
            createElements('h3', {
                  text: 'Tim Smith',
                  parent: document.querySelectorAll('.section-three-second-conatainer-nestted-div')[1],
            })
            createElements('p', {
                  text: 'British Dragon Boat Racing Association',
                  parent: document.querySelectorAll('.section-three-second-conatainer-nestted-div')[2],
            })

            const imgData = [
                  'third-section-img/icons/icon-1.png',
                  'third-section-img/icons/icon-3.png',
                  'third-section-img/icons/icon-4.png',
                  'third-section-img/icons/icon-5.png',
                  'third-section-img/icons/icon-6.png',
                  'third-section-img/icons/icon-7.png',
            ]
            imgData.forEach((item, index) => {
                  const sectionThreeImages = document.createElement('img');
                  sectionThreeImages.src = item;
                  sectionThreeImages.id = 'sectionThreeImages' + (index + 1);
                  sectionThreeImages.className = 'sectionThreeImages';
                  sectionThreeImages.style.cursor = 'pointer'
                  document.getElementById('sectionThreeSecondConatainerNestedDiv7').appendChild(sectionThreeImages);
            })
            createElements('a', {
                  text: 'Meet all customers  →',
                  url: 'MeetAllCustomers',
                  parent: document.getElementById('sectionThreeSecondConatainerNestedDiv8'),
            })
            createElements('footer', {
                  id: 'footer',
                  classes: 'footer',
                  parent: document.getElementById('main'),
            })

            const dives = [];
            function allDivs() {
                  for (let i = 0; i < 20; i++) {
                        const allDivsContaoners = document.createElement('div');
                        allDivsContaoners.id = 'allDivsContaoners' + (i + 1)
                        allDivsContaoners.className = 'allDivsContaoners';
                        dives.push(allDivsContaoners);
                  }
                  for (let i = 0; i < 2; i++) {
                        document.querySelectorAll('.groupOfSections')[3].appendChild(dives[i])
                  }
                  for (let i = 2; i < 5; i++) {
                        document.getElementById('allDivsContaoners2').appendChild(dives[i])
                        dives[i].className = 'card';
                  }
                  document.getElementById('allDivsContaoners3').appendChild(dives[5])
                  document.getElementById('allDivsContaoners3').appendChild(dives[6])
                  document.getElementById('allDivsContaoners4').appendChild(dives[7])
                  document.getElementById('allDivsContaoners4').appendChild(dives[8])
                  document.getElementById('allDivsContaoners5').appendChild(dives[9])
                  document.getElementById('allDivsContaoners5').appendChild(dives[10])
            }
            allDivs();


            function lastSection() {
                  createElements('h2', {
                        text: 'Caring is the new marketing',
                        parent: document.getElementById('allDivsContaoners1')
                  })
                  createElements('p', {
                        text: 'The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who s joining the community, read about how our community are increasing their membership income and lot s more ',
                        parent: document.getElementById('allDivsContaoners1')
                  })
                  const images = [
                        'data/extracted_image_1_2.png',
                        'data/extracted_image_1_4.png',
                        'data/extracted_image_1_3.png',
                  ]
                  const imgFolder = [];
                  images.forEach((item, index) => {
                        const img = document.createElement('img');
                        img.src = item
                        img.style.width = '350px'
                        img.style.borderRadius = '5px'
                        imgFolder.push(img)
                  })
                  document.getElementById('allDivsContaoners6').appendChild(imgFolder[0])
                  document.getElementById('allDivsContaoners8').appendChild(imgFolder[1])
                  document.getElementById('allDivsContaoners10').appendChild(imgFolder[2])

                  const pragraph = [];
                  const text = [
                        'Creating Streamlined Safeguarding Processes with OneRen',
                        'What are your safeguarding responsibilities and how can you manage them?',
                        'Revamping the Membership Model with Triathlon Australia',
                  ]
                  text.forEach((str, index) => {
                        const p = document.createElement('p');
                        p.textContent = str;
                        pragraph.push(p);
                  })
                  document.getElementById('allDivsContaoners7').appendChild(pragraph[0])
                  document.getElementById('allDivsContaoners9').appendChild(pragraph[1])
                  document.getElementById('allDivsContaoners11').appendChild(pragraph[2])
                  // links
                  const links = [];
                  for (let i = 0; i < 3; i++) {
                        const link = document.createElement('a');
                        link.textContent = 'Readmore →';
                        link.href = '#Readmore';
                        link.id = 'Readmore';
                        link.className = 'Readmore';
                        links.push(link);
                  }
                  document.getElementById('allDivsContaoners7').appendChild(links[0])
                  document.getElementById('allDivsContaoners9').appendChild(links[1])
                  document.getElementById('allDivsContaoners11').appendChild(links[2])
            }
            lastSection();
            // console.log(dives)
            // footer
            function footer() {
                  for (let i = 11; i < 13; i++) {
                        document.getElementById('footer').appendChild(dives[i]);
                  }
                  createElements('h1', {
                        text: 'Pellentesque suscipit fringilla libero eu.',
                        parent: document.getElementById('allDivsContaoners12')
                  })
                  createElements('a', {
                        text: 'Get a Demo →',
                        url: '#getdemo',
                        parent: document.getElementById('allDivsContaoners12')
                  })
                  for (let i = 13; i < 17; i++) {
                        document.getElementById('allDivsContaoners13').appendChild(dives[i]);
                  }
                  document.getElementById('allDivsContaoners14').appendChild(dives[18]);
                  document.getElementById('allDivsContaoners14').appendChild(dives[19]);
                  const heading = [];
                  const headingData = [
                        'Nexcent', 'Company', 'Support', 'Stay up to date'
                  ]
                  headingData.map((item, index) => {
                        const head = document.createElement('h3');
                        head.textContent = item;
                        heading.push(head);
                        console.log(head)
                        heading[0].className = 'nexcenth3'
                  })

                  document.getElementById('allDivsContaoners15').appendChild(heading[1]);
                  document.getElementById('allDivsContaoners16').appendChild(heading[2]);
                  document.getElementById('allDivsContaoners17').appendChild(heading[3]);

                  // links 
                  const footerLinkesData = [
                        'About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials',
                        'Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'
                  ];
                  const footerLinkesElements = [];
                  footerLinkesData.map((item, index) => {
                        const footerLinks = document.createElement('a');
                        footerLinks.textContent = item;
                        footerLinks.id = item.split('').filter((x) => x != ' ').join('') + 1;
                        footerLinks.href = `footer/#${item.split('').filter((x) => x != ' ').join('')}`;
                        footerLinks.className = 'footerLinks'
                        footerLinkesElements.push(footerLinks);
                  })
                  console.log(footerLinkesElements)

                  for (let i = 0; i < 5; i++) {
                        document.getElementById('allDivsContaoners15').appendChild(footerLinkesElements[i])
                  }
                  for (let i = 5; i < 10; i++) {
                        document.getElementById('allDivsContaoners16').appendChild(footerLinkesElements[i])
                  }
                  document.getElementById('allDivsContaoners14').appendChild(dives[17])
                  document.getElementById('allDivsContaoners14').appendChild(dives[18])

                  const input = document.createElement('input');
                  input.type = 'text'
                  input.placeholder = 'Your email address'
                  document.getElementById('allDivsContaoners17').appendChild(input);

                  const footerPragraph = ['Copyright © 2020 Landify UI Kit', 'All rights reserved']
                  footerPragraph.forEach((item, index) => {
                        const p = document.createElement('p');
                        p.textContent = item;
                        p.id = 'footerPragraph' + index;
                        p.className = 'footerPragraph';
                        document.getElementById('allDivsContaoners18').appendChild(p)
                  })
                  console.log(dives)
                  const footerImgData = [
                        'footer-social-media-icons/instagram (1).png',
                        'footer-social-media-icons/website.png',
                        'footer-social-media-icons/twitter.png',
                        'footer-social-media-icons/youtube (1).png',
                  ]
                  footerImgData.map((element, index) => {
                        const footerImages = document.createElement('img');
                        footerImages.src = element;
                        footerImages.style.width = '30px'
                        footerImages.style.cursor = 'pointer'
                        footerImages.className = 'footer-images';
                        footerImages.id = `footerImages-${index}`
                        document.getElementById('allDivsContaoners19').appendChild(footerImages)
                  })
                  const footerLogo = document.createElement('img');
                  footerLogo.src = 'footerLogo/Screenshot 2025-10-07 224030.png';
                  footerLogo.style.width = '50px';
                  footerLogo.id = 'footerLogo';
                  // footerLogo.style.borderRadius ='50%'
                  footerLogo.className = 'footerLogo'
                  document.getElementById('allDivsContaoners20').appendChild(footerLogo)
                  document.getElementById('allDivsContaoners20').appendChild(heading[0]);
            }
            footer();
      }
      sectionThree();
});

// css flile 
function style() {
      const styleOnJs = document.createElement('style');
      styleOnJs.textContent = `
      body{
            padding: 0;
            margin: 0;
            font-family: sans-serif; 
      }
      a{
            display: inline-block;
            text-decoration: none;
      }
      .listes{
            list-style: none;
      }
      .link{
            font-size: 1rem;
            transition: color 1s ease, transform 1s ease;
            color: #4D4D4D;
      }
      .hover:hover{
            color: #717171;
            transform: scale(1.1);
            transition: color 1s ease, transform 1s ease ;
      }
      .nexcent{
            display: flex;
            margin-bottom: 0;
      }
      .register{
            border: 1px solid #66BB69;
            background-color: #66BB69;
            border-radius: 5px;
            width: 180px;
            height: 45px;
            align-content: center;
            text-align: center;
            transition: background 1s ease;
      }
      .register-box:hover{
            background-color: #388E3B;
            transition: background 1s ease;
            cursor: pointer;
      }
      register:active{
            background-color: #103E13;
      }
      #link-2{
            font-size: 2rem;
            font-weight: bold;
      }
      .register-boxer{
            font-size: 1rem;
            color: #FFFFFF;
      }
      .registertion{
            border: 1px solid #66BB69;
            background-color: #66BB69;
            border-radius: 5px;
            width: 110px;
            height: 45px;
            align-content: center;
            justify-self: center;
            text-align: center;
            transition: background 1s ease;
      }
      #sildeContainers-4{
            padding-top: 1rem;
      }
      .registertion:hover{
            background-color: #388E3B;

            }
      .dots-container{
            display: none;
            flex-direction: row;
            gap: 2rem;
      }
      #contianer-3 {
            display: flex;
            justify-self: flex-start;
      }
      .slid {
            display: grid;
            grid-template-columns: 60% 40%;
            background-color: #F5F7FA;
      }
      .span-all {
            grid-column: span 2;
      }
      .center {
            display: flex;
            flex-direction: column;
            justify-self: center;
      }
      #unOlrdered-2{
            display: inline-flex;
            gap: 1rem;
      }
      #sideShow1{
            padding-top: 5rem;
      }
            :root {
      /* Primary & Variants */
      --color-primary: #28CB8B;
      --color-primary-shade-1: #43A046;
      --color-primary-shade-2: #388E3B;
      --color-primary-shade-3: #237D31;
      --color-primary-shade-4: #1B5E1F;
      --color-primary-shade-5: #103E13;
      --color-primary-tint-1: #66BB69;
      --color-primary-tint-2: #81C784;
      --color-primary-tint-3: #A5D6A7;
      --color-primary-tint-4: #C8E6C9;
      --color-primary-tint-5: #E8F5E9;

      /* Supporting / Semantic */
      --color-secondary: #263238;
      /* used also as 'Black' in file */
      --color-info: #2194F3;
      --color-warning: #FBC02D;
      --color-error: #E53835;
      --color-success: #2E7D31;

      /* Neutrals */
      --color-black: #263238;
      --color-dark-grey: #4D4D4D;
      --color-grey: #717171;
      --color-light-grey: #89939E;
      --color-grey-blue: #ABBED1;
      --color-silver: #F5F7FA;
      --color-white: #FFFFFF;

      /* Accessibility helpers */
      --text-on-primary: #FFFFFF;
      --text-on-secondary: #FFFFFF;
}

:root {
      --shadow-color: 171, 190, 209;
      --shadow-2px: 0 2px 4px rgba(var(--shadow-color), 0.60);
      --shadow-4px: 0 4px 10px rgba(var(--shadow-color), 0.40);
      --shadow-6px: 0 6px 18px rgba(var(--shadow-color), 0.30);
      --shadow-8px: 0 8px 20px rgba(var(--shadow-color), 0.40);
      --shadow-16px: 0 16px 40px rgba(var(--shadow-color), 0.30);
}

h1,
h2,
h3 {
      color: var(--color-dark-grey);
}

p {
      color: var(--color-light-grey);
      font-size: 0.9rem;
}

.headingFirstSection {
      margin-bottom: 0;
}

#section-one {
      display: flex;
      flex-direction: column;
      gap: 5rem;
}

#divsForFristSection-1 {
      margin-bottom: -50px;
      margin-top: -10px;
}

.divsForFristSection {
      justify-items: center;
      text-align: center;
}

.h2-for-section-one-part-tow {
      margin-bottom: -15px;
      font-size: 2rem;
      line-height: 1.5rem;
}

.paragraphFirstSectionPartTow {
      padding-top: 15px;
}

#divsForFristSection-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
}

#paragraphFirstSection-icon-div {
      display: flex;
      flex-direction: row;
      gap: 3rem;
      cursor: pointer;
}

.cardsSectionOnePartTow {
      width: 250px;
      padding: 1rem;
      box-shadow: var(--shadow-4px);
      transition: transform 1s ease, box-shadow 1s ease;
      cursor: pointer;
}

.cardsSectionOnePartTow:hover {
      box-shadow: var(--shadow-16px);
      transform: scale(1.01);
      transition: all 1s ease;
}

.last-part-card-h3 {
      width: 150px;
      height: 50px;
      justify-self: center;
      align-content: center;
      margin: 0;
      font-size: 1.5rem;
}

#divsForFristSection-4 {
      display: grid;
      grid-template-columns: 40% 60%;
      align-items: center;
      align-content: center;
      text-align: start;
}

#learnMore2 {
      width: 600px;
      height: 250px;
}

#learnMoreHeading {
      font-size: 2rem;
      width: 500px;
      height: 80px;
      margin-bottom: 0;
}

#learnMoreLink {
      border: var(--color-primary-shade-1) solid 1px;
      background-color: var(--color-primary-shade-1);
      color: white;
      width: 120px;
      height: 45px;
      border-radius: 3px;
      text-align: center;
      align-content: center;
}

#learnMoreLink:hover,
.learn-more-section-tow:hover {
      background-color: var(--color-primary-shade-3);
}

#divsForFristSection-5 {
      padding: 3rem 0;
      display: grid;
      grid-template-columns: 40% 60%;
      background-color: var(--color-silver);
}

#lastPartInSection-1-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
}

.lastPartInSection-1-tiws {
      display: flex;
      flex-direction: row;
      text-align: start;
}

.inside-div p:nth-of-type(1) {
      color: var(--color-dark-grey);
      font-size: 1.5rem;
      margin: 0.3rem auto;
      font-weight: bolder;
}

.inside-div p:nth-of-type(2) {
      font-size: 0.8rem;
      margin: 0 auto;
      font-weight: bold;
}

#lastPartInSection-1-1 {
      line-height: 0.8rem;
      text-align: start;
}

#lastPartInSection-1-1 p {
      color: var(--color-dark-grey);
}

#helpingLocal2 {
      color: var(--color-primary-shade-1);
}

#section-tow {
      padding-top: 2rem;
      display: grid;
      grid-template-columns: 40% 60%;
      align-items: center;
      justify-items: center;
}

.section-head {
      font-size: 2rem;
}

#thSecContainers1 {
      width: 550px;
}

#section-three {
      display: grid;
      grid-template-columns: 40% 60%;
      background-color: var(--color-silver);
      padding: 3rem 0;
      justify-items: center;
}

#sectionThreeSecondConatainerNestedDiv6 {
      display: flex;
      gap: 3rem;
      justify-items: center;
}

#sectionThreeSecondConatainerNestedDiv4 h3 {
      color: var(--color-primary-shade-2);
}

.section-three-second-conatainer-nestted-div a {
      background-color: var(--color-primary-shade-3);
      color: var(--text-on-primary);
      width: 200px;
      height: 50px;
      text-align: center;
      align-content: center;
}

#sectionThreeSecondConatainerNestedDiv7 {
      display: flex;
      align-items: center;
}

#sectionThreeSecondConatainerNestedDiv3 p {
      width: 600px;
}

#section-four {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 3rem;
}

#allDivsContaoners2 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
}

#allDivsContaoners1 p {
      width: 550px;
}

#allDivsContaoners7,
#allDivsContaoners9,
#allDivsContaoners11 {
      width: 250px;
      height: 120px;
      background-color: #F5F7FA;
      justify-self: center;
      padding: 1rem;
      border-radius: 5px;
      position: relative;
      bottom: 5rem;
      padding-bottom: 3rem;
      box-shadow: var(--shadow-8px);
}

.Readmore {
      color: var(--color-primary-shade-1);
      font-weight: bold;
}

#allDivsContaoners7 p,
#allDivsContaoners9 p,
#allDivsContaoners11 p {
      color: var(--color-dark-grey);
      font-size: 1.2rem;
}

.footer {
      display: flex;
      flex-direction: column;
      align-items: center;
}

#allDivsContaoners12 {
      display: flex;
      flex-direction: column;
      background-color: var(--color-silver);
      width: 100%;
      align-items: center;
      padding-bottom: 3rem;
}

#allDivsContaoners12 a {
      border: var(--color-primary-shade-1) solid 1px;
      background-color: var(--color-primary-shade-1);
      color: white;
      width: 150px;
      height: 45px;
      border-radius: 3px;
      text-align: center;
      align-content: center;
}
#allDivsContaoners12 h1{
      width: 500px;
      text-align: center;
      font-size: 3rem;
      color: var(--color-black);
}
#allDivsContaoners13{
      display: grid;
      grid-template-columns: 40% 15% 15% 30%;
      justify-items: center;
      background-color: var(--color-black);
      width: 100%;
      padding: 3rem 0;
}
#allDivsContaoners15, #allDivsContaoners16{
      display: flex;
      flex-direction: column;
      gap: 1rem;
}
.footerLinks{
      color: var(--color-silver);
      font-size: 0.9rem;
}
.footerLinks:hover{
      color: var(--color-light-grey);
}
.footerPragraph{
      color: var(--color-white);
}
input{
      color: var(--color-white);
      background-color: var(--color-dark-grey);
      width: 250px;
      height: 40px;
      outline: none;
      border: none;
      border-radius: 10px;
      text-align: center;
      font-size: 1rem;
}
#allDivsContaoners13 h3{
      color: var(--color-silver);
}
#allDivsContaoners20{
      display: flex;
      flex-direction: row;
      gap: 1rem;
}
#allDivsContaoners14{
      display: flex;
      flex-direction: column;
      gap: 1rem;
}
#allDivsContaoners19{
      display: flex;
      flex-direction: row;
      gap: 1rem;
}
::placeholder{
      color: var(--color-white);
}
`;
      document.head.appendChild(styleOnJs);
};
document.addEventListener('DOMContentLoaded', style);