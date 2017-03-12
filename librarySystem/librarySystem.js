(function() {

  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      libraryStorage[libraryName] = {
        dependencies,
        callback
      };
    } else {

      var library = libraryStorage[libraryName];

      if (library.storedLibrary) {
        return library.storedLibrary;
      }

      var dependentLibraries = [];
      dependentLibraries = library.dependencies.map(dependencyName => librarySystem(dependencyName));

      library.storedLibrary = library.callback(...dependentLibraries);
      return library.storedLibrary;
    }
  }

  window.librarySystem = librarySystem;

})();
