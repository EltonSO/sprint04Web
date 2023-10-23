(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');

  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;
  let moveLeft1 = false;
  let moveUp1 = false;
  let moveRight1 = false;
  let moveDown1 = false;

  // Vidas dos quadrados e contador de colisões
  let vidasQuadrado1 = 100;
  let vidasQuadrado4 = 100;
  let colisoes = 0;
  
  // arrays
  const quadrados = [];
  
  // quadrados
  const robo01 = new Image();
  robo01.src = '../img/robo1.png'
  const quadrado1 = new quadrado(940,420, 50, 70, "#FF5733", 5, robo01, vidasQuadrado1);
  quadrados.push(quadrado1);
  
  const robo02 = new Image();
  robo02.src = '../img/robo2.png'
  const quadrado4 = new quadrado(20, 10, 50, 70, "#28ff0d", 5,robo02, vidasQuadrado4);
  quadrados.push(quadrado4);
  
  const obstaculo01 = new Image();
  obstaculo01.src = '../img/logoPrincipal.png'
  const quadrado2 = new quadrado(100, 120, 550, 50, "#E3DA46", 0, obstaculo01);
  quadrados.push(quadrado2);

  const obstaculo02 = new Image();
  obstaculo02.src = '../img/logoPrincipal.png'
  const quadrado3 = new quadrado(400, 350, 500, 50, "#E3DA46", 0, obstaculo02);
  quadrados.push(quadrado3);

  // pressionar as teclas quadrado 1
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = false;
        break;
      case 'ArrowUp':
        moveUp = false;
        break;
      case 'ArrowRight':
        moveRight = false;
        break;
      case 'ArrowDown':
        moveDown = false;
        break;
    }
  });

  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }
    verificarColisao();
  }

    // pressionar as teclas quadrado 4
  window.addEventListener('keydown', function (f) {
    const nomeKey1 = f.key;
    console.log(nomeKey1);
    switch (nomeKey1) {
      case 'a':
        moveLeft1 = true;
        break;
      case 'w':
        moveUp1 = true;
        break;
      case 'd':
        moveRight1 = true;
        break;
      case 's':
        moveDown1 = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (f) => {
    const key1 = f.key;
    switch (key1) {
      case 'a':
        moveLeft1 = false;
        break;
      case 'w':
        moveUp1 = false;
        break;
      case 'd':
        moveRight1 = false;
        break;
      case 's':
        moveDown1 = false;
        break;
    }
  });

  function moverQuadrados1() {
    if (moveLeft1 && !moveRight1) {
      quadrado4.posX -= quadrado4.velocidade;
    }
    if (moveRight1 && !moveLeft1) {
      quadrado4.posX += quadrado4.velocidade;
    }
    if (moveUp1 && !moveDown1) {
      quadrado4.posY -= quadrado4.velocidade;
    }
    if (moveDown1 && !moveUp1) {
      quadrado4.posY += quadrado4.velocidade;
    }
    verificarColisao();

    //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
    quadrado4.posX = Math.max(0, Math.min(cnv.width - quadrado4.width, quadrado4.posX));
    quadrado4.posY = Math.max(0, Math.min(cnv.height - quadrado4.height, quadrado4.posY));
  
  }


  function verificarColisoesQuadrado1() {
    for (const i in quadrados) {
      const quadrado = quadrados[i];
      if (quadrado != quadrado1 && quadrado != quadrado4) {
        if (
          quadrado1.posX < quadrado.posX + quadrado.width &&
          quadrado1.posX + quadrado1.width > quadrado.posX &&
          quadrado1.posY < quadrado.posY + quadrado.height &&
          quadrado1.posY + quadrado1.height > quadrado.posY
        ) {
          // Colisão detectada, reverte o movimento de quadrado1
          if (moveLeft) quadrado1.posX += quadrado1.velocidade;
          if (moveRight) quadrado1.posX -= quadrado1.velocidade;
          if (moveUp) quadrado1.posY += quadrado1.velocidade;
          if (moveDown) quadrado1.posY -= quadrado1.velocidade;
        }
      }
    }
  }

  function verificarColisoesQuadrado4() {
    for (const i in quadrados) {
      const quadrado = quadrados[i];
      if (quadrado != quadrado1 && quadrado != quadrado4) {
        if (
          quadrado4.posX < quadrado.posX + quadrado.width &&
          quadrado4.posX + quadrado4.width > quadrado.posX &&
          quadrado4.posY < quadrado.posY + quadrado.height &&
          quadrado4.posY + quadrado4.height > quadrado.posY
        ) {
          // Colisão detectada, reverte o movimento de quadrado4
          if (moveLeft1) quadrado4.posX += quadrado4.velocidade;
          if (moveRight1) quadrado4.posX -= quadrado4.velocidade;
          if (moveUp1) quadrado4.posY += quadrado4.velocidade;
          if (moveDown1) quadrado4.posY -= quadrado4.velocidade;
        }
      }
    }
  }

  function verificarColisao() {
    verificarColisoesQuadrado1();
    verificarColisoesQuadrado4();

    if (
      quadrado1.posX < quadrado4.posX + quadrado4.width &&
      quadrado1.posX + quadrado1.width > quadrado4.posX &&
      quadrado1.posY < quadrado4.posY + quadrado4.height &&
      quadrado1.posY + quadrado1.height > quadrado4.posY
    ) {
      // Colisão entre quadrado 1 e quadrado 4
      const sorteioQuadrado1 = Math.floor(Math.random() * 21); 
      const sorteioQuadrado4 = Math.floor(Math.random() * 21);

      vidasQuadrado1 -= sorteioQuadrado1;
      vidasQuadrado4 -= sorteioQuadrado4;

      //Colocando as vidas na tabela
      document.querySelector('.vidaLaranja').textContent = vidasQuadrado1;
      document.querySelector('.vidaVerde').textContent = vidasQuadrado4;

      colisoes++;

      if (colisoes === 5) {
        if (vidasQuadrado1 > vidasQuadrado4) {
          alert("Robô laranja venceu!");
        } else if (vidasQuadrado4 > vidasQuadrado1) {
          alert("Robô verde venceu!");
        } else {
          alert("Empate!");
        }
        // Pare de ouvir eventos de teclado para impedir movimentos
        window.removeEventListener('keydown', function (e) {});
        window.removeEventListener('keyup', function (e) {});
        window.removeEventListener('keydown', function (f) {});
        window.removeEventListener('keyup', function (f) {});
        return;
      }

      // Redefinindo as posições dos quadrados após a colisão para posição inicial
      quadrado1.posX = 940;
      quadrado1.posY = 420;
      quadrado4.posX = 20;
      quadrado4.posY = 10;
    }
  }

  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.drawImage(spr.imagem, spr.posX, spr.posY, spr.width, spr.height);
      
    }
  }

  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    moverQuadrados1();
    exibirQuadrados();
  }
  atualizarTela();

}());