Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :articles
      resources :klientas
      resources :darbuotojas
      resources :automobilis
      resources :klientas
      resources :pageidavimas
      resources :remontas
      resources :saskaita
      resources :trukstama_dalis
      resources :atsiliepimas
      resources :dalis
      resources :gedimas
      resources :uzsakymas
    end
  end
end