function createWidget(pColor, sColor, hColor)   {
    let mainContainer, mainBtn, optionsContainer, btn1, btn2, btn3, btn4;   //maybe change to json
    let rgContainer, rgOuter, rgInner;

    mainContainer = document.createElement('div');
    mainContainer.id = 'accessibilityContainer';

    mainBtn = document.createElement('button');
    mainBtn.id = 'accessibilityBtn';
    mainBtn.textContent = 'Accessibility';

    optionsContainer = document.createElement('div');
    optionsContainer.id = 'accessibilityOptions';

    btn1 = document.createElement('button');
    btn1.id = 'dysBtn';
    btn1.textContent = 'Dyslexia Font';

    btn2 = document.createElement('button');
    btn2.id = 'lrgBtn';
    btn2.textContent = 'Larger Text';

    btn3 = document.createElement('button');
    btn3.id = 'rgBtn';
    btn3.textContent = 'Reading Guidet';

    btn4 = document.createElement('button');
    btn4.id = 'hLinkBtn';
    btn4.textContent = 'Highlight Links';

    mainContainer.style.cssText = `
    position: sticky;
    bottom: 2vw;
    margin-right: 2vw;
    display:-webkit-box; display:-ms-flexbox; display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse;
    -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end;
    `;
    optionsContainer.style.cssText = `
    display:-webkit-box; display:-ms-flexbox; display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse;
    `;
    let btns = [mainBtn, btn1, btn2, btn3, btn4];
    btns.forEach((btn) => {
        btn.style.cssText =
        `
        background-color: ${pColor};
        color: ${sColor};
        border:none;
        padding: 10px;
        margin: 0.5vh 0;
        font-weight: 600;
        font-size: 1.25em;
        border-radius: 10px;
        `;
    });
    
    optionsContainer.appendChild(btn1);
    optionsContainer.appendChild(btn2);
    optionsContainer.appendChild(btn3);
    optionsContainer.appendChild(btn4);
    mainContainer.appendChild(mainBtn);
    mainContainer.appendChild(optionsContainer);
    document.body.appendChild(mainContainer);
    
}
window.onload = function() { createWidget('#121','#CDC'); }
/*
// Events
// Dyslexia storing, setting, and toggling
if (localStorage.getItem('dys')==='y') { 
    $('body').addClass('dyslexia');
    $('.dyslexiaButton').addClass('currentPage');   // Adds Style
}
$('.dyslexiaButton').click(function() { 
    accesibilityOnClick('dys','dyslexia','body');
    $('.dyslexiaButton').toggleClass('currentPage');    // Since we add style if the user has dyslexia activated in storage on page open, we jsut need to toggle 
});
// Bigger Text storing, setting, and toggling
if (localStorage.getItem('bigT')==='y') { 
    $('body').addClass('biggerText');
    $('.biggerTextButton').addClass('currentPage');
}
$('.biggerTextButton').click(function() { 
    accesibilityOnClick('bigT','biggerText','body');
    $('.biggerTextButton').toggleClass('currentPage');
 });
// Reading Helper
if (!/Android|iPhone/i.test(navigator.userAgent)) { //check that user is not on mobile browser
    if (localStorage.getItem('rg')==='y') { 
        $('.readingGuide').addClass('rgDisplay');
        $('.readingGuideButton').addClass('currentPage');
    }
    $('.readingGuideButton').click(function() { 
        accesibilityOnClick('rg','rgDisplay','.readingGuide');
        $('.readingGuideButton').toggleClass('currentPage');
    });
}
if (localStorage.getItem('inv')==='y') { 
    $('body').addClass('invertColor'); 
}
$('.inverseButton').click(function() {
    accesibilityOnClick('inv','invertColor','body');
});
// Position for reading helper
$('body').on('mousemove', function(e) { 
    if (localStorage.getItem('rg')==='y') {                         // Check to save performance
        $('.readingGuide').css({'top': e.pageY-20,'left': e.pageX-270});
    }
});
// Hiding button if it is opened and use clicks away
$('body').children().not('.accessibility').click(function() { 
    $('.accessibility').addClass('accessibilityHidden'); 
});
// Toggling accesibility buttons showing/hiding
$('.accessButton').click(function() { 
    $('.accessibility').toggleClass('accessibilityHidden');
});

// Takes in a key, and className. Sets value to key, uses class to check and toggle (Also what element the class will be added to )
function accesibilityOnClick(key,c,target)  {
    $(target).toggleClass(c);
    let val = 'n';  // Skips need for an else statement, more efficient
    if ($(target).hasClass(c)) { val = 'y'; }
    localStorage.setItem(key,val);
}*/