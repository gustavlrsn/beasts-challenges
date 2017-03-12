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

      libraryStorage[libraryName].storedLibrary = library.callback(...dependentLibraries);
      return libraryStorage[libraryName].storedLibrary;
    }
  }

  window.librarySystem = librarySystem;

})();
