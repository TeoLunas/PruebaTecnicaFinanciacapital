<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Pasos para iniciar proyecto.

## Paso 1

Clonar repositorio desde Github

```bash
git clone https://github.com/TeoLunas/PruebaTecnicaFinanciacapital.git
```

## Paso 2

Ingresar a carpeta de proyecto clonado e instalar dependencias.
```bash
cd prueba-tecnica-financia-capital
npm install
```

## Paso 3

Se debe definir propiedad en archivo .env, tomar como referencia archivo .env.example

## Paso 4
Inicialisar contenedor con base de datos postgreslq

```bash
docker compose up -d
```

## Paso 5

Correr migraciones de la base de datos, esto para generar las tablas necesarias.

Se diponibilizaron 3 comandos para las migraciones.

- Comando para generar archivo de migraciones

```bash
npm run migration:generate -- ./src/migrations/nombre_migracion
```

- Comando para correr/ejecutar la migracion generada o la ultima migracion disponible.
```bash
npm run migration:run
```

- Comando para revertir la ultima migracion ejecutada.
```bash
npm run migration:revert
```

Para este caso debemos ejecutar el segundo comando, que permiter correr la ultima migracion disponible.


## Paso 5

Iniciar aplicacion
```
npm run star:dev
```



