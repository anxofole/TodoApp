describe('todoService test', function () {
  'use strict';

  var todoService,
    $httpBackend;

  //1 cargar la app
  beforeEach(function () {
    module('todoApp');
  });


  //2 Inyeccion de dependencias
  beforeEach(inject(function (_$httpBackend_, _todoService_) {
    todoService = _todoService_;
    $httpBackend = _$httpBackend_;
  }));

  //2 verificar que no hacemos peticiones no deseadas
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
});

  describe('when service calls getByID', function () {

    it('should call to the server', function () {

      var mockResponse = { id: 1, name: 'text', done: false };
      $httpBackend.expectGET(/\S+api\/todos\/\S+/).respond(mockResponse);

      todoService.getById(1).then(function (response) {
        expect(response.data).toEqual(mockResponse);
      });
      $httpBackend.flush();
    });

  });

});
