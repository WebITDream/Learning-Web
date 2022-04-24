const container = document.getElementById("box");
const total = document.getElementById("total");
var selectedSeats = 0;

movie.addEventListener("change", e => {
        ticketPrice = +e.target.value;
});

var clickStatus = 0;

function updateSelected(idDiv){

    if(movie.value != 0){
        selectedSeats += 1;
        if(movie.value == 0){
            total.innerHTML = "<p style='color:red;'>ERROR: You need first to pick a movie</p>";
        }else{
            clickStatus = 1;
            total.innerHTML = "Total of " + selectedSeats + " seats selected";
            div = document.getElementById(idDiv).style.background = 'white';
        }
    }else{
        total.innerHTML = "<p style='color:red;'>ERROR: You need first to pick a movie</p>";
    }

}