<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>niXZan-Temperaturas</title>
</head>
<body>
    <form action="main.php" method="post">
        <label for="temperatura">Temperatura:</label>
        <select id="unidade" name="unidade" required>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
        </select>
        <input type="number" id="temperatura" name="temperatura" required>
        <select id="unidadeVirar" name="unidadeVirar" required>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
        </select>
        <button type="submit">Converter</button>
    </form>
</body>
</html>