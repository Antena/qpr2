use Rack::Static,
  :urls => ["/app/css/", "/app/js/", "/app/data/", "/app/lib/", "/app/partials/"],
  :root => "public/"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/app/index.html', File::RDONLY)
  ]
}
