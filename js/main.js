
// Handle the configuration of the SVG
function ImgConf($scope) {
	$scope.src_url = "http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
	$scope.mask_text = "Hello World!!!",
	$scope.bgcolor = [0, 0, 0],	//In RGB
	$scope.font_size = 2,

	//format the color for the SVG
	$scope.getBgColor = function () {
		return "rgb(" + $scope.bgcolor[0] + "," + $scope.bgcolor[1] + "," + $scope.bgcolor[2] + ")"
	},


	$scope.getImgURL = function () {
		return $scope.src_url;
	},

	$scope.reduceFontSize = function () {
		if ($scope.font_size > 1) 
			$scope.font_size--;
	},

	$scope.increaseFontSize = function() {
		$scope.font_size++;
	},

	$scope.getTextWidth = function() {
		return $('#svgHiddenText').get(0).getBBox()['width'];
	}
}

var app = angular.module('app', []);

//Borrowed from: http://plnkr.co/edit/cMhGRh?p=preview
app.directive('ngXlinkHref', function () {
	return {
		priority: 99,
		restrict: 'A',
		link: function (scope, element, attr) {
			var attrName = 'xlink:href';
			attr.$observe('ngXlinkHref', function (value) {
				if (!value) return;
				attr.$set(attrName, value);
			});
		}
	};
});