const initialState = {
    arrayData: [],
  };
  export function AboutUs(state = initialState, action) {
    switch (action.type) {
      case "ABOUT_DATA":
        return {
          ...state,
          arrayData: [...action.playload],
        };
      default:
        return state;
    }
  }