# Use uma imagem base do Node.js com a versão desejada
FROM node:latest
# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o restante do código-fonte do aplicativo para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install --legacy-peer-deps

# Execute o comando de compilação do Angular (assumindo que o comando seja 'ng build')
RUN npm run build
