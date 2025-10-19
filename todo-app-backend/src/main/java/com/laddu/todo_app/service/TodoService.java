package com.laddu.todo_app.service;

import com.laddu.todo_app.entity.Todo;
import java.util.List;

public interface TodoService {

    Todo createTodo(Todo todo);

    List<Todo> getAllTodos();

    Todo getTodoById(Long id);

    Todo updateTodo(Long id, Todo todo);

    void deleteTodoById(Long id);
}