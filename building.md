## building flutter :

```sh
cd src
flutter pub get
flutter build web
cd build/web
uglify -s ~/flutter_service_worker.js -o ~/flutter_service_worker.min.js
uglify -s ~/main.dart.js -o ~/main.dart.min.js
uglify -s ~/index.html -o ~index.min.html
rename index.main.html index.min.html.ejs
```
