<?php

    try {
        $conectar = new PDO("sqlite:banco/banco_biblioteca.db");

        $sql = $conectar->query("SELECT * FROM tb_livro");

        $tb_livro = $sql->fetchAll(PDO::FETCH_ASSOC);

    //    for($i = 0; $i < count($tb_usuario); $i++){
    //     echo "Matricula: " . $tb_usuario[$i]['matricula'];
    //     echo "Nome:" . $tb_usuario[$i]['nome'];
    //     echo "telefone:" . $tb_usuario[$i]['telefone'];
    //     echo "<br>";
    //    }

        echo"ok";
    } catch (\Throwable $th) {
        echo "nao ok";
    }



?>

<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/estilos.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=MuseoModerno&display=swap" rel="stylesheet">

    <title>Biblioteca Municipal</title>
    <link rel="stylesheet" href="./css/styles.css">

</head>

<body>
    
    <header>
    
       <img src="/img/Biblioteca-Banner.png" alt="Biblioteca-Banner">
       
       <nav class="menu">

            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="usuarios.php">Usuario</a></li>
                <li><a href="livro.php">Livro</a></li>
                <li><a href="#">emprestimo</a></li>
            </ul>

       </nav>

    </header>

    <main>

    <div class="cadastro">
        <h2>Cadastro de livros</h2>

        <form action="livro_cadastro.php" method="POST">
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo">

            <label for="autor">Autor</label>
            <input type="text" name="autor" id="autor">

            <label for="editora">Editora</label>
            <input type="text" name="editora" id="editora">

            <label for="ano_de_publicacao">Ano de publicação</label>
            <input type="text" name="ano_de_publicacao" id="ano_de_publicacao">

            <label for="quantidade">Quantidade</label>
            <input type="text" name="quantidade" id="quantidade">

            <div class="botoes">
                <input type="submit" value="Cadastrar">
                <input type="reset" value="Limpar">
            </div>
        </form>

    </div>

    <div class="consulta">
        <h2>Consulta de usuarios</h2>

        <table>
            <tr>
                <th>codigo_catalogacao</th>
                <th>titulo</th>
                <th>autor</th>
                <th>Opçoes</th>
            </tr>

            <?php
             for($i = 0; $i < count($tb_livro); $i++){
                echo "<tr>";
                echo "<td>" . $tb_livro[$i]['codigo_catalogacao'] . "</td>";
                echo "<td>" . $tb_livro[$i]['titulo'] . "</td>";
                echo "<td>" . $tb_livro[$i]['autor'] . "</td>";
                echo "<td> <a href='#'>vizualizar</a> <a href='#'>Excluir</a> </td>" ;
                echo "</tr>";
            }
            ?>

        </table>
    </div>
    
    </main>

</body>
</html>