# Sistema Web - Projeto MVC

## Estrutura do Projeto

O projeto segue o padrão MVC:

- models: responsável pelos dados e regras de negócio
- views: interface visual do sistema
- controllers: lógica que conecta o usuário aos dados


## Menu Principal

O sistema possui os seguintes links:

- Início
- Login
- Perfil
- Cadastro

---

## Fluxo de ação do usuário

1. Usuário entra na página inicial
2. Clica em login
3. Insere usuário e senha
4. Sistema valida os dados
5. Usuário acessa o sistema

---

## Acessibilidade

Foi aplicada melhoria de usabilidade com:

- Botões com cores contrastantes
- Links com nomes claros
- Interface simples para facilitar navegação

## Status das Rotas

Quando o usuário clica no botão principal:

1. A ação é capturada pelo **Controller** (`NavigationController.js`), que atua como intermediário entre a interface e os dados.
2. O Controller verifica a ação e decide qual página ou funcionalidade deve ser executada.
3. Dependendo do botão clicado, o usuário é redirecionado para a página correspondente (ex: cadastro, login ou painel principal).
4. Durante esse processo, o sistema garante que a **View** não interaja diretamente com os dados do Model, mantendo o padrão MVC.

## Feedback ao Usuário

O sistema avisa o usuário que uma ação foi concluída através de feedback visual e interativo:

1. **Alerta (alert)**: Uma mensagem pop-up informa que a ação foi realizada com sucesso.  
2. **Mudança de cor de botões**: Após a ação, o botão clicado muda de cor e texto, indicando visualmente que a ação foi registrada.  
3. **Indicadores de status na interface**: Elementos visuais como mensagens de confirmação ou alteração de estilo reforçam que a operação foi concluída, melhorando a experiência do usuário.

## Dificuldades

O Sistema nao possui nenhum elevada complexidade, sendo bem fácil e rápido de preparar e separar os arquivos.