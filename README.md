# Gerenciamento de OS (Ordens de Serviço)

Este é um projeto de um aplicativo de gerenciamento de ordens de serviço, desenvolvido em React Native. O aplicativo permite adicionar, alterar e excluir ordens de serviço, bem como consultar os dados relacionados.

## Funcionalidades

- Adição de novas ordens de serviço, fornecendo informações como título, descrição e data de vencimento.
- Edição das informações de uma ordem de serviço existente.
- Exclusão de ordens de serviço.
- Consulta e visualização das ordens de serviço cadastradas.
- Armazenamento dos dados utilizando o Firebase Realtime Database.

## Requisitos de Instalação

Antes de executar o aplicativo, verifique se o seguinte software está instalado em seu ambiente de desenvolvimento:

- Node.js
- npm (ou yarn)
- React Native CLI
- Expo CLI
- Android Studio (para emulação no Android)
- Xcode (para emulação no iOS)

## Como Executar o Projeto

Siga as etapas abaixo para executar o projeto em seu ambiente de desenvolvimento:

1. Clone este repositório em sua máquina local:

git clone <URL_DO_REPOSITÓRIO>

cd GerenciamentoOS

3. Instale as dependências do projeto:

npm install

ou

yarn install

4. Inicie o servidor do Expo:

npx expo start

5. Use um emulador Android/iOS ou o aplicativo Expo Go em seu dispositivo físico para visualizar o aplicativo.

## Configuração do Firebase

Para utilizar o armazenamento de dados utilizando o Firebase Realtime Database, você precisará configurar sua própria instância do Firebase e substituir as informações de configuração no arquivo `firebaseConfig.js`.

Siga as instruções na [documentação oficial do Firebase](https://firebase.google.com/docs/web/setup) para criar um novo projeto, obter suas credenciais e configurar o Realtime Database.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie uma branch para suas alterações:

git checkout -b minha-branch

3. Faça as alterações desejadas e commit:

git commit -m "Minha contribuição"

4. Envie suas alterações para o repositório remoto:

git push origin minha-branch


5. Abra um pull request neste repositório.







