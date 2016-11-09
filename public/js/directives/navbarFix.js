function navbarFix($window) {
    var $win = angular.element($window);

    return {
        restrict: 'A',
        // 'A' - only matches attribute name
        link: function(scope, element, attrs) {
            var offsetTop = element.offset().top - 115; // get element's offset top relative to document

            $win.on('scroll', function(e) {
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass('fixed-top');
                } else {
                    element.removeClass('fixed-top');
                }
            });
        }
    };
}
