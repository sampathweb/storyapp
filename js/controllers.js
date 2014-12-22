// Controllers

storyApp.controller('homeController',
['$scope',
    function($scope) {
// Nothing to do dynamically
}]);

storyApp.controller('storyController',
['$scope', 'storyService',
    function($scope, storyService) {

        $scope.initialize = function() {
            $scope.title = '';
            $scope.content = '';
            $scope.parent = null;
            $scope.nodes = storyService.get_nodes();
            console.log($scope.nodes);
            // Build the dropdown for parent
        }

        $scope.seed_story = function() {
            var node = storyService.add_node('First Title', 'First Content');
            node = storyService.add_node('second Title', 'Second Content', node);
            storyService.add_node('Third Title', 'Third Content', node);
            console.log(storyService);
            $scope.initialize();
        };

        $scope.submit = function() {
            storyService.add_node($scope.title, $scope.content, $scope.parent);
            // Give a flash message and clear contents
            $scope.initialize();
        };
}]);


storyApp.controller('playController',
['$scope', 'storyService',
    function($scope, storyService) {

        $scope.initialize = function() {
            $scope.current = storyService.root;
        }

        $scope.initialize();

        $scope.previous = function() {
            $scope.current = storyService.get_parent($scope.current);
        }

        $scope.next = function() {
            $scope.current = storyService.get_next($scope.current);
        }
}]);

