<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>

       <!-- BOOTSTRAP CDN  -->
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body id="background">
    

    <div class="container">
        <div class="row">
            <div class="col">
               <div class="form-group">
                <h1 class="title" id="title">Cambiando colores de fondo y de texto con javascript</h1>
               </div> 
               <div class="form-check form-check-inline">
                   <!-- input:radio-->
                <input class="form-check-input" type="radio" name="option" id="green" onclick="green();">
                <label class="form-check-label"  for="" >Verde</label>
               </div>
               <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="option" id="purple" onclick="purple();">
                <label class="form-check-label"  for="" >Morado</label>
                   
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="option" id="blue" onclick="blue();">
                <label class="form-check-label"  for="" >Azul</label>
            </div>
            <!-- PINTAR UNA LINEA GRIS -->
            <hr>

            <div class="form-group"><button class="btn btn-warning" onmouseover="warning();" >Warning</button></div>
            <div class="form-group"><button class="btn btn-secondary" onmouseover="secondary();">Secondary</button></div>
            <div class="form-group"><button class="btn btn-danger"  onmouseover="danger();">Danger</button></div>
        </div>
        </div>
    </div>