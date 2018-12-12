module Api
    module V1 
     class DarbuotojasController <ApplicationController
         def index
             articles = Darbuotojas.order('Vardas DESC')
             render json: {data:articles},status: :ok
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
     def destroy
        article= Darbuotojas.find(params[:id])
        article.destroy
        render json: {status: 'Deleted'},status: :ok
     end
     def update
            article=Darbuotojas.find(params[:id])
            if article.update_attributes(article_param)
                render json: {status: 'SUCCESS', message: 'Loaded article', data:articles},status: :ok
            
        else
            render json: {status: 'ERROR', message: 'Loaded article', data:articles.errors},status: :unprocessable_entity
        
    end
     end
    def article_param
        params.permit(:tabelio_nr,:Vardas,:Pavarde,:Pareigos,:Slaptazodis,:fk_ImoneImones_Kodas)
    end
    end
 end
end