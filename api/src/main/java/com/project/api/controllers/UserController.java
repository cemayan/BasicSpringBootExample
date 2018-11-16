package com.project.api.controllers;

import com.project.api.models.User;
import com.project.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {


    @Autowired
    private UserRepository userRepository;


    @RequestMapping(value = "/", method = RequestMethod.GET, produces = "application/json")
    List<User> getView(Model model) {
        return (List<User>) userRepository.findAll();
    }


    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public List<User> getUsersByName(@PathVariable("name") String name) {
        return userRepository.findByName(name);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyUserById(@Valid @RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    String newUser(@Valid @RequestBody User user){
        userRepository.save(user);
        return "";
    }

}
