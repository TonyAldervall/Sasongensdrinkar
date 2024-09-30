export async function fetchData(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

export async function postRecipe(recipe) {
    const response = await fetch('https://recept5-kivel.reky.se/recipes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    });

    const result = await response.json();
    return result;
}