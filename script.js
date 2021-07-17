const div = document.getElementById('info')
let mostrando = false
clicou = false

function saiu() {
    if(!clicou) {
        div.innerHTML = ''
        div.style.backgroundColor = 'transparent'
        div.style.boxShadow = '0px 0px 0px rgb(204, 204, 204)'
        mostrando = false
    }
}

function clicar_gosto() {
    div.style.boxShadow = '0px 0px 5px black'
    clicou = true
    div.innerHTML = `<ul>
    <li>Kpop</li>
    <li>Doramas</li>
    <li>Gesnhin</li>
    <li>Gatinhos</li>
    <li>Cozinhar</li>
    </ul>`
}

function clicar_nao() {
    div.style.boxShadow = '0px 0px 5px black'
    clicou = true
    div.innerHTML = `<ul>
    <li>Do Bolsonaro</li>
    <li>De headcanon</li>
    <li>De quando discordam de mim</li>
    </ul>`
}

function clicar_casinhas() {
    div.style.boxShadow = '0px 0px 5px black'
    clicou = true
    div.innerHTML = `<ul>
    <li><a href="https://twitter.com/weaast" target="_blank">@weaast</a> 💗<br>
    <li><a href="https://twitter.com/TonTyi" target="_blank">@TonTyi</a><br>
    <li><a href="https://twitter.com/HAOCLIP" target="_blank">@HAOCLIP</a><br>
    <li><a href="https://twitter.com/ScottDMF" target="_blank">@ScottDMF</a><br>
    <li><a href="https://twitter.com/dioslight" target="_blank">@dioslight</a>
    </ul>`
}

function gosto(){
    if (!mostrando) {
        mostrando = true
    }
    div.style.boxShadow = '0px 0px 5px black'
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.innerHTML = `<ul>
    <li>Kpop</li>
    <li>Doramas</li>
    <li>Gesnhin</li>
    <li>Gatinhos</li>
    <li>Cozinhar</li>
    </ul>`

}

function nao_gosto() {
    if (!mostrando) {
        mostrando = true
    }
    div.style.boxShadow = '0px 0px 5px black'
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.innerHTML = `<ul>
    <li>Do Bolsonaro</li>
    <li>De headcanon</li>
    <li>De quando discordam de mim</li>
    </ul>`
    
}

function casinhas() {
    if (!mostrando) {
        mostrando = true
    }
    div.style.boxShadow = '0px 0px 5px black'
    div.style.backgroundColor = 'rgb(255, 116, 139)'
    div.innerHTML = `<ul>
    <li><a href="https://twitter.com/weaast" target="_blank">@weaast</a> 💗<br>
    <li><a href="https://twitter.com/TonTyi" target="_blank">@TonTyi</a><br>
    <li><a href="https://twitter.com/HAOCLIP" target="_blank">@HAOCLIP</a><br>
    <li><a href="https://twitter.com/ScottDMF" target="_blank">@ScottDMF</a><br>
    <li><a href="https://twitter.com/dioslight" target="_blank">@dioslight</a>
    </ul>`
}

function info_saiu() {
    div.style.boxShadow = '0px 0px 0px black'
    div.innerHTML = ''
    div.style.backgroundColor = 'transparent'
    mostrando = false
}