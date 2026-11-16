import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main>
    <h1>Associação Beneficente Anjos do Lar</h1>
    <p>Bem-vindo ao nosso sistema!</p>

    <h2>Status da API</h2>
    <p id="api-status">Verificando conexão...</p>
  </main>
`;

async function verificarApi() {
  try {
    const resposta = await fetch("/api/health");

    if (!resposta.ok) {
      throw new Error("Erro ao consultar a API");
    }

    const dados = await resposta.json();

    document.querySelector("#api-status").textContent =
      `Status da API: ${dados.status} | Data e hora: ${new Date(dados.hora).toLocaleString("pt-BR")}`;
  } catch {
    document.querySelector("#api-status").textContent =
      "Não foi possível conectar à API.";
  }
}

void verificarApi();
