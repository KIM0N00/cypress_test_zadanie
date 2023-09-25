describe("ToDo List Test", () => {
  it("should add, mark as completed, and delete items from the list", () => {
    cy.visit("https://forhemer.github.io/React-Todo-List/");

    // Добавляем 3 элемента в ToDo лист
    cy.get(".input-text").type("Item 1{enter}");
    cy.get(".input-text").type("Item 2{enter}");
    cy.get(".input-text").type("Item 3{enter}");

    // Проверяем, что элементов в листе стало 3
    cy.get('li').should('have.length', 3);

    /* cy.get('input[type="checkbox"]').eq(0).click();*/

    // Помечаем первый элемент как выполненный
    cy.get('.TodoItem_checkbox__Tf0FQ').eq(0).click();


    // Получаем текст первого элемента
    cy.get(".TodoItem_item__iFWQW").eq(0).invoke("text").then((text) => {
      // Проверяем, что текст содержит зачеркивание
      expect(text).to.include("Item 1");
    });

    // не знал как по другому добраться до проверки отмеченного элемента, потому что через should completed не удалось найти класс и
    // по селектору тоже не получилось обозначить тест.. как можно было реализовать?

    // Удаляем второй элемент из списка
    cy.get('button').eq(2).click({ force: true });

    // Проверяем, что второй элемент больше не отображается в списке
    cy.get("li").should("have.length", 2);
  });

});