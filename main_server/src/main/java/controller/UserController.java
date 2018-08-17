package controller;

import domain.UserRepository;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        Optional<User> user = userRepository.findById(id);

        return user.orElse(null);
    }

    @GetMapping("/search/{name}")
    public List<User> getUserByName(@PathVariable String name) {
        return userRepository.findByNameContaining(name);
    }

    @PostMapping("")
    public User insertUser(@RequestBody User user) {
        User result = userRepository.save(user);
        return result;
    }
}
