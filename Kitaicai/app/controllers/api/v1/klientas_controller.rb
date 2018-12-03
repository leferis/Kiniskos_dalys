module Api
    module V1 
     class KlientasController <ApplicationController
         def index
             articles = Klientas.order('Vardas DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Klientas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Klientas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end


    def article_param
        params.permit(:id,:Vardas,:Pavarde,:Slapyvardis,:Slaptazodis,:Tipas)
    end
    end
 end
end