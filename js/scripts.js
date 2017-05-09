function Movie(title, time, rating) {
  this.title = title;
  this.time = time;
  this.rating = rating;
}

var starWars = new Movie("Star Wars", ["3:00pm", "6:00pm", "9:00pm"], "PG-13");

var jurassic = new Movie("Jurassic Park", ["2:00pm", "5:00pm", "8:00pm"], "PG-13");

var gojira = new Movie("The Wizard of Oz 2", ["10:00am", "1:00pm", "10:00pm"], "R");

Movie.prototype.movieTimes = function(starWars){
  console.log(starWars.time);
  return "<button class='btn'>" + starWars.time[0] + "</button>" + "<button class='btn'>" + starWars.time[1] + "</button>" + "<button class='btn'>" + starWars.time[2] + "</button>";
}

Movie.prototype.movieTimes = function(jurassic){
  console.log(jurassic.time);
  return "<button class='btn'>" + jurassic.time[0] + "</button>" + "<button class='btn'>" + jurassic.time[1] + "</button>" + "<button class='btn'>" + jurassic.time[2] + "</button>";
}

Movie.prototype.movieTimes = function(gojira){
  console.log(gojira.time);
  return "<button class='btn'>" + gojira.time[0] + "</button>" + "<button class='btn'>" + gojira.time[1] + "</button>" + "<button class='btn'>" + gojira.time[2] + "</button>";
}

$(document).ready(function(){

  console.log(starWars.title);
  $("form#formid").submit(function(event){
  event.preventDefault();
  var costumerInfo = $("input#info").val();
  //var test = starWars.movieTimes(starWars);
  $("#output").append(starWars.movieTimes(starWars));
  $("#output2").append(jurassic.movieTimes(jurassic));
  $("#output3").append(gojira.movieTimes(gojira));
  });
});
