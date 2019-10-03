describe('detail component controller', function () {
    'use strict';
  
    var todoService,
    stateParams,
    $componentController,
    $q;
  
    function createComponentController() {
      //$componentController(componentName, locals, [bindings], [ident]);
      //locals: Injection locals for Controller.
        
          return $componentController('detail',
          {
              todoService: todoService,
              $stateParams: stateParams
          });
  }
  
    //1 cargar la app
    beforeEach(function () {
        module('todoApp');
    });
  
    //2 Inyeccion de dependencias
    beforeEach(inject(function (_$componentController_, _todoService_, _$q_) {
        todoService = _todoService_;
        $componentController = _$componentController_;
        $q = _$q_;
    }));
  
  
    //3 MOCKS
    beforeEach(function () {
      stateParams = {id : 1};
  });
  
      describe('when init', function () {
  
        it('should have called todoService', function () {
          var ctrl = createComponentController();
          spyOn(todoService, 'getById').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        });
          ctrl.$onInit();
          expect(todoService.getById).toHaveBeenCalled(); 
      });

      it('should have called todoService wiht callThrough', function () {
        var ctrl = createComponentController();
        spyOn(todoService, 'getById').and.callThrough();
        ctrl.$onInit();
        expect(todoService.getById).toHaveBeenCalled(); 
    });
  
        it('should have correct stateId', function () {
          var ctrl = createComponentController();
          ctrl.$onInit();
          expect(ctrl.todoId).toBe(1);
      });
    });
  });
  