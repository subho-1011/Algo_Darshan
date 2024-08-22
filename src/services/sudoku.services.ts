import axios from "axios";

const options = {
  method: "GET",
  url: "https://sudoku-generator1.p.rapidapi.com/sudoku/generate",
  params: { seed: "1337" },
  headers: {
    "x-rapidapi-key": "0244201c0bmsh90657d4e102fa25p117363jsn57030d5e3b9e",
    "x-rapidapi-host": "sudoku-generator1.p.rapidapi.com",
  },
};

const getNewSudoku = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { getNewSudoku };
