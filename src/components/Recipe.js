// ./src/components/Recipe.js

import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id="backed-salmon">
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="조리 절차" steps={steps} />
        </section>
    );
}
export default Recipe;