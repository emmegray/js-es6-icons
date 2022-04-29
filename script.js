const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const typeSelect = document.querySelector("#type");
const options = [];
allIcons.forEach(
    function (icon) {
        if (
            !(options.find(option => option === icon.type))
        ) options.push(icon.type);
    }
)
options.forEach(
    function (option) {
        const newOption = document.createElement("option");
        newOption.value = option;
        newOption.textContent = option;
        typeSelect.appendChild(newOption);
    }
)

const iconsContainer = document.querySelector("#icons .row");
const iconTemplate = document.querySelector(".icon").cloneNode(true);
document.querySelector(".icon").remove();

printIcons(allIcons);

function printIcons(icons) {
    icons.forEach(
        function (icon) {
            const newIconElement = iconTemplate.cloneNode(true);
    
            newIconElement.querySelector("i").className = `${icon.prefix}solid ${icon.prefix + icon.name} ${icon.color}`;
            newIconElement.querySelector("b").textContent = icon.name;
    
            iconsContainer.appendChild(newIconElement);
        }
    )
}

typeSelect.addEventListener("change", function(event){
    const type = event.target.value;
    iconsContainer.innerHTML = "";

    if (type === "all"){
        printIcons(allIcons);
    } else {
        printIcons(allIcons.filter(
            (icon) => icon.type === type
        ))
    }
})