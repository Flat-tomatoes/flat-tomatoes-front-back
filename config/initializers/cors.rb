# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

<<<<<<< HEAD
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
=======
 Rails.application.config.middleware.insert_before 0, Rack::Cors do
   allow do
     origins "*"

     resource "*",
       headers: :any,
       methods: [:get, :post, :put, :patch, :delete, :options, :head]
   end
 end
>>>>>>> 53c15750d1c8e4091560864138e2b3b2d264f96b
