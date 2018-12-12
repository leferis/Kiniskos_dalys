module Api
    module V1 
     class TrukstamaDalisController <ApplicationController
         def index
             articles =Trukstama_dalis.order('Data DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Trukstama_dalis.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Trukstama_dalis.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end


    def article_param
        params.permit(:Data,:fk_Darbuotojastabelio_nr,:Dalis)
    end
    end
 end
end