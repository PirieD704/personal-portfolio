var portfolio = angular.module('portfolio', []);
portfolio.controller('portfolioController', ['$scope', '$timeout', function($scope, $timeout){
	$scope.test = "it's still working"
    $scope.showCover1 = true;
    $scope.hoverIn = function(imageSrc){
        if ($scope.showCover1) {
            $scope.cover2 = imageSrc;
            console.log("========cover2========");
            console.log($scope.cover2);
            $scope.fadeImg1 = {'opacity':'0'};
            $scope.fadeImg2 = {'opacity':'1'};
            $timeout(function() { $scope.zoomClass1 = ''; }, 1000);
            $scope.zoomClass2 = 'kburns';
            $scope.showCover1 = false;
        } else {
            $scope.cover1 = imageSrc;
            console.log("========cover1========");
            console.log($scope.cover1);
            $scope.fadeImg1 = {'opacity':'1'};
            $scope.fadeImg2 = {'opacity':'0'};
            $scope.zoomClass1 = 'kburns';
            $timeout(function() { $scope.zoomClass2 = ''; }, 1000);
            $scope.showCover1 = true;
        }
    }
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
            projectName: "DigitalCrafts Graduate",
            imageSrc: "img/portfolio/dc-logo.png",
            cover: "img/portfolio/dc-students.jpg",
            smallCover: "img/portfolio/dc-logo.png",
            url: "http://www.digitalcrafts.com/",
            gitHubLink: "https://github.com/PirieD704/personal-portfolio",
            desc: ""
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
            url: "janus.davidapirie.com",
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







}])