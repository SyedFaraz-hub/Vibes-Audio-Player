import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Beaver Creek",
			cover:
				"https://t3.ftcdn.net/jpg/06/26/31/02/360_F_626310207_Qi4lUvWCE4K0HQakmIyCmMIedCEpyvZe.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			cover:
				"https://c0.wallpaperflare.com/preview/205/966/421/backlit-dawn-daylight-wallpaper.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM9rZR44Z2IdpHmOx8kbxULcMG4xLyr8ASQ&s",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZUuWPLQ2IFd0mWYKv4RZEWmBV_wrXOtk7A&s",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgZ7lK1hYA0i1TpeumHp6rRxdA9I5Um13jg&s",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
			"https://c4.wallpaperflare.com/wallpaper/27/345/197/city-stars-bench-lights-wallpaper-preview.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
