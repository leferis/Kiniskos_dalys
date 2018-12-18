module Api
    module V1 
     class GedimasController <ApplicationController
         def index
             articles = Gedimas.order('ID DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Gedimas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Gedimas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end
     def update
        article=Gedimas.find(params[:id])
        if article.update_attributes(article_param)
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
    else
        render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
end
 end

    def article_param
        params.permit(:ID,:Aprasymas,:Kategorija,:fk_RemontasID,:fk_AutomobilisID)
    end
    end
 end
end