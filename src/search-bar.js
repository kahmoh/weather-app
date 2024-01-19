const searchBar = {
  searchBar: document.getElementById('search-bar'),
  checkKeyCode: function(keyCode) {
    return keyCode === 13;
  },
  addEnterListener: function() {
    this.searchBar.addEventListener('keypress', (event) => {
      if (this.checkKeyCode(event.keyCode)) {
        this.getLocationData(this.searchBar.value);
      }
    });
  },
  getLocationData: async function(userInput) {
    try {
      const location = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=0ab2dcc6f4744a5b904180604241101&q=${userInput}`,
      );
      if (location.ok !== true) {
        throw new Error('location not found');
      }
      console.log(await location.json());
    } catch (error) {
      alert(`${error}`);
    }
  },
};

export {searchBar};
