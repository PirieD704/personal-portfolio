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
            url: "davidapirie.com/blackjack",
            desc: "Javascript, HTML, CSS"
        },
        {
            projectName: "DigitalCrafts Graduate",
            imageSrc: "img/portfolio/dc-logo.png",
            cover: "img/custom.png",
            smallCover: "img/portfolio/dc-logo.png",
            url: "http://www.digitalcrafts.com/",
            desc: ""
        },
        {
            projectName: "Pictionary Chat Room",
            imageSrc: "img/portfolio/chat_room.png",
            cover: "img/portfolio/chat-room2.jpg",
            smallCover: "img/portfolio/chat_room.png",
            url: "davidapirie.com/chat-room",
            desc: "Socket IO, AngularJS, Javascript"
        },
        {
            projectName: "Zombiez: The Game",
            imageSrc: "img/portfolio/zombies.png",
            cover: "img/portfolio/zombies2.jpg",
            smallCover: "img/portfolio/zombies.png",
            url: "davidapirie.com/zombies",
            desc: "Leaflet, Javascript, HTML, CSS "
        },
        {
            projectName: "Ecommerce Shoes",
            imageSrc: "img/me_on_mtn.jpg",
            cover: "img/snow-lake.jpg",
            smallCover: "img/me_on_mtn.jpg",
            url: "davidapirie.com/fresh-kicks",
            desc: "AngularJS, Express, NodeJS, MongoDB"
        },
        {
            projectName: "Python game",
            imageSrc: "img/galaxy.jpg",
            cover: "img/funkyBackground.jpg",
            smallCover: "img/galaxy.png",
            url: "https://github.com/PirieD704/pygame_first",
            desc: "Python, PyGame"
        },
        {
            projectName: "Coming Soon",
            imageSrc: "img/portfolio/zombies.png",
            cover: "img/portfolio/zombies2.jpg",
            smallCover: "img/portfolio/zombies.png",
            url: "davidapirie.com/zombies",
            desc: "Leaflet, Javascript, HTML, CSS "
        },
        {
            projectName: "Coming Soon",
            imageSrc: "img/me_on_mtn.jpg",
            cover: "img/snow-lake.jpg",
            smallCover: "img/me_on_mtn.jpg",
            url: "davidapirie.com/fresh-kicks",
            desc: "AngularJS, Express, NodeJS, MongoDB"
        },
        {
            projectName: "Comoing Soon",
            imageSrc: "img/galaxy.jpg",
            cover: "img/funkyBackground.jpg",
            smallCover: "img/galaxy.png",
            url: "https://github.com/PirieD704/pygame_first",
            desc: "Python, PyGame"
        }
    ]







}])