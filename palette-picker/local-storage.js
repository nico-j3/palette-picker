import initialPalettes from'./palettes.json'

// Generic Helper Functions
const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.error(error);
      return null;
    }
  }
// sets the todos Array in localStorage with the key 'todos'

export const setPalettes = (palettes) => setLocalStorageKey('palettes', palettes);


// returns the Array of all todo Objects from localStorage
export const getAllPalettes = () => getLocalStorageKey('palettes');

// adds a new todo Object to the Array of todos in localStorage
export const addPalettes = (palettes) => setPalettes([...getAllPalettes(), palettes]);


  // initializes todos using the todos.json file
  export const initializePalettesIfEmpty = () => {
    const existingPalettes = getAllPalettes();
    if (!getAllPalettes()) {
    setPalettes(initialPalettes)};

  };


// finds a todo by uuid and removes it from the Array of todos
export const deletePalettes = (uuid) => {
    const palettes = getAllPalettes().filter((palettes) => palettes.uuid !== uuid);
    setPalettes(palettes);
  };

  // finds a todo by uuid and replaces it with the given todo in localStorage
 export const togglePalettesComplete = (uuid) => {
    const palettes = getAllPalettes();
    const palettesToUpdate = palettes.find((palettes) => palettes.uuid === uuid);
    palettesToUpdate.isComplete = !palettesToUpdate.isComplete
    setPalettes(palettes);
  };



export const addAllPalettes = (palettes) => {
    const existingPalettes = getAllPalettes();
    console.log(existingPalettes, palettes)
    // console.log(existingPalettes)
    const newPalettesArray = [...existingPalettes, palettes];
    setPalettes(newPalettesArray)
}
