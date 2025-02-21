class StocksController < ApplicationController
  def index
    country_name = params[:country] || 'Россия'
    @stocks = StocksInfo.joins(:country, :stocks_data)
                        .where(countries: { country_name: country_name })
                        .select('stocks_infos.id, stocks_infos.name, 
                                 stocks_data.last_deal, stocks_data.change_percent, 
                                 stocks_data.open, stocks_data.high, stocks_data.low, 
                                 stocks_data.close, stocks_data.volume, stocks_data.last_time')
                        .map do |stock|
                          stock_data = stock.stocks_data.first
                          {
                            id: stock.id,
                            name: stock.name,
                            last_deal: stock_data.last_deal,
                            change_percent: stock_data.change_percent,
                            open: stock_data.open,
                            high: stock_data.high,
                            low: stock_data.low,
                            close: stock_data.close,
                            volume: stock_data.volume,
                            last_time: stock_data.last_time
                          }
                        end
    render json: @stocks
  end

  def show
    @stock = StocksInfo.joins(:stocks_data)
                       .where(id: params[:id])
                       .select('stocks_infos.id, stocks_infos.name, stocks_infos.description, 
                                stocks_data.last_deal, stocks_data.change_percent, 
                                stocks_data.open, stocks_data.high, stocks_data.low, 
                                stocks_data.close, stocks_data.volume, stocks_data.last_time')
                       .first
    if @stock
      stock_data = @stock.stocks_data.first
      render json: {
        id: @stock.id,
        name: @stock.name,
        description: @stock.description,
        last_deal: stock_data.last_deal,
        change_percent: stock_data.change_percent,
        open: stock_data.open,
        high: stock_data.high,
        low: stock_data.low,
        close: stock_data.close,
        volume: stock_data.volume,
        last_time: stock_data.last_time
      }
    else
      render json: { error: 'Stock not found' }, status: :not_found
    end
  end
end