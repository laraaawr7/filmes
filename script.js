const data = {
    generos: ["Ação", "Comédia", "Drama", "Romance", "Terror", "Dorama", "Anime",],
    plataformas: {
    "Ação": ["Netflix", "Amazon Prime"],
    "Comédia": ["Pluto TV","Apple TV"],
    "Drama": ["Catflix","Telegram"],
    "Romance": ["Cinema Premium", "HBO Max"],
    "Terror": ["Horror TV", "Paramount+"],
    "Dorama": ["Viki", "YouTube"],
    "Anime": ["Crunchyroll", "Hulu"],

    },

    filmes: {
    "Netflix": ["John Wick 1,2,3 e 4","Gladiador"],
    "Amazon Prime": ["Vingadores: Ultimato","Vingadores: Guerra Infinita"],
    "Pluto TV": ["O Alto da Compadecida","Deadpool"],
    "Apple TV": ["Superbad","Se Beber Não Case"],
    "Catflix": ["Uma Parte de Você","Close"],
    "Telegram": ["X-A Marca da Morte","Pearl"],
    "Cinema Premium": ["Crush a Altura","Para Todos Garotos que já Amei"],
    "HBO Max": ["Minha Culpa","Como Vender a Lua"],
    "Horror TV": ["Annabelle","Imaculada"],
    "Paramount+": ["Cisne Negro","O Telefone Preto"],
    "Viki": ["Beleza Verdadeira","A garota de fora"],
    "YouTube": ["O Preço do Silencio","Sweet Home"],
    "Crunchyroll": ["Erased","Jojo Bizarre Adventure"],
    "Hulu": ["Attack on Titan","NaNa"],

    }
    };

    //toda vez que o conteúdo da tela for atualizado
    document.addEventListener("DOMContentLoaded", () => {
        //associanto o elemento html com a variavel

    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }