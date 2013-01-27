requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {}
});

// Start the main app logic.
requirejs(['Box2dWeb-2.1.a.3', 'gamvas.debug'],
    function   (Box2D, gamvas) {
    });