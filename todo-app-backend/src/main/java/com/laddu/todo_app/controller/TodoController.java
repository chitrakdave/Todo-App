package com.laddu.todo_app.controller;

import com.laddu.todo_app.entity.Todo;
import com.laddu.todo_app.service.TodoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    // create todo REST API

    @PostMapping
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody Todo todo) {

        Todo createdTodo= todoService.createTodo(todo);

        return new ResponseEntity<>(createdTodo, HttpStatus.CREATED);
    }

    // get all todos REST API

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {

        List<Todo> allTodos= todoService.getAllTodos();

        return new ResponseEntity<>(allTodos, HttpStatus.OK);
    }

    // get todo REST API

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id) {

        Todo todo= todoService.getTodoById(id);

        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    // update todo REST API

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id,
                                           @Valid @RequestBody Todo todo) {

        Todo updatedTodo= todoService.updateTodo(id, todo);

        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    // delete todo REST API

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodoById(@PathVariable Long id) {

        todoService.deleteTodoById(id);

        return ResponseEntity.ok("Todo is deleted with id:"+ id);
    }
}
