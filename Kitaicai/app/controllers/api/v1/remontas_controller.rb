module Api
    module V1 
     class RemontasController <ApplicationController
         def index
             articles = Remontas.order('ID DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Remontas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Remontas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end
     def update
        article=Remontas.find(params[:id])
        if article.update_attributes(article_param)
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        
    else
        render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
    
end
 end
    def article_param
        params.permit(:Pradzia,:Numatoma_pabaiga,:Remonto_kaina,:Baigtas,:fk_UzsakymasId)
    end
    end
 end
end