window.addEventListener("DOMContentLoaded", function () {

    let objectives = document.createElement('ol');
    document.body.appendChild(objectives);



    // Example 1

    let exampleOne = document.createElement('li');
    objectives.appendChild(exampleOne);
    let niceButton = document.createElement('button');
    niceButton.className = 'button';
    niceButton.innerText = 'Hi';
    niceButton.addEventListener('click', function () {
        alert("Hope you're having a good day :)");
    })
    exampleOne.appendChild(niceButton);



    // Example 2

    let copycatForm = document.createElement('form');
    let copycatText = document.createElement('input');
    copycatText.type = 'text';
    let textButton = document.createElement('button');
    textButton.className = 'button';
    textButton.innerText = 'Copycat';
    copycatForm.appendChild(copycatText);
    copycatForm.appendChild(textButton);
    textButton.addEventListener('click', function () {
        alert(copycatText.value);
    })
    let exampleTwo = document.createElement('li');
    objectives.appendChild(exampleTwo);
    exampleTwo.appendChild(copycatForm);



    // Example 3

    let colorDiv = document.createElement('div');
    colorDiv.setAttribute('style', 'background-color:lightblue;height:5em;width:5em');
    let exampleThree = document.createElement('li');
    objectives.appendChild(exampleThree);
    exampleThree.appendChild(colorDiv);
    colorDiv.addEventListener('mouseover', function () {
        colorDiv.style.backgroundColor = 'crimson';
    })
    colorDiv.addEventListener('mouseout', function () {
        colorDiv.style.backgroundColor = 'lightblue';
    })



    // Example 4

    let exampleFour = document.createElement('li');
    objectives.appendChild(exampleFour);
    let colorText = document.createElement('p');
    colorText.innerText = 'Click me!';
    exampleFour.appendChild(colorText);
    colorText.addEventListener('click', function () {
        colorText.style.color = ('#' + Math.floor(Math.random() * 16777215).toString(16));
    })



    // Example 5

    let exampleFive = document.createElement('li');
    objectives.appendChild(exampleFive);
    let nameButton = document.createElement('button');
    nameButton.innerText = 'Who coded this?';
    let nameDiv = document.createElement('div');
    exampleFive.appendChild(nameButton);
    exampleFive.appendChild(nameDiv);
    nameButton.addEventListener('click', function () {
        let nameText = document.createElement('span');
        nameText.innerText = 'Eric';
        nameDiv.appendChild(nameText);
    }, { once: true });



    // Example 6

    let exampleSix = document.createElement('li');
    objectives.appendChild(exampleSix);
    let friendButton = document.createElement('button');
    friendButton.innerText = 'Friends';
    let friendul = document.createElement('ul');
    exampleSix.appendChild(friendButton);
    exampleSix.appendChild(friendul);
    let friendNames = ['Ichiban', 'Nanba', 'Adachi', 'Saeko', 'Eri', 'Joon-gi Han', 'Zhao', 'Kiryu', 'Majima', 'Saejima'];
    friendButton.addEventListener('click', function () {
        for (let i = 0; i < friendNames.length; i++) {
            let friendItem = document.createElement('li');
            let friendName = document.createTextNode(friendNames[i]);
            friendItem.appendChild(friendName);
            friendul.appendChild(friendItem);
        }

    })

})