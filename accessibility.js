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
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    `;
    optionsContainer.style.cssText = `
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
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
    document.querySelector('#accessibilityWidget').appendChild(mainContainer);
    
}
createWidget('#121','#CDC');
// Events

/*HTML
<div id='accessibilityContainer' class='accessibilityHidden'>    maybe just do hide on options
    <button id='accessibilityBtn'><img src='images\accessibility.svg' alt='Accessibility Options Button'></button>
    <div id='accesibilityOptions'>
        <button id='dysBtn'>Dyslexia Font</button>
        <button id='bigBtn'>Bigger Text</button>
        <button id='rgBtn'>Reading Guide</button>
    </div>
</div>
<div id='readingGuide'>
    <div id='readingGuideTriangleOuter'></div>
    <div id='readingGuideTriangleInner'></div>
</div>*/