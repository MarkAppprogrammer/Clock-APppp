function updateClock() {
	let d = new Date()

	let hours = d.getHours()
	let minutes = d.getMinutes()
	let seconds = d.getSeconds()
	let month = d.getMonth()
	let day = d.getDate()

	//check month 
	

		
	let monthFI = ""
		
		
	if (month == 0) {
		 monthFI = "January"
	}
		
	if (month == 1) {
		 monthFI = "February"
	}
		
	if (month == 2) {
		 monthFI = "March"
	}
		
	if (month == 3) {
		 monthFI = "April"
	}
		
	if (month == 4) {
		 monthFI = "May"
	}
		
	if (month == 5) {
		 monthFI = "June"
	}
		
	if (month == 6) {
		 monthFI = "July"
	}
	if (month == 7) {
		 monthFI = "August"
	}
		
	if (month == 8) {
		 monthFI = "September"
	}
	if (month == 9) {
		 monthFI = "October"
	}
		
	if (month == 10) {
		 monthFI = "November"
	}
		
	if (month == 11) {
		 monthFI = "December"
	}

	

	

	
	setTimeout(updateClock, 100)
	
	let timeEl = document.getElementById("time")
	let secEl = document.getElementById("sec")
	let monthEl = document.getElementById("month")

	timeEl.textContent = hours + " : " + minutes + " : " + seconds
	document.title = hours + " : " + minutes + " : " + seconds
	monthEl.textContent = monthFI
	monthEl.textContent = monthFI
	
	
	
	
	
	//gets all daysel
	
	//set backgorund
	if (day == 1) {
		document.getElementById("day-1").style.background = "#30914a"
	}
	if (day == 2) {
		document.getElementById("day-2").style.background = "#30914a"
	}
	if (day == 3) {
		document.getElementById("day-3").style.background = "#30914a"
	}
	if (day == 4) {
		document.getElementById("day-4").style.background = "#30914a"
	}
	if (day == 5) {
		document.getElementById("day-5").style.background = "#30914a"
	}
	if (day == 6) {
		document.getElementById("day-6").style.background = "#30914a"
	}
	if (day == 7) {
		document.getElementById("day-7").style.background = "#30914a"
	}
	if (day == 8) {
		document.getElementById("day-8").style.background = "#30914a"
	}
	if (day == 9) {
		document.getElementById("day-9").style.background = "#30914a"
	}
	if (day == 10) {
		document.getElementById("day-10").style.background = "#30914a"
	}
	if (day == 11) {
		document.getElementById("day-11").style.background = "#30914a"
	}
	if (day == 12) {
		document.getElementById("day-12").style.background = "#30914a"
	}
	if (day == 13) {
		document.getElementById("day-13").style.background = "#30914a"
	}
	if (day == 14) {
		document.getElementById("day-14").style.background = "#30914a"
	}
	if (day == 15) {
		document.getElementById("day-15").style.background = "#30914a"
	}
	if (day == 16) {
		document.getElementById("day-16").style.background = "#30914a"
	}
	if (day == 17) {
		document.getElementById("day-17").style.background = "#30914a"
	}
	if (day == 18) {
		document.getElementById("day-18").style.background = "#30914a"
	}
	if (day == 19) {
		document.getElementById("day-19").style.background = "#30914a"
	}
	if (day == 20) {
		document.getElementById("day-20").style.background = "#30914a"
	}
	if (day == 21) {
		document.getElementById("day-21").style.background = "#30914a"
	}
	if (day == 22) {
		document.getElementById("day-22").style.background = "#30914a"
	}
	if (day == 23) {
		document.getElementById("day-23").style.background = "#30914a"
	}
	if (day == 24) {
		document.getElementById("day-24").style.background = "#30914a"
	}
	if (day == 25) {
		document.getElementById("day-25").style.background = "#30914a"
	}
	if (day == 26) {
		document.getElementById("day-26").style.background = "#30914a"
	}
	if (day == 27) {
		document.getElementById("day-27").style.background = "#30914a"
	}
	if (day == 28) {
		document.getElementById("day-28").style.background = "#30914a"
	}
	if (day == 29) {
		document.getElementById("day-29").style.background = "#30914a"
	}
	if (day == 30) {
		document.getElementById("day-30").style.background = "#30914a"
	}
	if (day == 21) {
		document.getElementById("day-31").style.background = "#30914a"
	}
}

updateClock()
	
	