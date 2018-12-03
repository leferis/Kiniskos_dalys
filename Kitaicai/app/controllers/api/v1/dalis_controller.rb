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
       params.permit(:Matmenys,:ID,:Kilme,:Svoris,:Aukstis,:Ilgis,:Plotis,:Pavadinimas,:Pirkimo_kaina,:Pardavimo_Kaina,:Kategorija,:fk_UzsakymoId)
   end
    end
 end