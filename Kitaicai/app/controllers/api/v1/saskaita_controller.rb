module Api
    module V1 
     class SaskaitaController <ApplicationController
         def index
             articles = Saskaita.order('id DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Saskaita.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Saskaita.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end
     def update
        article=Saskaita.find(params[:id])
        if article.update_attributes(article_param)
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
    else
        render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
end
 end

    def article_param
        params.permit(:id,:Data,:Suma)
    end
    end
 end
end