let lightTheme = false;

let firstValue = 'Remove'
let secondValue = 'Icon'

const gridcontainer = document.querySelector('.gridcontainer');
const lightgridcontainer = document.querySelector('.lightgridcontainer');
const body = document.querySelector('body');
const extensionList = document.querySelector('.subb');
const firstSection = document.querySelector('.first-section');
const firstLeft = document.querySelector('.text-extension');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const inactive = document.querySelector('#inactive');
const sub = document.querySelector('.sub-second-section');
const lsub = document.querySelector('.lsub-second-section');
const lall = document.querySelector('#lall');
const lactive = document.querySelector('#lactive');
const linactive = document.querySelector('#linactive');
const first = document.querySelector('#first-left');
const lfirst = document.querySelector('#lfirst-left');
const moonImg = document.querySelector('.moon');
const sunImg = document.querySelector('.sun');
const navdarktext = document.querySelector('.combined-logo');
const navlighttext = document.querySelector('.combined-logolight');
const sunbtn = document.querySelector('#first-right');;
const moonbtn = document.querySelector('#first-rightlight');


function toggleTheme(){
    lightTheme=!lightTheme;
    if(lightTheme){
        //switch to light mode
        //Hide dark mode theme
        sunbtn.style.display='none';
        moonbtn.style.display='block';
        navdarktext.style.display='none';
        navlighttext.style.display='block';
        gridcontainer.style.display ='none';
        lightgridcontainer.style.display='grid'
        lightgridcontainer.style.gridTemplateColumns='260px 260px 260px';
        lightgridcontainer.style.gridTemplateRows='auto auto auto auto';
        lightgridcontainer.style.gridColumnGap='15px' ;
        lightgridcontainer.style.marginLeft='90px';
        lightgridcontainer.style.gridRowgGap='10px';
/*         firstLeft.style.color='red'; */
        lightThemee();
        lsub.style.display='flex';
        sub.style.display='none';
        first.style.display='none';
        lfirst.style.display='block';
        console.log("lightmode")

    }
    else{
        sunbtn.style.display='block';
        moonbtn.style.display='none';
        navdarktext.style.display='block';
        navlighttext.style.display='none';
        lightgridcontainer.style.display = 'none';
        gridcontainer.style.display='grid';
        gridcontainer.style.gridTemplateColumns='260px 260px 260px';
        gridcontainer.style.gridTemplateRows='auto auto auto auto';
        gridcontainer.style.gridColumnGap='15px' ;
        gridcontainer.style.marginLeft='90px';
        gridcontainer.style.gridRowgGap='10px';
        darkTheme();
        lsub.style.display='none';
        sub.style.display='flex';
        first.style.display='block';
        lfirst.style.display='none';
        console.log("darkmode")
    }
}

function lightThemee(){
    body.style.backgroundImage=`linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`;
    extensionList.style.color=`hsl(227, 75%, 14%)`;
    firstSection.style.backgroundColor='white';
}

function darkTheme(){
    body.style.backgroundImage=`linear-gradient(180deg, #040918 0%, #091540 100%)`;
    firstSection.style.backgroundColor=`hsl(225, 23%, 24%)`;
     firstSection.style.backgroundColor=`hsl(225, 23%, 24%)`;
     extensionList.style.color='white';

}



sunbtn.addEventListener("click",toggleTheme);
moonbtn.addEventListener("click",toggleTheme);

let allComponent =() =>{
    all.style.backgroundColor=`hsl(3, 86%, 64%)`;
    active.style.backgroundColor=`hsl(225, 23%, 24%)`;
    inactive.style.backgroundColor=`hsl(225, 23%, 24%)`;

    all.style.color=`hsl(225, 23%, 24%)`;
    active.style.color='white';
    inactive.style.color='white';

    lall.style.backgroundColor=`hsl(3, 86%, 64%)`;
    lactive.style.backgroundColor='white';
    linactive.style.backgroundColor='white';

    
    lall.style.color='white'
    lactive.style.color=`hsl(225, 23%, 24%)`;
    linactive.style.color=`hsl(225, 23%, 24%)`;

  /*   moonbtn.style.display = 'none'; */
    /* lightgridcontainer.style.display='none'; */
    let content =``;
    let lightcontent = ``;
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item=>{
            content+=`
            <div class='container'>
                <div class='devlens'>
                    <div id="image"><img src="${'',item.logo}"></div>
                    <div id="text">
                        <p id="first-layer">${item.name}</p>
                        <p id="second-layer">${item.description}</p>
                    </div>
                </div>
                <div class='cardbottom'>
                    <button id="firstbtn">${firstValue}</button>
                    ${item.isActive?`
                    <div id="secondbtnActive">
                        <div id="makecustomm"></div>
                    </div>`
                        : `<div id="secondbtnInactive">
                        <div id="makecustommm"></div>
                    </div>`
                    } 
                </div> 
             </div>                    
            `;
            lightcontent+=`
            <div class='kontainer'>
                <div class='devlens'>
                    <div id="image"><img src="${'',item.logo}"></div>
                    <div id="text">
                        <p id="lfirst-layer">${item.name}</p>
                        <p id="lsecond-layer">${item.description}</p>
                    </div>
                </div>
                <div class='cardbottom'>
                    <button id="lfirstbtn">${firstValue}</button>
                    ${item.isActive?`
                    <div id="secondbtnActive">
                        <div id="makecustomm"></div>
                    </div>`
                        : `<div id="secondbtnInactive">
                        <div id="makecustommm"></div>
                    </div>`
                    } 
                </div> 
             </div>   
            `;
        });
        gridcontainer.innerHTML = content;
        lightgridcontainer.innerHTML = lightcontent;
    });
}

let activeComponent =()=>{
    all.style.backgroundColor=`hsl(225, 23%, 24%)`;
    active.style.backgroundColor=`hsl(3, 86%, 64%)`;
    inactive.style.backgroundColor=`hsl(225, 23%, 24%)`;

    all.style.color='white';
    active.style.color=`hsl(225, 23%, 24%)`;
    inactive.style.color='white';

    lall.style.backgroundColor='white';
    lactive.style.backgroundColor=`hsl(3, 86%, 64%)`;
    linactive.style.backgroundColor='white';

    
    lall.style.color=`hsl(225, 23%, 24%)`;
    lactive.style.color='white';
    linactive.style.color=`hsl(225, 23%, 24%)`;
    let content =``;
    let lightcontent = ``;
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item=>{
            if(item.isActive){
                   content+=`
                   <div class='container'>
                    <div class='devlens'>
                        <div id="image"><img src="${'',item.logo}"></div>
                        <div id="text">
                            <p id="first-layer">${item.name}</p>
                            <p id="second-layer">${item.description}</p>
                        </div>
                    </div>
                    <div class='cardbottom'>
                        <button id="firstbtn">${firstValue}</button>
                        <button id="secondbtnActive">o
                            <div id="makecustomm"></div>
                        </button>
                    </div> 
                </div>
                   `;
                   lightcontent+=`
                   <div class='kontainer'>
                    <div class='devlens'>
                        <div id="image"><img src="${'',item.logo}"></div>
                        <div id="text">
                            <p id="lfirst-layer">${item.name}</p>
                            <p id="lsecond-layer">${item.description}</p>
                        </div>
                    </div>
                    <div class='cardbottom'>
                        <button id="lfirstbtn">${firstValue}</button>
                        <button id="secondbtnActive">o
                            <div id="makecustomm"></div>
                        </button>
                    </div> 
                </div>
                   `;
            }
        });
        gridcontainer.innerHTML = content;
        lightgridcontainer.innerHTML = lightcontent;
        console.log("active");
    })
}

let inactiveComponent =()=>{
    all.style.backgroundColor=`hsl(225, 23%, 24%)`;
    active.style.backgroundColor=`hsl(225, 23%, 24%)`;
    inactive.style.backgroundColor=`hsl(3, 86%, 64%)`;

    all.style.color='white';
    active.style.color='white';
    inactive.style.color=`hsl(225, 23%, 24%)`;

    lall.style.backgroundColor='white';
    lactive.style.backgroundColor='white';
    linactive.style.backgroundColor=`hsl(3, 86%, 64%)`;

    
    lall.style.color=`hsl(225, 23%, 24%)`;
    lactive.style.color=`hsl(225, 23%, 24%)`;
    linactive.style.color='white';
    
    let content = ``
    let lightcontent =``
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item=>{
            if(!item.isActive){
                content+=`
                   <div class='container'>
                    <div class='devlens'>
                        <div id="image"><img src="${'',item.logo}"></div>
                        <div id="text">
                            <p id="first-layer">${item.name}</p>
                            <p id="second-layer">${item.description}</p>
                        </div>
                    </div>
                    <div class='cardbottom'>
                        <button id="firstbtn">${firstValue}</button>
                        <div id="secondbtnInactive">
                            <div id="makecustommm"></div>
                        </div>
                    </div> 
                </div>
                   `;
                   lightcontent+=`
                   <div class='kontainer'>
                    <div class='devlens'>
                        <div id="image"><img src="${'',item.logo}"></div>
                        <div id="text">
                            <p id="lfirst-layer">${item.name}</p>
                            <p id="lsecond-layer">${item.description}</p>
                        </div>
                    </div>
                    <div class='cardbottom'>
                        <button id="lfirstbtn">${firstValue}</button>
                        <div id="secondbtnInactive">
                            <div id="makecustommm"></div>
                        </div>
                    </div> 
                </div>
                   `;

            }
            gridcontainer.innerHTML = content;
            lightgridcontainer.innerHTML = lightcontent;
        })
    })

}

window.onload = allComponent;
all.addEventListener("click",allComponent);
active.addEventListener("click",activeComponent);
inactive.addEventListener("click",inactiveComponent);

lall.addEventListener("click",allComponent);
lactive.addEventListener("click",activeComponent);
linactive.addEventListener("click",inactiveComponent);

