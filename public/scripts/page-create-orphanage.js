// Create map
const map = L.map('mapid').setView([-19.8616521,-43.9669471], 15);


// Create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Add photo field
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // Limpar o campo antes de adicionar ao container de imagens
    input.value == ""
    // Adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField() {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Select Yes or No
function toggleSelect(event) {
    // Retirar a classe active dos botões
     document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'))
    // Colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')
    // Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    // Verificar se Sim ou Não
    input.value = button.dataset.value


}