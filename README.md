<p align="center">
  <img src="https://logodownload.org/wp-content/uploads/2023/04/openai-logo-0.png"
  width="200" alt="Nest Logo" />
</p>

# Chat GPT API

API que se conecta a la API de Open AI para la generación de mensajes en base a un prompt establecido.

## Como recrear el proyecto?

Clonas el repositorio:

```bash
git clone https://github.com/chicho69-cesar/chatgpt-api.git
```

Después obtienes tu API Key de OpenAI, para esto acceder al panel de Open AI, (*debes de tener una cuenta creada*), ingresa al link <https://platform.openai.com/>, te diriges al apartado del menu y seleccionas la opción que dice *View API Keys*, una vez en la sección de las api keys, creas una nueva secret key y la agregas al archivo `.env` en la variable de `OPENAI_API_KEY`.

Una vez hecho esto, instalas las dependencias con cualquiera de estos comandos:

```bash
npm install
```

```bash
yarn
```

```bash
pnpm install
```

Después ejecutas el proyecto:

```bash
npm run start
```

```bash
yarn start
```

```bash
pnpm start
```

Accedes a la API con el endpoint `http://localhost:8080/api/chatgpt`, haciendo una petición POST mandando como body un objeto como este:

```json
{
  "prompt": "Hola"
}
```
