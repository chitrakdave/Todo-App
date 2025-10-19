package com.laddu.todo_app.service.impl;

import com.laddu.todo_app.entity.Todo;
import com.laddu.todo_app.repository.TodoRepository;
import com.laddu.todo_app.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    @Override
    public Todo createTodo(Todo todo) {

        Todo createdTodo= todoRepository.save(todo);

        return createdTodo;
    }

    @Override
    public List<Todo> getAllTodos() {

        List<Todo> allTodos= todoRepository.findAll();

        return allTodos;
    }

    @Override
    public Todo getTodoById(Long id) {

        Todo todo= todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id:" + id));

        return todo;
    }

    @Override
    public Todo updateTodo(Long id, Todo todo) {

        Todo updatedTodo= todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id:" + id));

        updatedTodo.setTask(todo.getTask());
        updatedTodo.setDate(todo.getDate());

        Todo updatedTodo1= todoRepository.save(updatedTodo);

        return updatedTodo1;
    }

    @Override
    public void deleteTodoById(Long id) {

        Todo todo= todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id:" + id));

        todoRepository.deleteById(id);
    }
}
