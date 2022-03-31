function adduser() {
    player1_username = document.getElementById("player1_username_input").value;
    player2_username = document.getElementById("player2_username_input").value;

    localStorage.setItem("player1_username", player1_username);
    localStorage.setItem("player2_username", player2_username);

    window.location = "quiz_game_page.html";
}