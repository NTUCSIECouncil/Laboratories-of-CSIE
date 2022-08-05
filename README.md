# CSIECouncil-2022

## Usage

1. Install Ruby

2. Install jekyll and bundler gems
```
gem install jekyll bundler
```

3. Install required plugins
```
bundle install
```

4. Start Website Locally
```
bundle exec jekyll serve --livereload
```

* Compile tailwindcss real-time

```
npx tailwindcss -i ./assets/css/base.css -o ./assets/css/tailwind.css --watch
```

* Deploy to server

```
bash deploy.sh
```

* Run server locally

```
bash serve.sh
```

