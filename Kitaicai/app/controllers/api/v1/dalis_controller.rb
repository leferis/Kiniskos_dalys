module Api
    module V1 
     class DalisController <ApplicationController
        def index
            articles = Dalis.order('ID DESC')
            render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
        end
        def show
            articles= Dalis.find(params[:ID])
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        end
        def create 
            articles = Dalis.new(article_param)
            if articles.save
                render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
            else
                render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
            end
        end
        def article_param
            params.permit(:ID,:Svoris,:Kilme,:Aukstis,:Ilgis,:Plotis,:Paveikslelis,:Pavadinimas,:Pirkimo_Kaina,:Pardavimo_Kaina,:Kategorija,:fk_UžsakymasId)
        end
     end
    end
end