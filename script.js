const div = document.getElementById('info')

function clicar_gosto() {
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.style.boxShadow = '0px 0px 5px black'
    div.innerHTML = `<ul>
    <li>Loona</li>
    <li>Twice</li>
    <li>Bts</li>
    <li>Doramas</li>
    <li>Gesnhin</li>
    <li>Gatinhos</li>
    <li>Cozinhar</li>
    </ul>`
}

function clicar_nao() {
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.style.boxShadow = '0px 0px 5px black'
    div.innerHTML = `<ul>
    <li>Do Bolsonaro</li>
    <li>De headcanon</li>
    <li>De quando discordam de mim</li>
    </ul>`
}

function clicar_casinhas() {
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.style.boxShadow = '0px 0px 5px black'
    div.innerHTML = `<ul>
    <li><a href="https://twitter.com/weaast" target="_blank">@weaast</a> 💗<br>
    <li><a href="https://twitter.com/TonTyi" target="_blank">@TonTyi</a><br>
    <li><a href="https://twitter.com/HAOCLIP" target="_blank">@HAOCLIP</a><br>
    <li><a href="https://twitter.com/ScottDMF" target="_blank">@ScottDMF</a><br>
    <li><a href="https://twitter.com/dioslight" target="_blank">@dioslight</a>
    </ul>`
}