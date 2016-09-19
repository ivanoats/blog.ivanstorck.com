[Cloud9](https://c9.io/) is an awesome [online development environment](https://c9.io/site/features/) that supports [Node.js](http://nodejs.org/), [Rails](http://rubyonrails.org), and [Sinatra](http://www.sinatrarb.com/). It also supports basic [Rack](https://github.com/rack/rack) apps. The preview button on [Cloud9](https://c9.io/) is good for simple html files and node apps, but what if you have a very simple Rack app? I have one [just to serve some static files](https://devcenter.heroku.com/articles/static-sites-ruby). Here's what you need to get it runing:

1. open a terminal window
2. type `rackup  -p $PORT -o $IP` 

$PORT and $IP are environment variables that are already set in your Cloud9 bash environment.
