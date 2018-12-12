module Api
    module V1 
     class UzsakymasController <ApplicationController
         def index
             articles = Užsakymas.order('ID DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles=Užsakymas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Užsakymas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end
     def update
        articles=Užsakymas.find(params[:id])
        if articles.update_attributes(article_param)
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok        
    else
        render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
end
 end

    def article_param
        params.permit(:Data,:Busena,:fk_Saskaitatabelio_nr,:fk_KlientasID,:fk_AutomobilisID)
    end
    end
 end
end