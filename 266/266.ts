

angular.module('module1',[])
    .service('$myService',function(){

    })
    .controller('controller1',function($scope,$myService){
        $scope.$watch(function(){return $scope.data},function(n,o){
            $myService.data=$scope.data;
        });
    })
    .controller('controller2',function($scope,$myService){
        $scope.$watch(function(){return $myService.data},function(n,o){
                $scope.data=$myService.data;
        });
    });
