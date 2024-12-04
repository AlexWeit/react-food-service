import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../mock-data/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;

        return acc;
    }, {}),
    ids: normalizedDishes.map(({id}) => id),
};

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
    }
});

export const { selectDishById, selectDishesIds } =
    dishesSlice.selectors;
