function getOwlsFromServer() {
	var test = fetch("https://interest-area-ready.herokuapp.com/classrooms/owls");
	console.log("TEST", test);
	return test
};

function getButterfliesFromServer() {
	var test = fetch("https://interest-area-ready.herokuapp.com/classrooms/butterflies");
	console.log("TEST", test);
	return test
};

function getBeesFromServer() {
	var test = fetch("https://interest-area-ready.herokuapp.com/classrooms/butterflies");
	console.log("TEST", test);
	return test
};

function sendOwlDataToServer(data) {
	var classData = JSON.stringify(data);
	console.log("CLIENT SIDE:", classData);
	return fetch("https://interest-area-ready.herokuapp.com/classrooms/owls", {
		method: "PUT",
		body: classData,
		headers: {"Content-Type":"application/json"}
	})
};

function sendButterflyDataToServer(data) {
	var classData = JSON.stringify(data);
	console.log("CLIENT SIDE:", classData);
	return fetch("https://interest-area-ready.herokuapp.com/classrooms/butterflies", {
		method: "PUT",
		body: classData,
		headers: {"Content-Type":"application/json"}
	})
};

function sendBeeDataToServer(data) {
	var classData = JSON.stringify(data);
	console.log("CLIENT SIDE:", classData);
	return fetch("https://interest-area-ready.herokuapp.com/classrooms/bees", {
		method: "PUT",
		body: classData,
		headers: {"Content-Type":"application/json"}
	})
};

var app = new Vue({
	el: '#app',
	data: {
		page: "home",
		id: 1,
		scale_total: 0,
		finemtr_total: 0,
		finemtr_progress: 0,
		finemtr_progress_color: "#F24B44",
		finemtr_setup: [],
		finemtr_interaction: [],
		finemtr_excel: [],
		art_total: 0,
		art_progress: 0,
		art_progress_color: "#F24B44",
		art_setup: [],
		art_interaction: [],
		art_excel: [],
		music_total: 0,
		music_progress: 0,
		music_progress_color: "#F24B44",
		music_setup: [],
		music_interaction: [],
		music_excel: [],
		blocks_total: 0,
		blocks_progress: 0,
		blocks_progress_color: "#F24B44",
		blocks_setup: [],
		blocks_interaction: [],
		blocks_excel: [],
		drama_total: 0,
		drama_progress: 0,
		drama_progress_color: "#F24B44",
		drama_setup: [],
		drama_interaction: [],
		drama_excel: [],
		math_total: 0,
		math_progress: 0,
		math_progress_color: "#F24B44",
		math_setup: [],
		math_interaction: [],
		math_excel: [],
		grossmtr_total: 0,
		grossmtr_progress: 0,
		grossmtr_progress_color: "#F24B44",
		grossmtr_setup: [],
		grossmtr_excel: []	

	},

	methods: {
		getOwls: function() {
			getOwlsFromServer().then((response) => {
				response.json().then((data) => {
					console.log("DATA:", data);
					console.log(data.finemtr_setup);
					//this.scale_total = data.scale_total,
					this.finemtr_total = data.finemtr_total,
					this.finemtr_progress = data.finemtr_progress,
					this.finemtr_setup = data.finemtr_setup,
					this.finemtr_interaction = data.finemtr_interaction,
					this.finemtr_excel = data.finemtr_excel,
					this.art_total = data.art_total,
					this.art_progress = data.art_progress,
					this.art_setup = data.art_setup,
					this.art_interaction = data.art_interaction,
					this.art_excel = data.art_excel,
					this.music_total = data.music_total,
					this.music_progress = data.music_progress,
					this.music_setup = data.music_setup,
					this.music_interaction = data.music_interaction,
					this.music_excel = data.music_excel,
					this.blocks_total = data.blocks_total,
					this.blocks_progress = data.blocks_progress,
					this.blocks_setup = data.blocks_setup,
					this.blocks_interaction = data.blocks_interaction,
					this.blocks_excel = data.blocks_excel,
					this.drama_total = data.drama_total,
					this.drama_progress = data.drama_progress,
					this.drama_setup = data.drama_setup,
					this.drama_interaction = data.drama_interaction,
					this.drama_excel = data.drama_excel,
					this.math_total = data.math_total,
					this.math_progress = data.math_progress,
					this.math_setup = data.math_setup,
					this.math_interaction = data.math_interaction,
					this.math_excel = data.math_excel,
					this.grossmtr_total = data.grossmtr_total,
					this.grossmtr_progress = data.grossmtr_progress,
					this.grossmtr_setup = data.grossmtr_setup,
					this.grossmtr_excel = data.grossmtr_excel	
				})
				console.log('response: ', response);
				console.log(response.data);
				
			}).catch(err => {
				console.log('err: ', err);
			})
		},

		getButterflies: function() {
			getButterfliesFromServer().then((response) => {
				response.json().then((data) => {
					console.log("DATA:", data);
					console.log(data.finemtr_setup);
					//this.scale_total = data.scale_total,
					this.finemtr_total = data.finemtr_total,
					this.finemtr_progress = data.finemtr_progress,
					this.finemtr_setup = data.finemtr_setup,
					this.finemtr_interaction = data.finemtr_interaction,
					this.finemtr_excel = data.finemtr_excel,
					this.art_total = data.art_total,
					this.art_progress = data.art_progress,
					this.art_setup = data.art_setup,
					this.art_interaction = data.art_interaction,
					this.art_excel = data.art_excel,
					this.music_total = data.music_total,
					this.music_progress = data.music_progress,
					this.music_setup = data.music_setup,
					this.music_interaction = data.music_interaction,
					this.music_excel = data.music_excel,
					this.blocks_total = data.blocks_total,
					this.blocks_progress = data.blocks_progress,
					this.blocks_setup = data.blocks_setup,
					this.blocks_interaction = data.blocks_interaction,
					this.blocks_excel = data.blocks_excel,
					this.drama_total = data.drama_total,
					this.drama_progress = data.drama_progress,
					this.drama_setup = data.drama_setup,
					this.drama_interaction = data.drama_interaction,
					this.drama_excel = data.drama_excel,
					this.math_total = data.math_total,
					this.math_progress = data.math_progress,
					this.math_setup = data.math_setup,
					this.math_interaction = data.math_interaction,
					this.math_excel = data.math_excel,
					this.grossmtr_total = data.grossmtr_total,
					this.grossmtr_progress = data.grossmtr_progress,
					this.grossmtr_setup = data.grossmtr_setup,
					this.grossmtr_excel = data.grossmtr_excel	
				})
				console.log('response: ', response);
				console.log(response.data);
				
			}).catch(err => {
				console.log('err: ', err);
			})
		},

		submitChanges: function (item) {
			submitChangesToServer(item).then((response) => {
				if (response.status == 200) {
					console.log("changes submited to server");
				}
			})
		},


		fineMotorScale: function (checkItem) {
			var complete = 8;
			if (checkItem == "1") {
				this.finemtr_total ++;
			} else if (checkItem == "0") {
				this.finemtr_total --;
			}

			this.finemtr_progress = this.progressScale(complete, this.finemtr_total);
			console.log(this.finemtr_progress);

			console.log("OWLS FINE MOTOR:", this.finemtr_total);
		},

		artScale: function (checkItem) {
			var complete = 11;
			if (checkItem == "1") {
				this.art_total ++;
			} else if (checkItem == "0") {
				this.art_total --;
			}

			this.art_progress = this.progressScale(complete, this.art_total);
			console.log(this.art_progress);

			console.log("OWLS FINE MOTOR:", this.art_total);
		},

		musicScale: function (checkItem) {
			var complete = 9;
			if (checkItem == "1") {
				this.music_total ++;
			} else if (checkItem == "0") {
				this.music_total --;
			}

			this.music_progress = this.progressScale(complete, this.music_total);
			console.log(this.music_progress);

			console.log("OWLS FINE MOTOR:", this.music_total);
		},

		blocksScale: function (checkItem) {
			var complete = 8;
			if (checkItem == "1") {
				this.blocks_total ++;
			} else if (checkItem == "0") {
				this.blocks_total --;
			}

			this.blocks_progress = this.progressScale(complete, this.blocks_total);
			console.log(this.blocks_progress);

			console.log("OWLS FINE MOTOR:", this.blocks_total);
		},

		dramaScale: function (checkItem) {
			var complete = 10;
			if (checkItem == "1") {
				this.drama_total ++;
			} else if (checkItem == "0") {
				this.drama_total --;
			}

			this.drama_progress = this.progressScale(complete, this.drama_total);
			console.log(this.drama_progress);

			console.log("OWLS FINE MOTOR:", this.drama_total);
		},

		mathScale: function (checkItem) {
			var complete = 8;
			if (checkItem == "1") {
				this.math_total ++;
			} else if (checkItem == "0") {
				this.math_total --;
			}

			this.math_progress = this.progressScale(complete, this.math_total);
			console.log(this.math_progress);

			console.log("OWLS FINE MOTOR:", this.math_total);
		},

		grossmtrScale: function (checkItem) {
			var complete = 8;
			if (checkItem == "1") {
				this.grossmtr_total ++;
			} else if (checkItem == "0") {
				this.grossmtr_total --;
			}

			this.grossmtr_progress = this.progressScale(complete, this.grossmtr_total);
			console.log(this.grossmtr_progress);

			console.log("OWLS FINE MOTOR:", this.grossmtr_total);
		},


		progressScale: function (complete, current) {
			return Math.ceil((current/complete) * 100);
		},

		updateOwls: function () {
			sendOwlDataToServer({
				scale_total: this.scale_total,
				finemtr_total: this.finemtr_total,
				finemtr_progress: this.finemtr_progress,
				finemtr_setup: this.finemtr_setup,
				finemtr_interaction: this.finemtr_interaction,
				finemtr_excel: this.finemtr_excel,
				art_total: this.art_total,
				art_progress: this.art_progress,
				art_setup: this.art_setup,
				art_interaction: this.art_interaction,
				art_excel: this.art_excel,
				music_total: this.music_total,
				music_progress: this.music_progress,
				music_setup: this.music_setup,
				music_interaction: this.music_interaction,
				music_excel: this.music_excel,
				blocks_total: this.blocks_total,
				blocks_progress: this.blocks_progress,
				blocks_setup: this.blocks_setup,
				blocks_interaction: this.blocks_interaction,
				blocks_excel: this.blocks_excel,
				drama_total: this.drama_total,
				drama_progress: this.drama_progress,
				drama_setup: this.drama_setup,
				drama_interaction: this.drama_interaction,
				drama_excel: this.drama_excel,
				math_total: this.math_total,
				math_progress: this.math_progress,
				math_setup: this.math_setup,
				math_interaction: this.math_interaction,
				math_excel: this.math_excel,
				grossmtr_total: this.grossmtr_total,
				grossmtr_progress: this.grossmtr_progress,
				grossmtr_setup: this.grossmtr_setup,
				grossmtr_excel: this.grossmtr_excel	
			}).then((response) => {
				if (response.status == 200) {
					console.log("updated");
				}
			})
		},

		updateButterflies: function () {
			sendButterflyDataToServer({
				scale_total: this.scale_total,
				finemtr_total: this.finemtr_total,
				finemtr_progress: this.finemtr_progress,
				finemtr_setup: this.finemtr_setup,
				finemtr_interaction: this.finemtr_interaction,
				finemtr_excel: this.finemtr_excel,
				art_total: this.art_total,
				art_progress: this.art_progress,
				art_setup: this.art_setup,
				art_interaction: this.art_interaction,
				art_excel: this.art_excel,
				music_total: this.music_total,
				music_progress: this.music_progress,
				music_setup: this.music_setup,
				music_interaction: this.music_interaction,
				music_excel: this.music_excel,
				blocks_total: this.blocks_total,
				blocks_progress: this.blocks_progress,
				blocks_setup: this.blocks_setup,
				blocks_interaction: this.blocks_interaction,
				blocks_excel: this.blocks_excel,
				drama_total: this.drama_total,
				drama_progress: this.drama_progress,
				drama_setup: this.drama_setup,
				drama_interaction: this.drama_interaction,
				drama_excel: this.drama_excel,
				math_total: this.math_total,
				math_progress: this.math_progress,
				math_setup: this.math_setup,
				math_interaction: this.math_interaction,
				math_excel: this.math_excel,
				grossmtr_total: this.grossmtr_total,
				grossmtr_progress: this.grossmtr_progress,
				grossmtr_setup: this.grossmtr_setup,
				grossmtr_excel: this.grossmtr_excel	
			}).then((response) => {
				if (response.status == 200) {
					console.log("updated");
				}
			})
		},

		updateBees: function () {
			sendBeeDataToServer({
				scale_total: this.scale_total,
				finemtr_total: this.finemtr_total,
				finemtr_progress: this.finemtr_progress,
				finemtr_setup: this.finemtr_setup,
				finemtr_interaction: this.finemtr_interaction,
				finemtr_excel: this.finemtr_excel,
				art_total: this.art_total,
				art_progress: this.art_progress,
				art_setup: this.art_setup,
				art_interaction: this.art_interaction,
				art_excel: this.art_excel,
				music_total: this.music_total,
				music_progress: this.music_progress,
				music_setup: this.music_setup,
				music_interaction: this.music_interaction,
				music_excel: this.music_excel,
				blocks_total: this.blocks_total,
				blocks_progress: this.blocks_progress,
				blocks_setup: this.blocks_setup,
				blocks_interaction: this.blocks_interaction,
				blocks_excel: this.blocks_excel,
				drama_total: this.drama_total,
				drama_progress: this.drama_progress,
				drama_setup: this.drama_setup,
				drama_interaction: this.drama_interaction,
				drama_excel: this.drama_excel,
				math_total: this.math_total,
				math_progress: this.math_progress,
				math_setup: this.math_setup,
				math_interaction: this.math_interaction,
				math_excel: this.math_excel,
				grossmtr_total: this.grossmtr_total,
				grossmtr_progress: this.grossmtr_progress,
				grossmtr_setup: this.grossmtr_setup,
				grossmtr_excel: this.grossmtr_excel	
			}).then((response) => {
				if (response.status == 200) {
					console.log("updated");
				}
			})
		},


	},
	computed: {
		progressColor: function () {
			if (this.finemtr_progress < 40) {
				this.finemtr_progress_color = "#F24B44";
				} else if (this.finemtr_progress > 40 && this.finemtr_progress < 80) {
					this.finemtr_progress_color = "#F2D852";
				} else {
					this.finemtr_progress_color = "#32CD32";
				}

				return this.finemtr_progress_color

			// if (this.art_progress < 40) {
			// 	this.art_progress_color = 'red';
			// 	} else if (this.art_progress > 40 && this.art_progress < 80) {
			// 		this.art_progress_color = 'yellow';
			// 	} else {
			// 		this.art_progress_color = 'green';
			// 	}

			// if (this.music_progress < 40) {
			// 	this.music_progress_color = 'red';
			// 	} else if (this.music_progress > 40 && this.music_progress < 80) {
			// 		this.music_progress_color = 'yellow';
			// 	} else {
			// 		this.music_progress_color = 'green';
			// 	}

			// if (this.blocks_progress < 40) {
			// 	this.blocks_progress_color = 'red';
			// 	} else if (this.blocks_progress > 40 && this.blocks_progress < 80) {
			// 		this.blocks_progress_color = 'yellow';
			// 	} else {
			// 		this.blocks_progress_color = 'green';
			// 	}
		},

		scaleTotal: function () {
			var total = 62
			var a = this.finemtr_total + 
			this.art_total + 
			this.music_total + 
			this.blocks_total + 
			this.drama_total + 
			this.math_total + 
			this.grossmtr_total

			return Math.ceil(a/total * 100);
		}

	},

		created: function () {

	}
});
