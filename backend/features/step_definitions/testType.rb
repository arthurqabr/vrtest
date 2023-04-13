Given('que eu tenha acesso ao endpoint https:\/\/portal.vr.com.br\/api-web\/comum\/enumerations\/VRPAT') do
  @get_url = 'https://portal.vr.com.br/api-web/comum/enumerations/VRPAT'
end

  Then('eu faço uma requisição GET') do
    @lista_produtos = HTTParty.get(@get_url)
  end

  When('o status da resposta deve ser {int}') do |int|
    expect(@lista_produtos.code).to eql 200
    expect(@lista_produtos.message).to eql 'OK'
  end

  When('o corpo da resposta deve conter a chave {string}') do |chave|
    response_json = JSON.parse(@lista_produtos.body)
    expect(response_json.key?(chave)).to be true
    @tipo_estabelecimento = response_json[chave].sample
  end

  When('eu imprimo um tipo de estabelecimento aleatório') do
    puts @tipo_estabelecimento
  end
