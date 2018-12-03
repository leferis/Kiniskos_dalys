module Api
    module V1 
     class AtsiliepimasController <ApplicationController
        def index
            articles = Atsiliepimas.order('Data DESC')
            render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
        end
    def show
       articles= Atsiliepimas.find(params[:ID])
       render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
    end
    def create 
       articles = Atsiliepimas.new(article_param)

       if articles.save
           render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
       else
           render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
       end
    end


   def article_param
       params.permit(:ID,:Data,:Teigiamas,:Aprasymas,:fk_AutomobilisID,:fk_DalisID,:fk_RemontasID,:fk_KlientasID)
   end
    end
 end
end