# API REST - RESTAURANT

``` bash
npm i 
```
## Categorias
| Método | Ruta | Descripción |
|-|-|-|
| GET | http://localhost:3000/api/categorias/listar | Listará los todos las categorias. |
| GET | http://localhost:3000/api/categorias/detalle/ | Mostrará el detalle de un categoria. |
| POST | http://localhost:3000/api/categorias/guardar | Permitirá crear una nueva categoria. |
| PUT | http://localhost:3000/api/categorias/editar/ | Permitirá actualizar los datos de una categoria. Usará como identificador de actualización el campo id del registro. |
| DELETE | http://localhost:3000/api/categorias/eliminar/ | Permitirá eliminar una categoria. Usará como identificador de eliminación el campo id del registro. |