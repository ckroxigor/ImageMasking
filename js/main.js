
// Handle the configuration of the SVG
function ImgConf($scope) {
	$scope.src_url = "http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
	$scope.mask_text = "01",
	$scope.bgcolor = [255, 255, 255],	//In RGB
	$scope.font_size = 2,

	//formats the color for the SVG
	$scope.getBgColor = function () {
		return "rgb(" + $scope.bgcolor[0] + "," + $scope.bgcolor[1] + "," + $scope.bgcolor[2] + ")"
	},

	// Decreases the font size
	$scope.reduceFontSize = function () {
		if ($scope.font_size > 1) 
			$scope.font_size--;
	},

	// Increases the font size
	$scope.increaseFontSize = function() {
		$scope.font_size++;
	},

	// Returns the width of the text pattern
	$scope.getTextWidth = function() {
		return $('#svgHiddenText').get(0).getBBox()['width'];
	}

	// Returns the height of the text pattern
	$scope.getTextHeight = function() {
		return $('#svgHiddenText').get(0).getBBox()['height'];
	}
}

//Start angular application
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