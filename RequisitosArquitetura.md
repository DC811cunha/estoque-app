# Requisitos e Arquitetura do Projeto de Simulação de Estoque

## 1. Requisitos Funcionais

- **Gestão de Produtos e Clientes (CRUD):**  
  - *Produtos:* Permitir criação, visualização, atualização e exclusão de registros contendo nome, descrição, preço e quantidade em estoque.  
  - *Clientes:* Permitir criação, visualização, atualização e exclusão de registros com nome, e-mail e telefone.

- **Processamento de Pedidos de Venda:**  
  - Validação da disponibilidade de estoque antes da criação do pedido.  
  - Atualização do estoque e registro da transação garantindo integridade (commit/rollback).  

- **Controle de Acesso:**  
  - Implementação de autenticação com login seguro via **JWT (JSON Web Token)**.

- **Comunicação e Integração:**  
  - Exposição de APIs **RESTful** para integração entre front-end e back-end.  
  - Documentação dos endpoints via **Swagger/OpenAPI**.

- **Qualidade e Automação:**  
  - Desenvolvimento **orientado a testes (TDD)** com testes unitários e de integração.  
  - Implementação de **pipelines CI/CD** para automação de build, testes e deploy.  

## 2. Requisitos Não Funcionais

- **Performance e Escalabilidade:**  
  - Respostas rápidas e arquitetura preparada para escalabilidade horizontal e vertical.

- **Segurança:**  
  - Validação rigorosa das entradas.  
  - Proteção contra ataques como **SQL Injection, XSS e CSRF**.  
  - Autenticação segura e gerenciamento adequado de sessões.

- **Manutenibilidade e Organização:**  
  - Código modularizado e documentado seguindo padrões como **MVC (Model-View-Controller)**.  

- **Confiabilidade e Integridade de Dados:**  
  - Utilização de transações no **MySQL (InnoDB)** para garantir consistência e confiabilidade.  

- **Automação e Integração Contínua:**  
  - CI/CD para garantir deploys seguros e qualidade no desenvolvimento.  

## 3. Estratégias de Desenvolvimento e Arquitetura

### Estratégia de Desenvolvimento
- **Abordagem Iterativa e Incremental:**  
  - Desenvolvimento em ciclos curtos, com entregas frequentes e adaptação contínua.  
- **Test-Driven Development (TDD):**  
  - Implementação de testes antes da codificação para garantir qualidade e robustez.  
- **Automação com CI/CD:**  
  - Uso de pipelines para automação do processo de build, testes e deploy (ex.: **GitHub Actions, GitLab CI**).  

### Arquitetura: Monolítica (com possibilidade de evolução para Microserviços)
#### Motivação para Arquitetura Monolítica
- **Simplicidade:** Facilita o desenvolvimento inicial e reduz complexidade.  
- **Integração direta:** Comunicação eficiente entre as camadas, sem overhead de serviços distribuídos.  
- **Desenvolvimento ágil:** Redução da sobrecarga operacional para deploy e manutenção.  

#### Possível Evolução para Microserviços
- Caso o sistema cresça, componentes podem ser desacoplados, como **serviço de pedidos e autenticação**, permitindo maior escalabilidade e flexibilidade.  

## 4. Tecnologias Utilizadas e Justificativas

| **Camada**     | **Tecnologia**            | **Motivação**  |
|---------------|-------------------------|---------------|
| **Front-end**  | **React.js**  | Interface modular e reativa, ecossistema robusto e Virtual DOM para performance. |
| **Back-end**  | **Node.js + Express**  | Modelo assíncrono eficiente, suporte robusto a APIs RESTful e autenticação JWT. |
| **Banco de Dados** | **MySQL (InnoDB)** | Suporte a transações, confiabilidade e compatibilidade com ORM como Sequelize. |