<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño de Estadios de Fútbol 3D</title>
  <style>
    body { margin: 0; padding: 0; }
    canvas { display: block; }
  </style>
</head>
<body>
  <h1>Diseña tu Estadio en 3D</h1>
  <div>
    <button id="addStands">Agregar Gradas</button>
    <button id="addGoal">Agregar Portería</button>
    <button id="addLight">Agregar Torre de Luz</button>
    <button id="reset">Reiniciar Estadio</button>
  </div>

  <!-- Incluyendo Three.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
