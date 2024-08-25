# Backend Setup

### 1.-Requisitos

- **Python**: Asegúrate de tener Python instalado.
- **Pip**: Debe estar disponible para instalar dependencias.
- **Agregar la ruta de ubicación de scripts de Python al PATH**: Generalmente, esto se hace automáticamente al instalar Python.

>[!NOTE]
Por lo general, al instalar Python, pip también se instala.

### 2.-Verificar los Requisitos

Verifica las versiones instaladas para asegurarte de que los requisitos están correctamente instalados:

```sh
python --version
```
```bash
pip --version
```
### 3.-Instalación y Activación del Entorno Virtual
- a.-Instalar virtualenv:
```bash
pip install virtualenv
```
- b.-Crear un entorno virtual:
```bash
python -m venv venv
```
- c.-Activar el entorno virtual:

  → Windows:
   
  ```bash
  .\venv\Scripts\activate
  ```
  → macOS/Linux:
  
  ```bash
  source venv/bin/activate
  ```
- d.-Desactivar el entorno virtual (cuando termines de trabajar):
```bash
deactivate
```

### 4.-Dentro del Entorno Virtual (venv)
Una vez que el entorno virtual esté activado, instala las dependencias del proyecto:
```bash
pip install -r requirements.txt
```

### 5.-Iniciar el Servidor
- Activar el servidor:
```bash
python manage.py runserver
```
- Detener el servidor: Presiona Ctrl + C.

### Extra
Solo si se borra o no se encuentra la base de datos(sqlite3):

- Crear nuevas migraciones:
```bash
python manage.py makemigrations
```
- Aplicar las migraciones a la base de datos:
```bash
python manage.py migrate
```
