module Api
    module V1 
     class AutomobilisController <ApplicationController
         def index
             articles = Automobilis.order('id DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Automobilis.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Automobilis.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end
     def update
        article=Automobilis.find(params[:id])
        if article.update_attributes(article_param)
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
    else
        render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
end
 end
    def article_param
        params.permit(:VIN,:id,:Modelis,:Marke,:Kubatura,:Gamybos_Metai,:Registracijos_numeris,:Pakaitinis_Auto,:Kuras,:fk_KlientasID,:Imones_kodas,:fk_KlientasIDNaudot)
    end
    end
 end
end