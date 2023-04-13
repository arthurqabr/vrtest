# language: en

Feature: Validar tipo de estabelecimento
  Para validar informações
  O usuário do sistema
  Deseja poder consultar o serviço e validar a chave

  Scenario: Consultar serviço e validar a chave "typeOfEstablishment"
    Given que eu tenha acesso ao endpoint https://portal.vr.com.br/api-web/comum/enumerations/VRPAT
    Then eu faço uma requisição GET
    When o status da resposta deve ser 200
    And o corpo da resposta deve conter a chave "typeOfEstablishment"
    And eu imprimo um tipo de estabelecimento aleatório
