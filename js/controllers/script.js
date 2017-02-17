angular.module("portfolio", ['ngRoute'])
.controller("portfolioController", function($scope, $http){

	$scope.test = "does this work?";

	$scope.portfolio = [
        {
            projectName: "BlackJack",
            imageSrc: "img/portfolio/blackjack.png",
            cover: "img/portfolio/blackjack2.JPG",
            smallCover: "img/portfolio/blackjack.png",
            url: "/blackjack",
            gitHubLink: "https://github.com/PirieD704/blackJack",
            desc: "Javascript, HTML, CSS"
        },
        {
            projectName: "Multiplayer Arena Game",
            imageSrc: "img/portfolio/space_balls.png",
            cover: "img/portfolio/space_balls_bgrd.jpg",
            smallCover: "img/portfolio/space_balls.png",
            url: "/space_balls",
            gitHubLink: "https://github.com/PirieD704/final_project",
            desc: "SocketIO, Javascript, Angular, NodeJS, PhaserJS"
        },
        {
            projectName: "Pictionary Chat Room",
            imageSrc: "img/portfolio/chat_room.png",
            cover: "img/portfolio/chat-room2.jpg",
            smallCover: "img/portfolio/chat_room.png",
            url: "/chat-room",
            gitHubLink: "https://github.com/PirieD704/chat-room",
            desc: "Socket IO, AngularJS, Javascript"
        },
        {
            projectName: "Zombiez: The Game",
            imageSrc: "img/portfolio/zombies.png",
            cover: "img/portfolio/zombies2.jpg",
            smallCover: "img/portfolio/zombies.png",
            url: "/zombies",
            gitHubLink: "https://github.com/paigen11/frontend-project",
            desc: "Leaflet, Javascript, HTML, CSS "
        },
        {
            projectName: "Ecommerce Shoes",
            imageSrc: "img/portfolio/shoes.png",
            cover: "img/portfolio/shoes-bg.jpg",
            smallCover: "img/portfolio/shoes.png",
            url: "/fresh-kicks",
            gitHubLink: "https://github.com/PirieD704/nodeEcommerce",
            desc: "AngularJS, Express, NodeJS, MongoDB"
        },
        {
            projectName: "Janus: For Notes",
            imageSrc: "img/portfolio/janus.png",
            cover: "img/portfolio/organized.jpg",
            smallCover: "img/portfolio/janus.png",
            url: "http://janus.davidapirie.com",
            gitHubLink: "https://github.com/paigen11/back-end",
            desc: "Python, Javascript, MySQL, AngularJS"
        },
        {
            projectName: "Tic Tac Toe",
            imageSrc: "img/portfolio/tictactoe-game.png",
            cover: "img/portfolio/tictactoe-bg.jpg",
            smallCover: "img/portfolio/tictactoe-game.png",
            url: "/ticTacToe",
            gitHubLink: "https://github.com/PirieD704/ticTacToe",
            desc: "Javascript, HTML, CSS "
        },
        {
            projectName: "Movie App",
            imageSrc: "img/portfolio/movie-app.png",
            cover: "img/portfolio/hollywood-sign.jpg",
            smallCover: "img/portfolio/movie-app.png",
            url: "/movie-app",
            gitHubLink: "https://github.com/PirieD704/movie-app",
            desc: "AngularJS, HTML, CSS"
        },
        {
            projectName: "Social Site",
            imageSrc: "img/portfolio/bawk.png",
            cover: "img/portfolio/social_site_bg.jpg",
            smallCover: "img/portfolio/bawk.png",
            url: "http://www.davidapirie.com:5000",
            gitHubLink: "https://github.com/jttwnsnd/bawk",
            desc: "Python, Linux, MySQL, Javascript, CSS"
        }
    ]

})

