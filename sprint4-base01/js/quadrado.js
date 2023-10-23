// MONTA OS QUADRADOS(ROBÔS E OBSTÁCULOS)
const quadrado = function (posX, posY, width, height, color, velocidade, imagem, vida) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
    this.imagem = imagem;
    this.vida = vida;
}
