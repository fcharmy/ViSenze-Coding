app.controller('searchController', function($scope, $location, Data, showImg){
    $scope.fileChanged = function(event) {
        var file = event.target.files[0];
        $scope.beforeUpdate();
        $('#removeCamera').click();
        
        if (file) {
            Data.setImgType(Data.IMG);
            Data.setImgFile(file);
            showImg.show('showImg');

            // enable Search button
            $('#searchBtn').addClass('btn-success').prop("disabled", false);
            $('#selectBtn').append("<div class='panel-body'> " + Data.getImgFile().name + " </div>");
        } else {
            Data.setImgFile(null);
            Data.setImgType(-1);

            // disable Search button
            $('#searchBtn').removeClass('btn-success').prop("disabled", true);
        }
    };

    $scope.enablePhoto = function(){
        $('#ng-camera-action').click(function(){
            var file = $('#photoData').attr('src');

            Data.setImgType(Data.PHOTO);
            Data.setImgFile(file);
            showImg.show('showImg');

            // enable Search button
            $('#searchBtn').addClass('btn-success').prop("disabled", false);
            $('#removeCamera').click();
        });
    };

    // beforeUpdate is called every time image will be changed
    $scope.beforeUpdate = function(){
        $('.panel-body').remove();
        $('#showImg').attr('src', '');

    };

    $scope.submitImg = function(){
        if(Data.getImgFile() != null){
            $location.path("/result");
        }else{
            alert('Please select a image!');
        }
    };
});
var vm;