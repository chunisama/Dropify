Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :playlist, only: [:create, :index, :show, :destroy]
    resources :playlists_songs, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end
end
