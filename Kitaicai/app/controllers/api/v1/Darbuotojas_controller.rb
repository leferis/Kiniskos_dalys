module Api
    module V1 
     class DarbuotojasController <ApplicationController
         def index
             articles = Darbuotojas.order('Vardas DESC')
             render json: {status: 'SUCCESS', message: 'Loaded articles', data:articles},status: :ok
     end
     def show
        articles= Darbuotojas.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
     end
     def create 
        articles = Darbuotojas.new(article_param)

        if articles.save
            render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        end
     end


    def article_param
        params.permit(:tabelio_nr,:Vardas,:Pavarde,:Pareigos,:Slaptazodis,:RemontasID,:fk_ImoneImones_Kodas)
    end
    end
 end
end