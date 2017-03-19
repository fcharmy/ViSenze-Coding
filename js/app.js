var app = angular.module("codeApp", ["ngRoute", "camera"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "search.html"
    })
    .when("/result", {
        templateUrl : "result.html"
    });
});

// store Image File Object in factory
app.factory('Data', function () {
    var data = {
        imgFile: null,
        imgType: -1
    };

    return {
        IMG: 0,
        PHOTO: 1,
        getImgFile: function () {
            return data.imgFile;
        },
        setImgFile: function (file) {
            data.imgFile = file;
        },
        getImgType: function () {
            return data.imgType;
        },
        setImgType: function (type) {
            data.imgType = type;
        }
    };
});

// set <img> src by using FileReader
app.factory('showImg', function (Data) {
    return {
        show: function(id){
            var type = Data.getImgType();
            var imgfile = Data.getImgFile();

            if (type == Data.IMG && imgfile) {
                var reader = new FileReader();
                reader.onload = function () {
                    var dataURL = reader.result;
                    var output = document.getElementById(id);
                    output.src = dataURL;
                };
                reader.readAsDataURL(imgfile);

                return true;
            }else if (type == Data.PHOTO && imgfile){
                document.getElementById(id).src = imgfile;
                return true;
            }

            return false;
        }
    };
});

// customize OnChange event for file <input>
app.directive('onChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.onChange);
      element.bind('change', onChangeHandler);
    }
  };
});