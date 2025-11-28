# Solución de Problemas de Ejecución

Si estás teniendo problemas para ejecutar la aplicación (`flutter run`), es muy probable que se deba a que el entorno de desarrollo no está configurado correctamente para Flutter.

## 1. Verificar Instalación de Flutter
Abre tu terminal y ejecuta:
```bash
flutter doctor
```
Si recibes un error como `'flutter' is not recognized`, significa que Flutter no está instalado o no está en tu PATH.

### Solución:
1.  Descarga el SDK de Flutter desde [flutter.dev](https://flutter.dev/docs/get-started/install).
2.  Descomprime el archivo (ej. en `C:\src\flutter`).
3.  Añade `C:\src\flutter\bin` a tus Variables de Entorno (PATH).

## 2. Verificar Dispositivo
Flutter necesita un dispositivo para ejecutar la app (Emulador Android, Simulador iOS, o Navegador Web).
Ejecuta:
```bash
flutter devices
```
Si no ves ningún dispositivo conectado:
*   **Web:** Ejecuta `flutter config --enable-web` y luego `flutter run -d chrome`.
*   **Móvil:** Abre Android Studio y lanza un emulador.

## 3. Alternativa Rápida (Web)
Si no quieres instalar todo el entorno móvil ahora mismo, puedes intentar ejecutarlo como una aplicación web si tienes Chrome instalado:

```bash
flutter run -d chrome
```

## 4. Dependencias
Asegúrate de haber ejecutado:
```bash
flutter pub get
```
para descargar las librerías necesarias (`flutter_bloc`, `dio`, etc.).
