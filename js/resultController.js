app.controller('resultController', function($scope, $window, Data, showImg) {
    $scope.images = [
        {'path': 'img/4.jpg', 'tags': ['Dog', 'Golden Retriever']},
        {'path': 'img/3.jpg', 'tags': ['Dog', 'Golden Retriever']},
        {'path': 'img/6.jpg', 'tags': ['Dog', 'Golden Retriever']},
        {'path': 'img/7.jpeg', 'tags': ['Dog', 'Poodle']},
        {'path': 'img/5.jpg', 'tags': ['Dog']},
        {'path': 'img/10.jpg', 'tags': ['Dog', 'Golden Retriever']},
        {'path': 'img/8.jpg', 'tags': ['Dog', 'Poodle']},
        {'path': 'img/9.jpg', 'tags': ['Dog', 'Poodle']},
        {'path': 'img/1.jpg', 'tags': ['Dog']},
        {'path': 'img/2.jpg', 'tags': ['Dog', 'Golden Retriever']}
    ];

    showImg.show('reshowImg');

    $scope.toTop = function(){
        $window.scrollTo(0, 0);
    }
});