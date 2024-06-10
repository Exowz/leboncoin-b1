<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Petit Coin</title>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">
</head>
<body>
    <header class="header">
        <div>
            <a href="">Déposer une annonce</a>
        </div>
        <div class="bar-recherche">
            <form action="/src/controllers/recherche.php" method="GET">
                <input type="text" name="recherche" placeholder="Rechercher des annonces">
                <button type="submit">Search</button>
            </form>
        </div>
        <nav class="nav">
            <a href="">Favoris</a>
            <a href="">Messages</a>
        </nav>
        <div>
            <a href="">Se connecter</a>
        </div>
    </header>
</body>
</html> 