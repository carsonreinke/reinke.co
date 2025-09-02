FROM ruby:3.3

WORKDIR /app

COPY . .

RUN bundle install

# Ensure host is set to 0.0.0.0 so Docker can route traffic and that ports are forced so they can be mapped
CMD ["bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0", "-P", "4000", "--livereload", "--livereload-port", "35729"]
