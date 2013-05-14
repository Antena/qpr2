use Rack::Static,
  :urls => ["/css/", "/js/", "/data/", "/lib/", "/img/" "/partials/"],
  :root => "public/app/"

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
