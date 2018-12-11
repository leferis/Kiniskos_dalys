module Api
    module V1 
     class PageidavimasController <ApplicationController
         def index
             articles = Pageidavimas.order('ID DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Pageidavimas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Pageidavimas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end


    def article_param
        params.permit(:ID,:Data,:Tekstas,:Tipas,:fk_KlientasID)
    end
    end
 end
end