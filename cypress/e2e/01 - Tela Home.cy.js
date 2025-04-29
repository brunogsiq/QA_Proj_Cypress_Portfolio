/// <reference types="cypress" /> 

var Context = 0;
var Describe = 0;
var Teste = 0;
var Complemento = 0;

context(`${++Context} - Tela de Home.`, () =>
{
	describe(`Cenário ${++Describe} - Critérios de aceite.`, () =>
	{
		Teste = 0;
		Complemento = 0;

		beforeEach(() =>
		{
			cy.visit(Cypress.env("baseUrl"));
		});

		it(`Teste ${++Teste}.${++Complemento} - Validar acesso a url do projeto.`, () =>
		{
			//Dado que foi realizar o acesso a url do projeto
			//Quando validar a url
			//Então deverá ser igual a indica
			cy.url().should("eq", "https://brunogsiq.github.io/index.html");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização do menu superior esquerdo.`, () =>
		{
			//Dado que foi realizado o acesso ao projeto
			//Quando validar o menu superior esquerdo
			//Então o sistema deverá apresentar os itens:
			cy.get("#listaEsquerda > .listaItem")
				.should("contain", "Home")
				.and("be.visible")
				.and("contain", "Quem Sou")
				.and("be.visible")
				.and("contain", "Softs Skills")
				.and("be.visible")
				.and("contain", "Hards Skills")
				.and("be.visible")
				.and("contain", "Recomendações")
				.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização do menu superior direito.`, () =>
		{
			//Dado que foi realizado o acesso ao projeto
			//Quando validar o menu superior direito
			//Então o sistema deverá apresentar os itens:
			cy.get("#listaDireita > .listaItem")
				.should("contain", "Portfólio")
				.and("be.visible")
				.and("contain", "Currículo")
				.and("be.visible")
				.and("contain", "Certificações")
				.and("be.visible")
				.and("contain", "Blog")
				.and("be.visible")
				.and("contain", "Contato")
				.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção foto.`, () =>
		{
			//Dado que foi realizado o acesso ao projeto
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#pictureBGS > img")
				.should("have.attr", "alt", "Minha Foto")
				.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção Sobre Mim.`, () =>
		{
			//Dado que a seção sobre mim está sendo apresentada
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#conteudoPrimarioIndex > h2")
				.should("contain", "Sobre Mim")
				.and("be.visible")
				cy.get("#conteudoPrimarioIndex > p")
					.should("contain", "Profissional")
					.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção Meus Projetos.`, () =>
		{
			//Dado que a seção meus projetos está sendo apresentada
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#conteudoSecundarioIndex > h2")
				.should("contain", "Meus Projetos")
				.and("be.visible")
				cy.get("#conteudoSecundarioIndex > .carouselProjetosHome")
					.should("contain", "Projeto")
					.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção Contato Whatsapp.`, () =>
		{
			//Dado que a seção contato pelo whatsapp está sendo apresentada
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#conteudoTerciarioIndex > h2")
				.should("contain", "Necessita Com Urgência De Um Especialista")
				.and("be.visible")
				cy.get("#conteudoTerciarioIndex > #cta-whatsapp")
					.should("contain", "Chamar no WhatsApp")
					.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção Contato Formulário.`, () =>
		{
			//Dado que a seção contato pelo formulário está sendo apresentada
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#conteudoQuartenarioIndex > h2")
				.should("contain", "Entre em Contato")
				.and("be.visible")
				cy.get("#conteudoQuartenarioIndex > h4")
					.should("contain", "Apoio - Consultoria")
					.and("be.visible")
				cy.get("#conteudoQuartenarioIndex > #contactForm")
					.should("contain.html", "type", "text")
					.and("be.visible")
				cy.get("#conteudoQuartenarioIndex > #contactForm > div > .formularioAtencao")
					.should("contain", "Por favor, inclua na mensagem:")
					.and("be.visible");
				cy.get("#conteudoQuartenarioIndex > #contactForm > #messageContato")
					.should("contain.attr", "placeholder", "Digite sua mensagem aqui...")
					.and("be.visible")
				cy.get("#conteudoQuartenarioIndex > #contactForm > #buttonEnviar")
					.should("contain.attr", "type", "submit")
					.and("contain", "Enviar")
					.and("be.visible");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar visualização da seção Rodapé.`, () =>
		{
			//Dado que o rodapé está sendo apresentado
			//Quando validar as informações
			//Então o sistema deverá apresentar:
			cy.get("#rodape > #mensagem")
				.should("contain", "Obrigado por visitar! Veja mais em...")
				.and("be.visible")
				cy.get("#rodape > #icones")
					.should("contain.html", "a")
					.and("be.visible")
				cy.get("#rodape > #direitos")
					.should("contain", "© 2025 - Todos os direitos reservados.")
					.and("be.visible")
		});
	});

	describe(`Cenário ${++Describe} - Regras de negócio.`, () =>
	{
		Teste = Teste++;
		Complemento = 0;

		beforeEach(() =>
		{
			cy.visit(Cypress.env("baseUrl"));
		});

		it.skip(`Teste ${++Teste}.${++Complemento} - ...`, () =>
		{
            //sobre mim - meus projetos - - contato - rodape
        });

		it(`Teste ${Teste}.${++Complemento} - Validar funcionalidade chamar no whatsapp.`, () =>
		{
			//Dado que foi realizado um evento de clique na opção Chamar no whatsapp
			cy.get("#btn-whatsapp")
				//Remove atributo de abertura em nova guia do botão whatsapp
				.invoke("removeAttr", "target")
				.click();

			//Quando carregar a nova url
			cy.wait(100);

			//Então a nova url deverá conter o número correto para contato.
			cy.url()
				.should("include", "5548991059871");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar preenchimento do formulário - Válido.`, () =>
		{
			//Dado que foi realizado o preenchimento do nome ou empresa
			cy.get("#contactForm > input")
				.type("Nome Teste Sobrenome Teste")

			//E foi realizado o preenchimento da mensagem
			cy.get("#contactForm >#messageContato")
				.type("Mensagem teste... Olá tudo bem?! ...Teste Mensagem");

			//Quando realizar um evento de clique na opção enviar
			cy.get("#buttonEnviar")
				.click();

			// Intercepta o POST para o EmailJS e simula uma resposta de sucesso
			cy.intercept("POST", "https://api.emailjs.com/api/v1.0/email/send-form", {
				statusCode: 200,
				body: { status: "OK" },
			}).as("envioEmail");
			// Aguarda o envio e valida que o POST foi chamado
			cy.wait("@envioEmail").its("response.statusCode").should("eq", 200);
		
			//Então o sistema deverá apresentar um alerta de sucesso de envio da mensagem.
			cy.get("#formMessage")
				.should("be.visible")
				.and("contain.text", "Mensagem enviada com sucesso!");
		});

		it(`Teste ${Teste}.${++Complemento} - Validar preenchimento do formulário - Inválido.`, () =>
		{
			//Dado que foi realizado o preenchimento do nome ou empresa
			cy.get("#contactForm > input")
				.type("Nome Teste Sobrenome Teste")

			//E foi realizado o preenchimento da mensagem
			cy.get("#contactForm >#messageContato")
				.type("Mensagem teste... Olá tudo bem?! ...Teste Mensagem");

			//Quando realizar um evento de clique na opção enviar
			cy.get("#buttonEnviar")
				.click();

			// Intercepta o POST para o EmailJS e simula uma resposta de sucesso
			cy.intercept("POST", "https://api.emailjs.com/api/v1.0/email/send-form", {
				statusCode: 403,
				body: { status: "FAIL" },
			}).as("envioEmail");
			// Aguarda o envio e valida que o POST foi chamado
			cy.wait("@envioEmail")
				.its("response.statusCode").should("eq", 403);
		
			//Então o sistema deverá apresentar um alerta de falha de envio da mensagem.
			cy.get("#formMessage")
				.should("be.visible")
				.and("contain.text", "Falha ao enviar mensagem. Tente novamente.");
		});
    });
});