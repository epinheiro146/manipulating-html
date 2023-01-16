$(document).ready(function () {

    // Example 1

    $('body').append('<ol id = "objectives"></ol>');

    $('#objectives').append('<li id = "exampleOne"></li>');

    $('#exampleOne').append('<button id = "niceButton">Hi</button>');

    $('#niceButton').click(function () {
        alert("Hope you're having a good day :)");
    });



    // Example 2

    $('#objectives').append('<li id = "exampleTwo"></li>');

    $('#exampleTwo').append('<form id = "copycatForm">');

    $('#copycatForm').append('<input id = "copycatText" type = "text">');

    $('#copycatForm').append('<button id = "textButton">Copycat</button>');

    $('#textButton').click(function () {

        alert(copycatText.value);

    });



    // Example 3

    $('#objectives').append('<li id = "exampleThree"></li>');

    $('#exampleThree').append('<div id = "colorDiv"></div>');

    $('#colorDiv').css('background-color', 'lightblue');

    $('#colorDiv').css('height', '5em');

    $('#colorDiv').css('width', '5em');

    $('#colorDiv').mouseover(function () {

        $('#colorDiv').css('background-color', 'crimson');

    })

    $('#colorDiv').mouseout(function () {

        $('#colorDiv').css('background-color', 'lightblue');

    })



    // Example 4

    $('#objectives').append('<li id = "exampleFour"></li>');

    $('#exampleFour').append('<p id = "colorText">Click me!</p>');

    $('#colorText').click(function () {

        $('#colorText').css('color', ('#' + Math.floor(Math.random() * 16777215).toString(16)));

    });



    // Example 5

    $('#objectives').append('<li id = "exampleFive"></li>');

    $('#exampleFive').append('<button id = "nameButton">Who coded this?</button>').append('<div id = "nameDiv"></div>');        // appended 2 sibling elements as children to the same parent element

    $('#nameButton').one('click', function () {     // performs function only once

        $('#nameDiv').append('<span id = "nameText">Eric</span>');

    });



    // Example 6

    $('#objectives').append('<li id = "exampleSix"></li>');

    $('#exampleSix').append('<button id = "friendButton">Friends</button>').append('<ul id = "friendul"></ul>');

    let friendNames = ['Ichiban', 'Nanba', 'Adachi', 'Saeko', 'Eri', 'Joon-gi Han', 'Zhao', 'Kiryu', 'Majima', 'Saejima'];

    $('#friendButton').click(function () {

        for (let i = 0; i < friendNames.length; i++) {

            $('#friendul').append('<li class = "friendItem">' + friendNames[i] + '</li>');

        }

    });

});